import styled from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";

export const HeaderNav = styled.div`
  font-size: 1rem;
  font-family: "Bungee Inline";
  text-transform: uppercase;
  z-index: 100;
  top: 0;
  height: 48px;
`;

export const tabsTheme = theme =>
  createMuiTheme({
    typography: {
      useNextVariants: true,
      fontFamily: [
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
      MuiTabs: {
        indicator: {
          height: "4px",
          backgroundColor: theme.palette.primary.main,
          borderRadius: "8px"
        }
      },
      MuiTab: {
        root: {
          [theme.breakpoints.down("lg")]: {
            width: "120px",
            minWidth: "120px"
          }
        }
      }
    }
  });
