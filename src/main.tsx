import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyle } from "./styles/global.ts";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "@/store.ts";
import { theme } from "@/styles/variables.ts";
import { Theme as RadixTheme } from "@radix-ui/themes";
import { MantineProvider } from "@mantine/core";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <Provider store={store}>
        <MantineProvider>
          <RadixTheme>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <App />
            </ThemeProvider>
          </RadixTheme>
        </MantineProvider>
      </Provider>
    </React.StrictMode>
  );
});
