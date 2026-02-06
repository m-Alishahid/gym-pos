// Global Theme Configuration
// Change these values to customize the entire app's appearance

export const theme = {
  // Primary Colors
  primary: {
    hue: 217,
    saturation: 91,
    lightness: 60,
    name: 'blue'
  },

  // Secondary Colors
  secondary: {
    hue: 142,
    saturation: 71,
    lightness: 45,
    name: 'green'
  },

  // Accent Colors
  accent: {
    hue: 34,
    saturation: 100,
    lightness: 50,
    name: 'orange'
  },

  // Neutral Colors
  neutral: {
    background: {
      light: '0 0% 100%',
      dark: '222 84% 5%'
    },
    foreground: {
      light: '222 84% 5%',
      dark: '210 40% 98%'
    },
    muted: {
      light: '210 40% 96%',
      dark: '217 33% 17%'
    },
    border: {
      light: '214 32% 91%',
      dark: '217 33% 17%'
    }
  },

  // Typography
  font: {
    family: {
      sans: 'Geist, system-ui, sans-serif',
      mono: 'Geist Mono, monospace'
    },
    size: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem'
    }
  },

  // Spacing
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem'
  },

  // Border Radius
  radius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px'
  },

  // Effects
  effects: {
    glass: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropBlur: '10px',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    neon: {
      glow: '0 0 10px rgba(34, 197, 94, 0.3)',
      textShadow: '0 0 10px rgba(34, 197, 94, 0.5)'
    }
  },

  // Animations
  animation: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms'
    },
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
  }
};

// Helper functions to generate CSS values
export const generateHSL = (hue: number, saturation: number, lightness: number) => {
  return `${hue} ${saturation}% ${lightness}%`;
};

export const generateColor = (hue: number, saturation: number, lightness: number) => {
  return `hsl(${generateHSL(hue, saturation, lightness)})`;
};

// Generate theme-specific colors
export const colors = {
  primary: generateColor(theme.primary.hue, theme.primary.saturation, theme.primary.lightness),
  secondary: generateColor(theme.secondary.hue, theme.secondary.saturation, theme.secondary.lightness),
  accent: generateColor(theme.accent.hue, theme.accent.saturation, theme.accent.lightness),
  neonGreen: generateColor(theme.secondary.hue, theme.secondary.saturation, theme.secondary.lightness),
};
