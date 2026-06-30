import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
import Home from '@/pages/Home.jsx';
import Terminos from '@/pages/Terminos';
import Privacidad from '@/pages/Privacidad';
import IAClinicasEsteticas from '@/pages/IA-Clinicas-Esteticas';
import IAInmobiliarias from '@/pages/IA-Inmobiliarias';
import IADespachosAbogados from '@/pages/IA-Despachos-Abogados';
import IAFisioterapia from '@/pages/IA-Fisioterapia';
import IACentrosBelleza from '@/pages/IA-Centros-Belleza';
import RestaurantePremium from '@/pages/RestaurantePremium';
import EmpresaCorporativa from '@/pages/EmpresaCorporativa';
// Add page imports here

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/terminos" element={<Terminos />} />
      <Route path="/privacidad" element={<Privacidad />} />
      <Route path="/ia-clinicas-esteticas" element={<IAClinicasEsteticas />} />
      <Route path="/ia-inmobiliarias" element={<IAInmobiliarias />} />
      <Route path="/ia-despachos-abogados" element={<IADespachosAbogados />} />
      <Route path="/ia-fisioterapia" element={<IAFisioterapia />} />
      <Route path="/ia-centros-belleza" element={<IACentrosBelleza />} />
      <Route path="/restaurante-premium" element={<RestaurantePremium />} />
      <Route path="/empresa-corporativa" element={<EmpresaCorporativa />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App