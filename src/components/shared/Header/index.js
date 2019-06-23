import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Navigation from "./components/Navigation";
import { IconButton } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { yellow, common } from "@material-ui/core/colors";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}));

export default function Header(props) {
  const classes = useStyles();

  function handleChange() {
    props.handleThemeChange();
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" style={{ fontFamily: "Montez" }}>
            R . designs
          </Typography>
          <div style={{ width: "fit-content", display: "flex" }}>
            <Navigation
              tabIndex={props.tabIndex}
              handleTabRoutes={props.handleTabRoutes}
            />
            <IconButton
              color="primary"
              aria-label="Change theme"
              onClick={handleChange}
              style={{ marginLeft: 16, height: 48, width: 48 }}
            >
              <FontAwesomeIcon
                icon={faLightbulb}
                style={{
                  color: props.trueLight ? yellow[700] : common.white,
                  fontSize: "1.2rem"
                }}
              />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
