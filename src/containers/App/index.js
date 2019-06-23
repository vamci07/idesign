import React, { useState, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider } from "@material-ui/styles";
import GlobalStyles from "shared/styles/globalStyles";
import { lightTheme, darkTheme } from "shared/styles/myTheme";
import "circular-std";

import Landing from "views/Landing";

function App() {
  const [trueLight, setTrueLight] = useState(true);
  const [appTheme, setAppTheme] = useState(lightTheme);

  function handleThemeChange() {
    setTrueLight(!trueLight);
  }

  useEffect(() => {
    if (trueLight) {
      setAppTheme(lightTheme);
    } else {
      setAppTheme(darkTheme);
    }
  }, [trueLight]);

  return (
    <ThemeProvider theme={appTheme}>
      <StyledThemeProvider theme={appTheme}>
        <>
          <GlobalStyles />
          <Landing
            handleThemeChange={handleThemeChange}
            trueLight={trueLight}
            theme={appTheme}
          />
        </>
      </StyledThemeProvider>
    </ThemeProvider>
  );
}

export default App;
