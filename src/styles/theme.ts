export const colors = {
  primary50: "#EEF2FF",
  primary100: "#E0E7FF",
  primary200: "#C7D2FE",
  primary300: "#A5B4FC",
  primary400: "#818CF8",
  primary500: "#6366F1",
  primary600: "#4F46E5",
  primary700: "#4338CA",
  primary800: "#3730A3",
  primary900: "#312E81",

  gray50: "#F9FAFB",
  gray100: "#F3F4F6",
  gray200: "#E5E7EB",
  gray300: "#D1D5DB",
  gray400: "#9CA3AF",
  gray500: "#6B7280",
  gray600: "#4B5563",
  gray700: "#374151",
  gray800: "#1F2937",
  gray900: "#111827",

  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#3B82F6",
} as const;

export const fontWeight = {
  normal: 400,
  medium: 500,
  "semi-bold": 600,
  bold: 700,
} as const;

export const fontSize = [12, 14, 16, 18, 20, 24, 30, 36] as const;

export const lineHeight = [1.25, 1.5, 1.75] as const;
