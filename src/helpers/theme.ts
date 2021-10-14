const theme = {
  breakpoints: {
    mobile: "320px",
    tablet: "768px",
    desktop: "1024px",
  },
  typography: {
    h1: {
      mobile: {
        fontSize: "32px",
        lineHeight: 1.25,
      },
      tablet: {
        fontSize: "40px",
        lineHeight: 1.125,
      },
      desktop: {
        fontSize: "48px",
        lineHeight: 1.05,
      },
    },
    h2: {
      mobile: {
        fontSize: "26px",
        lineHeight: 1.15,
      },
      tablet: {
        fontSize: "32px",
        lineHeight: 1.25,
      },
      desktop: {
        fontSize: "36px",
        lineHeight: 1.25,
      },
    },
  },
  palette: {
    backgroundColor: {
      dark: {
        color: "#0f0f0f",
      },
      default: {
        color: "#1d1d20",
      },
      light: {
        color: "#25262b",
      },
    },
    contrastText: {
      primary: "#fff",
      secondary: "#8a8f98",
    },
  },
};

export default theme;
