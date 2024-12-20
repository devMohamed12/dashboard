import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/store.js";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Button, CssBaseline, Typography } from "@mui/material";
import { theme } from "./Theme.js";
import { PersistGate } from "redux-persist/integration/react";
import Pages from "./components/app/Pages.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <CssBaseline />

          <App />
          {/* <Box sx={{ p: 4 , bgcolor: "white" , borderRadius: 2}}>
            <Typography variant="customTitle">Hello World</Typography>
            <Button variant="contained" color="primary">Click me</Button>
          </Box> */}
          {/* <Pages /> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </ThemeProvider>
);
