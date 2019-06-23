import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { HeaderNav } from "./style";

function Navigation(props) {
  function handleChange(event, newValue) {
    props.handleTabRoutes(newValue);
  }

  return (
    <HeaderNav>
      <Tabs value={props.tabIndex} onChange={handleChange}>
        <Tab label="About" />
        <Tab label="Projects" />
        <Tab label="Contact" />
      </Tabs>
    </HeaderNav>
  );
}

export default Navigation;
