import styled, { keyframes } from "styled-components";
import { ThemeValues } from "../Theme/themes/type";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const widthAndHeightSizes = {
  extraSmall: "1em",
  small: "2em",
  medium: "3em",
  normal: "4em",
  large: "5em",
  extraLarge: "6em",
};

const borderSizes = {
  extraSmall: "6px",
  small: "10px",
  medium: "12px",
  normal: "12px",
  large: "14px",
  extraLarge: "16px",
};

type LoaderProps = {
  animationTime?: string;
  bgColor?: keyof ThemeValues["palette"];
  color?: keyof ThemeValues["palette"];
  size?: keyof ThemeValues["sizes"];
};

// TODO: Add information about why the loader was created like that (Bundle size and project simplicity)
const Loader = styled.div.attrs((props: LoaderProps) => ({
  animationTime: props?.animationTime ?? "1.5s",
  color: props?.color ?? "primary.200",
  bgColor: props?.bgColor ?? "grayscale.300",
  size: props?.size ?? "medium",
}))`
  border: ${({ size }) => borderSizes[size]} solid ${({ theme, bgColor }) => theme.palette[bgColor]};
  border-top: ${({ size }) => borderSizes[size]} solid ${({ theme, color }) => theme.palette[color]};
  border-radius: 50%;
  display: inline-flex;
  width: ${({ size }) => widthAndHeightSizes[size]};
  height: ${({ size }) => widthAndHeightSizes[size]};
  animation: ${spin} ${({ animationTime }) => animationTime} linear infinite;
`;

export default Loader;
