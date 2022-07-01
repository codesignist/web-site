import Head from "next/head";
import GlobalStyle from "/components/GlobalStyle";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Yunus Eş</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
