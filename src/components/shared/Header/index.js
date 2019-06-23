import React from "react";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import myTheme from "shared/styles/myTheme";
import Navigation from "./components/Navigation";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}));

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
    overrides: {
      MuiTypography: {
        h3: {
          color: theme.palette.text.primary
        }
      },
      MuiPaper: {
        elevation4: {
          boxShadow: "unset"
        }
      },
      MuiAppBar: {
        root: {
          padding: "16px 32px"
        },
        colorPrimary: {
          backgroundColor: "transparent",
          color: theme.palette.text.primary
        }
      },
      MuiToolbar: {
        root: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }
      }
    }
  });

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={headerTheme}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h3">VM.</Typography>
            <Navigation />
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}
