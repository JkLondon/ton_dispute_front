import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
// this manifest is used temporarily for development purposes
const manifestUrl =
  "https://jklondon.github.io/ton_dispute_front/tonconnect-manifest.json";
import { AppRoot } from '@xelene/tgui';

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <TonConnectUIProvider manifestUrl={manifestUrl}>
    <QueryClientProvider client={queryClient}>
      <AppRoot
        style={{
          background: 'var(--tgui--secondary_bg_color)',
          padding: "20px",
        }}>
        <App />
      </AppRoot>
      </QueryClientProvider>
  </TonConnectUIProvider>
);
