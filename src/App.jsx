import React, { useState } from "react";
import { Box, CssBaseline, Container, createTheme } from "@mui/material";
import { Pages, ToolBarr, Drawer } from "./components/index";
import { useSelector } from "react-redux";



// Create default theme
 
function App() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

   const isAuthenticated = useSelector((state) => state.user.user) || false;
   return (
    <>
      <Box sx={{ display: "flex" }}>
        {isAuthenticated && (
          <>
            <ToolBarr open={open} toggleDrawer={toggleDrawer} />
            <Drawer open={open} toggleDrawer={toggleDrawer} />
          </>
        )}
        {/* Use DrawerComponent */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            overflow: "hidden",
            // height: "100vh",
            // overflow: "auto",
            backgroundColor: "#f6f6f6",
          }}
        >
          {/* <Toolbar /> */}
          <Container
            sx={{
              marginTop: isAuthenticated
                ? { lg: "7.5rem", md: "7rem", xs: "5.7rem" }
                : "0", // No margin if not authenticated
              marginBottom: "16px",
              minHeight: "600px",
              maxWidth: "95%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            maxWidth={false} // Disable the default maxWidth
          >
            <Pages isAuthenticated={isAuthenticated} />
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default App;
