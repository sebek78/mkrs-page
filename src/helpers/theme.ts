export type BgColors = "dark" | "default" | "light";

const theme = {
  breakpoints: {
    mobile: "320px",
    tablet: "768px",
    desktop: "1024px",
  },
  typography: {
    h1: {
      fontFamily: '"Cormorant Garamond", serif',
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
      fontFamily: '"Cormorant Garamond", serif',
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
    body: {
      fontFamily: '"Lato", sans-serif',
      mobile: {
        fontSize: "16px",
        lineHeight: 1.25,
      },
      tablet: {
        fontSize: "16px",
        lineHeight: 1.375,
      },
      desktop: {
        fontSize: "16px",
        lineHeight: 1.375,
      },
    },
    body2: {
      fontFamily: '"Lato", sans-serif',
      mobile: {
        fontSize: "20px",
        lineHeight: 1.25,
      },
      tablet: {
        fontSize: "24px",
        lineHeight: 1.46,
      },
      desktop: {
        fontSize: "24px",
        lineHeight: 1.46,
      },
    },
  },
  palette: {
    primary: {
      default: "#8C1620",
      dark: "#590202",
    },
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
