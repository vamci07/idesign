import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { ThemeProvider } from "@material-ui/styles";
import { HeaderNav, tabsTheme } from "./style";

function Navigation() {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <HeaderNav>
      <ThemeProvider theme={tabsTheme}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="About" />
          <Tab label="Projects" />
          <Tab label="Contact" />
        </Tabs>
      </ThemeProvider>
    </HeaderNav>
  );
}

export default Navigation;
