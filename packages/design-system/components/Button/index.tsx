import styled from "styled-components";
import { ThemeValues } from "../Theme/themes/type";

type ButtonProps = {
  bgColor?: keyof ThemeValues["palette"];
  children: React.ReactNode;
  fontSize?: keyof ThemeValues["sizes"];
  hoverBgColor?: keyof ThemeValues["palette"];
  txtColor?: keyof ThemeValues["palette"];
  weight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "light" | "normal" | "bold";
};

// TODO: Check if passing other props like onClick will result in a type problem
const Button = styled.button.attrs((props: ButtonProps) => ({
  bgColor: props?.bgColor ?? "primary.400",
  fontSize: props?.fontSize ?? "small",
  hoverBgColor: props?.hoverBgColor ?? "primary.500",
  txtColor: props?.txtColor ?? "grayscale.500",
  weight: props?.weight ?? "normal",
}))`
  background-color: ${({ theme, bgColor }) => theme.palette[bgColor]};
  border-radius: 3px;
  border: none;
  color: ${({ theme, txtColor }) => theme.palette[txtColor]};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme, fontSize }) => theme.sizes[fontSize]};
  font-weight: ${({ weight }) => weight};
  padding: ${({ theme }) => `${theme.sizes.extraSmall} ${theme.sizes.medium}`};

  :hover {
    background-color: ${({ theme, hoverBgColor }) => theme.palette[hoverBgColor]};
  }
`;

export default Button;
