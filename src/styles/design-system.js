/**
 * Design System for Inventory Management System
 * Centralized design tokens and utility functions
 */

export const colors = {
  // Primary Colors
  background: "#F5F3EE",
  surface: "#FFFFFF",
  accent: {
    DEFAULT: "#F4C430",
    hover: "#E4B521",
    light: "#FFF8E1",
    dark: "#D4A420",
  },
  accentWarm: "#ED6363",
  
  // Text Colors
  text: {
    primary: "#252525",
    secondary: "#6B6B6B",
    tertiary: "#A0A0A0",
    disabled: "#C7C7C7",
  },
  
  // Status Colors
  status: {
    success: {
      light: "#F0FDF4",
      DEFAULT: "#22C55E",
      dark: "#16A34A",
    },
    warning: {
      light: "#FEFCE8",
      DEFAULT: "#EAB308",
      dark: "#CA8A04",
    },
    error: {
      light: "#FEF2F2",
      DEFAULT: "#EF4444",
      dark: "#DC2626",
    },
    info: {
      light: "#EFF6FF",
      DEFAULT: "#3B82F6",
      dark: "#2563EB",
    },
  },
  
  // Border Colors
  border: {
    light: "#E5E3DE",
    DEFAULT: "#D4D2CD",
    dark: "#C4C2BD",
  },
  
  // Functional Colors
  functional: {
    overlay: "rgba(0, 0, 0, 0.4)",
    backdrop: "rgba(245, 243, 238, 0.8)",
    focusRing: "rgba(244, 196, 48, 0.2)",
  },
};

export const typography = {
  fontFamily: {
    sans: '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
    mono: '"JetBrains Mono", "Fira Code", "Cascadia Code", "Source Code Pro", Menlo, Monaco, Consolas, monospace',
  },
  fontSize: {
    xs: "0.75rem",      // 12px
    sm: "0.875rem",     // 14px
    base: "1rem",       // 16px
    lg: "1.125rem",     // 18px
    xl: "1.25rem",      // 20px
    "2xl": "1.5rem",    // 24px
    "3xl": "1.875rem",  // 30px
    "4xl": "2.25rem",   // 36px
    "5xl": "3rem",      // 48px
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  lineHeight: {
    tight: 1.2,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
};

export const spacing = {
  0: "0px",
  0.5: "0.125rem",    // 2px
  1: "0.25rem",       // 4px
  1.5: "0.375rem",    // 6px
  2: "0.5rem",        // 8px
  2.5: "0.625rem",    // 10px
  3: "0.75rem",       // 12px
  3.5: "0.875rem",    // 14px
  4: "1rem",          // 16px
  5: "1.25rem",       // 20px
  6: "1.5rem",        // 24px
  7: "1.75rem",       // 28px
  8: "2rem",          // 32px
  9: "2.25rem",       // 36px
  10: "2.5rem",       // 40px
  12: "3rem",         // 48px
  14: "3.5rem",       // 56px
  16: "4rem",         // 64px
  20: "5rem",         // 80px
  24: "6rem",         // 96px
};

export const borderRadius = {
  none: "0px",
  sm: "0.125rem",     // 2px
  DEFAULT: "0.375rem", // 6px
  md: "0.5rem",       // 8px
  lg: "0.75rem",      // 12px
  xl: "1rem",         // 16px
  "2xl": "1.5rem",    // 24px
  "3xl": "2rem",      // 32px
  full: "9999px",
};

export const shadows = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  DEFAULT: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  md: "0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
  none: "none",
};

export const animations = {
  durations: {
    fastest: "75ms",
    faster: "100ms",
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
    slower: "500ms",
    slowest: "700ms",
  },
  timingFunctions: {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    spring: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  },
  transitions: {
    default: "all 200ms ease",
    colors: "color 150ms ease, background-color 150ms ease, border-color 150ms ease",
    transform: "transform 200ms ease",
    opacity: "opacity 150ms ease",
  },
};

export const zIndex = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
};

/**
 * Utility functions for common design operations
 */
export const designUtils = {
  // Get stock status color based on quantity
  getStockStatus: (stock) => {
    if (stock === 0) {
      return {
        label: "Out of Stock",
        color: colors.status.error.DEFAULT,
        bg: colors.status.error.light,
        textColor: colors.status.error.dark,
      };
    }
    if (stock <= 5) {
      return {
        label: "Low Stock",
        color: colors.status.warning.DEFAULT,
        bg: colors.status.warning.light,
        textColor: colors.status.warning.dark,
      };
    }
    return {
      label: "In Stock",
      color: colors.status.success.DEFAULT,
      bg: colors.status.success.light,
      textColor: colors.status.success.dark,
    };
  },

  // Format currency
  formatCurrency: (amount, currency = "PHP") => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
    }).format(amount);
  },

  // Format date
  formatDate: (dateString, format = "medium") => {
    const date = new Date(dateString);
    const options = {
      short: { month: "short", day: "numeric", year: "numeric" },
      medium: { month: "long", day: "numeric", year: "numeric" },
      long: { weekday: "long", month: "long", day: "numeric", year: "numeric" },
    }[format] || options.medium;

    return date.toLocaleDateString("en-US", options);
  },

  // Generate gradient
  getGradient: (type = "accent") => {
    const gradients = {
      accent: "linear-gradient(135deg, #F4C430 0%, #E4B521 100%)",
      success: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
      warning: "linear-gradient(135deg, #EAB308 0%, #CA8A04 100%)",
      error: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
      surface: "linear-gradient(135deg, #FFFFFF 0%, #F5F3EE 100%)",
    };
    return gradients[type] || gradients.accent;
  },

  // Generate box shadow with color
  getShadow: (size = "DEFAULT", color = "rgba(0, 0, 0, 0.1)") => {
    const shadowsMap = {
      sm: `0 1px 2px 0 ${color}`,
      DEFAULT: `0 4px 6px -1px ${color}, 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
      md: `0 6px 12px -3px ${color}, 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
      lg: `0 10px 15px -3px ${color}, 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
      xl: `0 20px 25px -5px ${color}, 0 10px 10px -5px rgba(0, 0, 0, 0.04)`,
    };
    return shadowsMap[size] || shadowsMap.DEFAULT;
  },
};

/**
 * Component-specific design tokens
 */
export const components = {
  card: {
    padding: spacing[6],
    borderRadius: borderRadius.xl,
    backgroundColor: colors.surface,
    border: `1px solid ${colors.border.light}`,
    shadow: shadows.DEFAULT,
  },
  button: {
    primary: {
      background: colors.accent.DEFAULT,
      hover: colors.accent.hover,
      text: colors.text.primary,
      padding: `${spacing[2]} ${spacing[4]}`,
      borderRadius: borderRadius.lg,
    },
    secondary: {
      background: colors.surface,
      hover: colors.background,
      text: colors.text.primary,
      border: `1px solid ${colors.border.DEFAULT}`,
      padding: `${spacing[2]} ${spacing[4]}`,
      borderRadius: borderRadius.lg,
    },
  },
  input: {
    padding: `${spacing[2.5]} ${spacing[4]}`,
    borderRadius: borderRadius.lg,
    border: `1px solid ${colors.border.DEFAULT}`,
    focusBorder: colors.accent.DEFAULT,
    focusRing: `0 0 0 3px ${colors.functional.focusRing}`,
  },
};

export default {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  animations,
  zIndex,
  designUtils,
  components,
};