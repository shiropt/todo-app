import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { Provider } from "react-redux";
import { store } from "@/store.ts";
import { MantineProvider } from "@mantine/core";
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "@/error.tsx";

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
          <ErrorBoundary FallbackComponent={Fallback}>
            <App />
          </ErrorBoundary>
        </MantineProvider>
      </Provider>
    </React.StrictMode>
  );
});
