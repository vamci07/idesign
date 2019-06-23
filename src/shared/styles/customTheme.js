import { createMuiTheme } from "@material-ui/core/styles";

export const customTheme = theme =>
  createMuiTheme({
    ...theme,
    overrides: {
      MuiTabs: {
        indicator: {
          height: "4px",
          backgroundColor: theme.palette.primary,
          borderRadius: "8px 8px 0 0"
        }
      },
      MuiTab: {
        root: {
          fontFamily: "Bungee",
          [theme.breakpoints.down("lg")]: {
            width: "104px",
            minWidth: "96px"
          }
        }
      },
      MuiTypography: {
        h3: {
          fontFamily: "Bungee Inline",
          color: theme.palette.text.primary
        },
        subtitle1: {
          fontFamily: "Bungee",
          color: theme.palette.text.secondary
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
