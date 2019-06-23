import { createMuiTheme } from "@material-ui/core/styles";

export const lightTheme = createMuiTheme({
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
  palette: {
    type: "light"
  }
});

export const darkTheme = createMuiTheme({
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
  palette: {
    type: "dark"
  }
});

export default { lightTheme, darkTheme };
