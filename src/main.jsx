import { createRoot } from "react-dom/client";
import Provider from "./context/Provider.jsx";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./app/App.jsx";
import "./index.css";

const client = new QueryClient();

createRoot(document.getElementById("root")).render(
  <Provider>
    <NextUIProvider>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </NextUIProvider>
  </Provider>
);
