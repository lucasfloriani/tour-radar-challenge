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
  huge: "7em",
};

const borderSizes = {
  extraSmall: "6px",
  small: "10px",
  medium: "12px",
  normal: "12px",
  large: "14px",
  extraLarge: "16px",
  huge: "18px",
};

type LoaderProps = {
  animationTime?: string;
  bgColor?: keyof ThemeValues["palette"];
  color?: keyof ThemeValues["palette"];
  size?: keyof ThemeValues["sizes"];
};

// * The Loader was created with styled components so we don't need a extra library for that.
// * If the project is big, we can use a library for this.
const Loader = styled.div.attrs((props: LoaderProps) => ({
  animationTime: props?.animationTime ?? "1.5s",
  bgColor: props?.bgColor ?? "grayscale.300",
  color: props?.color ?? "primary.200",
  size: props?.size ?? "medium",
}))`
  animation: ${spin} ${({ animationTime }) => animationTime} linear infinite;
  border-radius: 50%;
  border: ${({ size }) => borderSizes[size]} solid ${({ theme, bgColor }) => theme.palette[bgColor]};
  border-top: ${({ size }) => borderSizes[size]} solid ${({ theme, color }) => theme.palette[color]};
  display: inline-flex;
  height: ${({ size }) => widthAndHeightSizes[size]};
  width: ${({ size }) => widthAndHeightSizes[size]};
`;

export default Loader;
