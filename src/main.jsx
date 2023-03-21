import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
      {/* <Profile /> */}
      <Home />
    </ThemeProvider>
  </>
);
