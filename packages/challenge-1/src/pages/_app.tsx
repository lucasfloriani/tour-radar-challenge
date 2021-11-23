import type { AppProps } from "next/app";
import Head from "next/head";
import Theme from "@tour-radar/design-system/components/Theme";
import GlobalStyles from "styles/global";
import "../translations";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=5" />
        <meta name="description" content="Challenge 1 of TourRadar" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#409cd1" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="//cdn.tourradar.com/images/v1637676578/fav/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="//cdn.tourradar.com/images/v1637676578/fav/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="//cdn.tourradar.com/images/v1637676578/fav/apple-touch-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="//cdn.tourradar.com/images/v1637676578/fav/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="//cdn.tourradar.com/images/v1637676578/fav/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="//cdn.tourradar.com/images/v1637676578/fav/favicon-16x16.png"
        />
        <link rel="mask-icon" href="//cdn.tourradar.com/images/v1637676578/fav/safari-pinned-tab.svg" color="#409cd1" />
        <link rel="shortcut icon" href="//cdn.tourradar.com/images/v1637676578/fav/favicon.ico" />
        <meta name="msapplication-TileColor" content="#409cd1" />
        <meta name="apple-mobile-web-app-title" content="TourRadar" />
        <meta name="application-name" content="TourRadar" />
      </Head>
      <Theme>
        <GlobalStyles />
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

export default MyApp;
