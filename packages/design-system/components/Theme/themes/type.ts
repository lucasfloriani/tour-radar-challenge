import { MediaGenerator } from "styled-media-query";

export type ThemeValues = {
  palette: {
    "primary.100": string;
    "primary.200": string;
    "primary.300": string;
    "primary.400": string;
    "primary.500": string;
    "secondary.100": string;
    "secondary.200": string;
    "grayscale.100": string;
    "grayscale.200": string;
    "grayscale.300": string;
    "grayscale.400": string;
    "grayscale.500": string;
    "grayscale.600": string;
  };
  fonts: {
    primary: string;
  };
  sizes: {
    huge: string;
    extraLarge: string;
    large: string;
    medium: string;
    normal: string;
    small: string;
    extraSmall: string;
  };
  shadows: {
    none: string;
    extraSmall: string;
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
  };
  cubicBezier: {
    accelerate: string;
    decelerate: string;
    standard: string;
  };
  mediaValues: {
    huge: string;
    large: string;
    medium: string;
    small: string;
    extraSmall: string;
  };
  medias: MediaGenerator<
    {
      huge: string;
      large: string;
      medium: string;
      small: string;
      extraSmall: string;
    },
    any
  >;
};
