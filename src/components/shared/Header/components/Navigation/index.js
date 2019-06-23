import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { HeaderNav } from "./style";

function Navigation() {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <HeaderNav>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="About" />
        <Tab label="Projects" />
        <Tab label="Contact" />
      </Tabs>
    </HeaderNav>
  );
}

export default Navigation;
