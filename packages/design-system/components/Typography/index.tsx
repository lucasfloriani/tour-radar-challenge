import { ThemeValues } from "../Theme/themes/type";
import styled from "styled-components";

export type TypographyProps = {
  align?: "left" | "center" | "right";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children: React.ReactNode;
  color?: keyof ThemeValues["palette"];
  size?: keyof ThemeValues["sizes"];
  weight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "light" | "normal" | "bold";
};

const Typography = styled.p.attrs((props: TypographyProps) => ({
  align: props?.align ?? "left",
  as: props?.as ?? "p",
  color: props?.color ?? "grayscale.100",
  size: props?.size ?? "small",
  weight: props?.weight ?? "normal",
}))`
  color: ${({ theme, color }) => theme.palette[color]};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme, size }) => theme.sizes[size]};
  font-weight: ${({ weight }) => weight};
  text-align: ${({ align }) => align};
  margin: 0;
`;

export default Typography;
