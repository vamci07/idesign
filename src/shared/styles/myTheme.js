import { createMuiTheme } from "@material-ui/core/styles";

const myTheme = createMuiTheme({
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
  palette: {}
});

export default myTheme;
