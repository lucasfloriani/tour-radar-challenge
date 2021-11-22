import { useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeValues } from "./themes/type";

interface ThemeProps {
  theme?: "default"; // TODO: Add more options of themes in the future
}

const Theme: React.FC<ThemeProps> = ({ theme = "default", children }) => {
  const themeObj: ThemeValues = useMemo(() => require(`./themes/${theme}`).default, [theme]);
  return <ThemeProvider theme={themeObj}>{children}</ThemeProvider>;
};

export default Theme;
