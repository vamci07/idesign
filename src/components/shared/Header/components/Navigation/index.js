import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { HeaderNav } from "./style";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import myTheme from "shared/styles/myTheme";

export const headerTheme = theme =>
  createMuiTheme({
    ...myTheme,
    typography: {
      useNextVariants: true,
      fontFamily: [
        "Bungee Inline",
        "CircularStd",
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

function Navigation() {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <HeaderNav>
      <ThemeProvider theme={headerTheme}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </ThemeProvider>
    </HeaderNav>
  );
}

export default Navigation;
