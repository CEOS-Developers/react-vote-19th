import { Suspense } from "react";
import { Router } from "router";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@styles/globalStyle";
import theme from "@styles/theme";
import { ErrorHandler } from "@pages/ErrorHandler";

function App() {
  return (
    <Suspense fallback="..loading">
      <ErrorHandler>
        <ThemeProvider theme={theme}>
          <RouterProvider router={Router} />
          <GlobalStyle />
        </ThemeProvider>
      </ErrorHandler>
    </Suspense>
  );
}

export default App;
