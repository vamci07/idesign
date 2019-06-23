import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider } from "@material-ui/styles";
import GlobalStyles from "shared/styles/globalStyles";
import myTheme from "shared/styles/myTheme";
import "circular-std";

import Landing from "views/Landing";

function App() {
  console.log(myTheme);
  return (
    <ThemeProvider theme={myTheme}>
      <StyledThemeProvider theme={myTheme}>
        <>
          <GlobalStyles />
          <Landing />
        </>
      </StyledThemeProvider>
    </ThemeProvider>
  );
}

export default App;
