import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Footer from "./Footer";
import Header from "./header/Header";
import Navbar from "./Navbar";

function Layout() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      bgcolor="background.default"
    >
      <Header />
      <Navbar />
      <Box component="main" flexGrow={1} pt={4} px={2}>
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default Layout;
