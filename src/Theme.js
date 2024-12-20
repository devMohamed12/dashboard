import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    customTitle: {
      ...createTheme().typography.h4,
      fontSize: "1.8rem",
      fontWeight: 700,
      display: "block",

      color: "rgb(19, 122, 99)",
      

    },
  },
  

  palette: {
    secondary: {
      main: "rgb(137, 92, 48)",
    },
    primary: {
      main: "rgb(19, 122, 99)",
    },
  },
});
