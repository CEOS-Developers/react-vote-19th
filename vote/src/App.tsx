import { Suspense } from "react";
import { Router } from "router";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@styles/globalStyle";
import theme from "@styles/theme";

function App() {
  return (
    <Suspense fallback="..loading">
      <ThemeProvider theme={theme}>
        <RouterProvider router={Router} />
        <GlobalStyle />
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
