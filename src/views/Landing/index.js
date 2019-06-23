import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "components/shared/Header";
import { ThemeProvider } from "@material-ui/styles";
import { customTheme } from "shared/styles/customTheme";
import About from "views/About";
import Projects from "views/Projects";
import Contact from "views/Contact";

export default function Landing(props) {
  const [tabIndex, setTabIndex] = useState(0);
  function handleTabRoutes(selectedTabIndex) {
    setTabIndex(selectedTabIndex);
  }
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={customTheme(props.theme)}>
        <Container
          maxWidth="xl"
          style={{ height: "100vh", width: "100vw", padding: 0, margin: 0 }}
        >
          <div style={{ height: "96px" }}>
            <Header
              handleThemeChange={props.handleThemeChange}
              trueLight={props.trueLight}
              tabIndex={tabIndex}
              handleTabRoutes={handleTabRoutes}
            />
          </div>
          <div style={{ height: "calc(100% - 96px", padding: "16px 56px" }}>
            {tabIndex === 0 && <About />}
            {tabIndex === 1 && <Projects />}
            {tabIndex === 2 && <Contact />}
          </div>
        </Container>
      </ThemeProvider>
    </>
  );
}
