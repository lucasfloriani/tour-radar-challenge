import { generateMedia } from "styled-media-query";
import { ThemeValues } from "./type";

const defaultTheme: ThemeValues = {
  palette: {
    "primary.100": "#0a7bbd",
    "primary.200": "#409cd1",
    "primary.300": "#30759d",
    "primary.400": "#0969a1",
    "primary.500": "#085786",
    "secondary.100": "#41c4ab",
    "secondary.200": "#409cd1",
    "grayscale.100": "#000000",
    "grayscale.200": "#2c3e50",
    "grayscale.300": "#415466",
    "grayscale.400": "#c7d0d9",
    "grayscale.500": "#fff",
    "grayscale.600": "transparent",
  },
  fonts: {
    primary: "Helvetica, Arial, FreeSans, sans-serif",
  },
  sizes: {
    huge: "2em",
    extraLarge: "1.6em",
    large: "1.4em",
    medium: "1.2em",
    normal: "1em",
    small: "0.8em",
    extraSmall: ".6em",
  },
  shadows: {
    none: "none",
    extraSmall: "0 0 12px rgb(0 0 0 / 15%)",
    small: "none",
    medium: "none",
    large: "none",
    extraLarge: "none",
  },
  cubicBezier: {
    accelerate: "cubic-bezier(0.4, 0.0, 1, 1)",
    decelerate: "cubic-bezier(0.0, 0.0, 0.2, 1)",
    standard: "cubic-bezier(0.4, 0.0, 0.2, 1)",
  },
  mediaValues: {
    huge: "1440px",
    large: "1200px",
    medium: "992px",
    small: "768px",
    extraSmall: "576px",
  },
  medias: generateMedia({
    huge: "1440px",
    large: "1200px",
    medium: "992px",
    small: "768px",
    extraSmall: "576px",
  }),
};

export default defaultTheme;
