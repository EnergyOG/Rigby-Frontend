import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./contexts/AuthProvider.jsx";

import App from "./App.jsx";
import "./index.css";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
            <App />
        </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
