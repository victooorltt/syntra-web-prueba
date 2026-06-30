// Apple-style cinematic animation presets
// Smooth, premium, fluid scroll reveals

// Signature easing — slow deceleration, cinematic feel
export const ease = [0.16, 1, 0.3, 1];

// Viewport config — trigger slightly before element enters view
export const viewport = { once: true, margin: "-80px" };

// Standard fade-up — for section headers and major blocks
export const fadeUp = {
  initial: { opacity: 0, y: 40, scale: 0.98 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport,
  transition: { duration: 1.4, ease },
};

// Large header — bigger offset, longer duration for dramatic impact
export const fadeUpLarge = {
  initial: { opacity: 0, y: 50, scale: 0.97 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport,
  transition: { duration: 1.6, ease },
};

// Staggered item — for cards, list items (pass index as delay multiplier)
export const fadeUpItem = (index = 0, step = 0.1) => ({
  initial: { opacity: 0, y: 36, scale: 0.98 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport,
  transition: { duration: 1.0, delay: index * step, ease },
});

// Fade only — subtle, no movement
export const fade = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport,
  transition: { duration: 1.2, ease },
};

// Slide from left
export const slideLeft = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport,
  transition: { duration: 1.2, ease },
};

// Slide from right
export const slideRight = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport,
  transition: { duration: 1.2, ease },
};