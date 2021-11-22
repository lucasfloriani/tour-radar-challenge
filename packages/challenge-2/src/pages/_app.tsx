import type { AppProps } from "next/app";
import Theme from "@tour-radar/design-system/components/Theme";
import GlobalStyles from "styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <GlobalStyles />
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
