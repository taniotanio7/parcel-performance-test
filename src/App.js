import React, { useMemo, useState, useEffect } from "react";
import { Router } from "@reach/router";
import { css } from "@emotion/core";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core";
import HomePage from "./pages/homepage";
import LoginPage from "./pages/login";

export const AppContext = React.createContext({
  theme: "light",
  setContext: () => {}
});

function App() {
  const [context, setContext] = useState({
    theme: "light",
  });

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setContext({theme: 'dark'})
    }
  }, []);

  const theme = useMemo(() => {
    return createMuiTheme({
      palette: {
        type: context.theme
      }
    });
  }, [context.theme]);

  return (
    <AppContext.Provider value={{...context, setContext}}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router
          css={css`
            height: 100vh;
          `}
        >
          <HomePage path="/" />
          <LoginPage path="/login" />
        </Router>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
