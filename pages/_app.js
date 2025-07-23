import Head from "next/head";
import GlobalStyle from "/components/atoms/GlobalStyle";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <title>Yunus Eş</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="fediverse:creator"
          content="@codesignist@sosyal.teknofest.app"
        />
        <meta property="og:site_name" content="Yunus Eş" key="site_name" />
        <meta property="og:title" content="Yunus Eş" />
        <meta property="og:description" content="Kişisel websitesi" />
        <meta name="twitter:site" content="@codesignist" />
        <meta name="twitter:title" content="Yunus Eş" />
        <meta name="twitter:description" content="Kişisel websitesi" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
