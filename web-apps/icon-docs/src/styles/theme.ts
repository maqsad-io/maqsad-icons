"use client";

import { createTheme, rem } from "@mantine/core";
import { Inter } from "next/font/google";

export const font = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const theme = createTheme({
  fontFamily: font.style.fontFamily,
  primaryColor: "blue",
  primaryShade: 6,
  autoContrast: true,
  defaultRadius: "md",
  cursorType: "pointer",

  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em",
  },

  white: "#FFFFFF",
  black: "#1a1a1a",

  colors: {
    blue: [
      "#e7f5ff",
      "#d0ebff",
      "#a5d8ff",
      "#74c0fc",
      "#4dabf7",
      "#339af0",
      "#228be6",
      "#1c7ed6",
      "#1971c2",
      "#1864ab",
    ],
    gray: [
      "#f8f9fa",
      "#f1f3f5",
      "#e9ecef",
      "#dee2e6",
      "#ced4da",
      "#adb5bd",
      "#868e96",
      "#495057",
      "#343a40",
      "#212529",
    ],
  },

  headings: {
    fontFamily: font.style.fontFamily,
    fontWeight: "600",
    sizes: {
      h1: { fontSize: rem(36), lineHeight: "1.2" },
      h2: { fontSize: rem(28), lineHeight: "1.3" },
      h3: { fontSize: rem(22), lineHeight: "1.4" },
      h4: { fontSize: rem(18), lineHeight: "1.4" },
    },
  },
});
