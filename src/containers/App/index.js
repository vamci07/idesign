import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider } from "@material-ui/styles";
import GlobalStyles from "shared/styles/globalStyles";
import { lightTheme, darkTheme } from "shared/styles/myTheme";
import "circular-std";

import Landing from "views/Landing";

function App() {
  console.log(darkTheme);
  return (
    <ThemeProvider theme={darkTheme} type="dark">
      <StyledThemeProvider theme={darkTheme}>
        <>
          <GlobalStyles />
          <Landing />
        </>
      </StyledThemeProvider>
    </ThemeProvider>
  );
}

export default App;
