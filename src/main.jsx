import React from "react";
import ReactDOM from "react-dom/client";
import {  HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/store.js";
import { ThemeProvider } from "@mui/material/styles";
import {   CssBaseline } from "@mui/material";
import { theme } from "./Theme.js";
import { PersistGate } from "redux-persist/integration/react";
import Pages from "./components/app/Pages.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter   >
          <CssBaseline />

          <App />
     
        </HashRouter>
      </PersistGate>
    </Provider>
  </ThemeProvider>
);
