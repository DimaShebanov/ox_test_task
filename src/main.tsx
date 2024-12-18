import "./main.css";
import "@mantine/core/styles.css";

import { createTheme, MantineProvider } from "@mantine/core";
import { QueryClientProvider } from "@tanstack/react-query";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import queryClient from "./store/queryClient";

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);
const theme = createTheme({});

root.render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </MantineProvider>
  </StrictMode>
);
