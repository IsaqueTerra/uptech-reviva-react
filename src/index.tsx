import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import AppRouter from "route";
import { GlobalStyle } from "./styles/global";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RecoilRoot>
      <AppRouter />
    </RecoilRoot>
  </React.StrictMode>
);
