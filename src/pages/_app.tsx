import CartProvider from "contexts/cart.context";
import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyle } from "styles/global";
import PageTemplate from "../templates/templates";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CartProvider>
        <PageTemplate>
          <Head>
            <link rel="icon" href="./icons/logo-favicon.webp" />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>Reviva Fashion</title>
          </Head>
          <Component {...pageProps} />
        </PageTemplate>
      </CartProvider>
      <GlobalStyle />
    </>
  );
}

export default MyApp;
