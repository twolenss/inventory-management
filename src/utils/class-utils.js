import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes with clsx
 * @param {...string} inputs - Class names to merge
 * @returns {string} Merged class string
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Common button variants for consistent styling
 */
export const buttonVariants = {
  primary: "bg-gradient-to-r from-accent to-[#e4b521] text-primary-text hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200",
  secondary: "bg-surface border border-border text-primary-text hover:bg-border transition-colors duration-200",
  destructive: "bg-red-50 border border-red-500/30 text-red-600 hover:bg-red-100 transition-colors duration-200",
  ghost: "text-secondary-text hover:text-primary-text hover:bg-border/50 transition-colors duration-200",
  outline: "border border-accent/30 text-primary-text hover:bg-accent/10 transition-colors duration-200",
  link: "text-accent hover:text-[#e4b521] hover:underline transition-colors duration-200",
};

/**
 * Common card variants
 */
export const cardVariants = {
  default: "bg-surface rounded-2xl shadow-sm ring-1 ring-border/50",
  elevated: "bg-surface rounded-2xl shadow-lg ring-1 ring-border/30 hover:shadow-xl transition-shadow duration-300",
  interactive: "bg-surface rounded-2xl shadow-sm ring-1 ring-border/50 hover:shadow-md hover:ring-accent/30 hover:-translate-y-0.5 transition-all duration-300",
  subtle: "bg-surface/50 rounded-2xl ring-1 ring-border/30",
  gradient: "bg-gradient-to-br from-surface to-background rounded-2xl shadow-sm ring-1 ring-border/50",
};

/**
 * Common badge variants
 */
export const badgeVariants = {
  default: "bg-border/50 text-secondary-text",
  accent: "bg-accent/10 text-accent",
  success: "bg-green-100 text-green-700",
  warning: "bg-amber-100 text-amber-700",
  error: "bg-red-100 text-red-700",
  info: "bg-blue-100 text-blue-700",
};

/**
 * Common input variants
 */
export const inputVariants = {
  default: "border border-border bg-background focus:border-accent focus:ring-2 focus:ring-accent/20",
  error: "border border-red-300 bg-background focus:border-red-500 focus:ring-2 focus:ring-red-500/20",
  success: "border border-green-300 bg-background focus:border-green-500 focus:ring-2 focus:ring-green-500/20",
  disabled: "border border-border/50 bg-background/50 text-secondary-text cursor-not-allowed",
};

/**
 * Animation utilities
 */
export const animations = {
  fadeIn: "animate-in fade-in duration-300",
  slideInFromTop: "animate-in slide-in-from-top duration-300",
  scaleIn: "animate-in duration-300",
  spin: "animate-spin",
  pulse: "animate-pulse",
};

/**
 * Responsive utilities
 */
export const responsive = {
  container: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10",
  grid: {
    "1": "grid grid-cols-1",
    "2": "grid grid-cols-1 sm:grid-cols-2",
    "3": "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    "4": "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    "auto": "grid grid-cols-1 sm:grid-cols-auto-fit",
  },
  flex: {
    row: "flex flex-col sm:flex-row",
    col: "flex flex-col",
    center: "flex items-center justify-center",
    between: "flex items-center justify-between",
    start: "flex items-center justify-start",
  },
};

/**
 * Glass morphism utilities
 */
export const glass = {
  light: "bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60",
  medium: "bg-background/90 backdrop-blur-lg supports-[backdrop-filter]:bg-background/80",
  heavy: "bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/90",
  border: "border border-border/50",
};

/**
 * Helper to generate stock status badge classes
 */
export function getStockStatusClasses(stock) {
  if (stock === 0) {
    return {
      container: "bg-red-50 border border-red-500/30",
      text: "text-red-600",
      icon: "text-red-500",
    };
  }
  if (stock <= 5) {
    return {
      container: "bg-amber-50 border border-amber-500/30",
      text: "text-amber-600",
      icon: "text-amber-500",
    };
  }
  return {
    container: "bg-green-50 border border-green-500/30",
    text: "text-green-600",
    icon: "text-green-500",
  };
}

/**
 * Helper to generate category badge classes
 */
export function getCategoryClasses(category) {
  const colorMap = {
    electronics: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-500/30" },
    furniture: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-500/30" },
    clothing: { bg: "bg-pink-50", text: "text-pink-600", border: "border-pink-500/30" },
    books: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-500/30" },
    food: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-500/30" },
    default: { bg: "bg-border/50", text: "text-secondary-text", border: "border-border" },
  };
  
  const key = category?.toLowerCase() || "default";
  return colorMap[key] || colorMap.default;
}

/**
 * Helper to generate price display classes based on value
 */
export function getPriceClasses(price) {
  if (price >= 1000) {
    return "text-2xl font-bold text-primary-text";
  } else if (price >= 100) {
    return "text-xl font-semibold text-primary-text";
  } else {
    return "text-lg font-medium text-primary-text";
  }
}

export default {
  cn,
  buttonVariants,
  cardVariants,
  badgeVariants,
  inputVariants,
  animations,
  responsive,
  glass,
  getStockStatusClasses,
  getCategoryClasses,
  getPriceClasses,
};