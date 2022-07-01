import CartProvider from "contexts/cart.context";
import ProductProvider from "contexts/product.context";
import type { AppProps } from "next/app";
import { GlobalStyle } from "styles/global";
import PageTemplate from "./templates";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CartProvider>
        <ProductProvider>
          <PageTemplate>
            <Component {...pageProps} />
          </PageTemplate>
        </ProductProvider>
      </CartProvider>
      <GlobalStyle />
    </>
  );
}

export default MyApp;
