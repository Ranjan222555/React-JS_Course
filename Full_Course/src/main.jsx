import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Globalstate from "./context/index.jsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClint = new QueryClient();

createRoot(document.getElementById("root")).render(
  // <App />
  // <Globalstate>
  //     <App/>
  // </Globalstate>
  // <React.StrictMode>
  //     <App/>
  // </React.StrictMode>

  <BrowserRouter>
    <QueryClientProvider client={queryClint}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
);
