import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { WagmiConfig, createClient } from "wagmi";
import { polygon } from "wagmi/chains";
import { ConnectKitProvider, getDefaultClient } from "connectkit";

const client = createClient(
  getDefaultClient({
    appName: "Your App Name",
    chains: [polygon],
  })
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <App />
      </ConnectKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
