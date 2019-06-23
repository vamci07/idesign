import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "components/shared/Header";
import { ThemeProvider } from "@material-ui/styles";
import { customTheme } from "shared/styles/customTheme";
import About from "views/About";
import Projects from "views/Projects";
import Contact from "views/Contact";
import Footer from "components/shared/Footer";

export default function Landing(props) {
  const [tabIndex, setTabIndex] = useState(0);
  function handleTabRoutes(selectedTabIndex) {
    setTabIndex(selectedTabIndex);
  }

  console.log(customTheme(props.theme));
  return (
    <ThemeProvider theme={customTheme(props.theme)}>
      <>
        <CssBaseline />
        <Container
          maxWidth="xl"
          style={{
            height: "100vh",
            padding: 0,
            margin: 0
          }}
        >
          <div style={{ height: "560px" }}>
            <Header
              handleThemeChange={props.handleThemeChange}
              trueLight={props.trueLight}
              tabIndex={tabIndex}
              handleTabRoutes={handleTabRoutes}
            />
          </div>
          <div style={{ padding: "16px 56px" }}>
            <About />
            <Projects />
            <Contact />
          </div>
          <Footer />
        </Container>
      </>
    </ThemeProvider>
  );
}
