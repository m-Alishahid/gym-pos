// Global Theme Configuration
// Change these values to customize the entire app's appearance

export const theme = {
  // Primary Colors - Vibrant Purple/Pink
  primary: {
    hue: 270,
    saturation: 85,
    lightness: 55,
    name: 'purple'
  },

  // Secondary Colors - Cyan/Teal
  secondary: {
    hue: 180,
    saturation: 90,
    lightness: 50,
    name: 'cyan'
  },

  // Accent Colors - Hot Pink
  accent: {
    hue: 320,
    saturation: 90,
    lightness: 55,
    name: 'pink'
  },

  // Neutral Colors
  neutral: {
    background: {
      light: '0 0% 100%',
      dark: '250 25% 8%'  // Deep dark purple/black
    },
    foreground: {
      light: '210 40% 98%',
      dark: '210 40% 98%'
    },
    muted: {
      light: '210 40% 96%',
      dark: '250 20% 15%'
    },
    border: {
      light: '214 32% 91%',
      dark: '250 20% 20%'
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
      background: 'rgba(255, 255, 255, 0.03)',
      backdropBlur: '12px',
      border: '1px solid rgba(255, 255, 255, 0.08)'
    },
    neon: {
      glow: '0 0 15px rgba(139, 92, 246, 0.4)',
      textShadow: '0 0 10px rgba(139, 92, 246, 0.5)'
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
