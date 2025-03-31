export const theme = {
  colors: {
    primary: {
      50: 'green-50',
      100: 'green-100',
      200: 'green-200',
      300: 'green-300',
      400: 'green-400',
      500: 'green-500',
      600: 'green-600',
      700: 'green-700',
      800: 'green-800',
      900: 'green-900',
    },
    secondary: {
      50: 'emerald-50',
      100: 'emerald-100',
      200: 'emerald-200',
      300: 'emerald-300',
      400: 'emerald-400',
      500: 'emerald-500',
      600: 'emerald-600',
      700: 'emerald-700',
      800: 'emerald-800',
      900: 'emerald-900',
    },
    accent: {
      50: 'lime-50',
      100: 'lime-100',
      200: 'lime-200',
      300: 'lime-300',
      400: 'lime-400',
      500: 'lime-500',
      600: 'lime-600',
      700: 'lime-700',
      800: 'lime-800',
      900: 'lime-900',
    },
    gray: {
      50: 'gray-50',
      100: 'gray-100',
      200: 'gray-200',
      300: 'gray-300',
      400: 'gray-400',
      500: 'gray-500',
      600: 'gray-600',
      700: 'gray-700',
      800: 'gray-800',
      900: 'gray-900',
    },
  },
  gradients: {
    hero: {
      primary: 'from-green-50 via-green-100 to-white',
      overlay1: 'from-green-200/40 via-green-100/30 to-transparent',
      overlay2: 'from-white via-green-50/50 to-transparent',
      overlay3: 'from-green-100/20 via-white/30 to-transparent',
    },
    button: {
      primary: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      secondary: 'from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-md hover:shadow-lg',
      outline: 'border border-gray-300 hover:border-emerald-500 bg-white/50 backdrop-blur-sm text-gray-700 hover:text-emerald-600 hover:shadow-md',
      cta: 'from-green-600 via-green-500 to-emerald-600',
      auth: 'from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700',
    },
    card: {
      primary: 'from-green-50 to-white',
      feature: 'from-green-50 to-white',
      testimonial: 'bg-lime-50',
    },
  },
  shadows: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  },
  borders: {
    light: 'border border-white/20',
    gray: 'border border-gray-100',
  },
  backgrounds: {
    glass: 'backdrop-blur-md',
    translucent: 'bg-white/50 backdrop-blur-sm',
  },
} as const;

// Type-safe utility functions
type ColorShade = keyof typeof theme.colors.primary;
type ColorName = keyof typeof theme.colors;

export const getColor = (color: ColorName, shade: ColorShade): string => {
  return theme.colors[color][shade];
};

export const getTextColor = (color: ColorName, shade: ColorShade): string => {
  return `text-${theme.colors[color][shade]}`;
};

export const getBgColor = (color: ColorName, shade: ColorShade): string => {
  return `bg-${theme.colors[color][shade]}`;
};

export const getGradient = (
  type: keyof typeof theme.gradients,
  variant: keyof (typeof theme.gradients)[typeof type]
): string => {
  return theme.gradients[type][variant];
};

export type Theme = typeof theme;
export default theme;
