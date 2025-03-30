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
      50: 'purple-50',
      100: 'purple-100',
      200: 'purple-200',
      300: 'purple-300',
      400: 'purple-400',
      500: 'purple-500',
      600: 'purple-600',
      700: 'purple-700',
      800: 'purple-800',
      900: 'purple-900',
    },
    accent: {
      50: 'indigo-50',
      100: 'indigo-100',
      200: 'indigo-200',
      300: 'indigo-300',
      400: 'indigo-400',
      500: 'indigo-500',
      600: 'indigo-600',
      700: 'indigo-700',
      800: 'indigo-800',
      900: 'indigo-900',
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
      secondary: 'from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 shadow-md hover:shadow-lg',
      outline: 'border border-gray-300 hover:border-purple-500 bg-white/50 backdrop-blur-sm text-gray-700 hover:text-purple-600 hover:shadow-md',
      cta: 'from-green-600 via-green-500 to-indigo-600',
    },
    card: {
      primary: 'from-green-50 to-white',
      feature: 'from-green-50 to-white',
      testimonial: 'bg-green-50',
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
