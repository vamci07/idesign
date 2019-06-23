import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "components/shared/Header";

export default function Landing() {
  return (
    <>
      <CssBaseline />
      <Container
      maxWidth="xl"
        style={{ height: "100vh", width: "100vw", padding: 0, margin: 0 }}
      >
        <Header />
      </Container>
    </>
  );
}
