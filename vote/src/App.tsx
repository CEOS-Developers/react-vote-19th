import { Router } from "router";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@styles/globalStyle";
import theme from "@styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={Router} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
