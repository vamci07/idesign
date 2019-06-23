import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "components/shared/Header";
import { ThemeProvider } from "@material-ui/styles";
import { customTheme } from "shared/styles/customTheme";

export default function Landing(props) {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={customTheme(props.theme)}>
        <Container
          maxWidth="xl"
          style={{ height: "100vh", width: "100vw", padding: 0, margin: 0 }}
        >
          <Header
            handleThemeChange={props.handleThemeChange}
            trueLight={props.trueLight}
          />
        </Container>
      </ThemeProvider>
    </>
  );
}
