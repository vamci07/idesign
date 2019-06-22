import React from "react";
import styled, {
  ThemeProvider as StyledThemeProvider
} from "styled-components";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import GlobalStyles from "shared/styles/globalStyles";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const customTheme = createMuiTheme({
  typography: {
    fontFamily: [
      "Product Sans Regular",
      "Lato",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  },
  overrides: {}
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <StyledThemeProvider theme={customTheme}>
        <>
          <GlobalStyles />
          <AppContainer>Hello</AppContainer>
        </>
      </StyledThemeProvider>
    </ThemeProvider>
  );
}

export default App;
