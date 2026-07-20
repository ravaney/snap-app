// theme.ts
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      "Arial",
      "sans-serif",
    ].join(","),

    // Used by <Typography variant="h1">
    h1: {
      fontSize: "2rem", // 32px
      fontWeight: 700,
      lineHeight: 1.2,
    },

    h2: {
      fontSize: "1.75rem", // 28px
      fontWeight: 700,
      lineHeight: 1.2,
    },

    h3: {
      fontSize: "1.5rem", // 24px
      fontWeight: 600,
      lineHeight: 1.25,
    },

    h4: {
      fontSize: "1.25rem", // 20px
      fontWeight: 600,
      lineHeight: 1.3,
    },

    h5: {
      fontSize: "1.125rem", // 18px
      fontWeight: 600,
      lineHeight: 1.3,
    },

    h6: {
      fontSize: "1rem", // 16px
      fontWeight: 600,
      lineHeight: 1.4,
    },

    body1: {
      fontSize: "1rem", // 16px
      fontWeight: 400,
      lineHeight: 1.5,
    },

    body2: {
      fontSize: "0.875rem", // 14px
      fontWeight: 400,
      lineHeight: 1.5,
    },

    subtitle1: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },

    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },

    button: {
      fontSize: "1rem", // 16px
      fontWeight: 600,
      lineHeight: 1,
      textTransform: "none", // Prevent MUI uppercase buttons
    },

    caption: {
      fontSize: "0.875rem", // 14px
      fontWeight: 400,
      lineHeight: 1.4,
    },
  },

  shape: {
    borderRadius: 10,
  },

  spacing: 8,

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: "100%",
        },

        body: {
          minWidth: 320,
        },

        "*:focus-visible": {
          outline: "3px solid #1976d2",
          outlineOffset: 2,
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          minHeight: 48,
          minWidth: 48,
          paddingInline: 20,
          borderRadius: 10,
        },

        sizeSmall: {
          minHeight: 40,
          paddingInline: 16,
          fontSize: "0.875rem",
        },

        sizeLarge: {
          minHeight: 52,
          paddingInline: 24,
          fontSize: "1rem",
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          width: 48,
          height: 48,
        },

        sizeSmall: {
          width: 40,
          height: 40,
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          minHeight: 48,
          fontSize: "1rem",
        },

        input: {
          fontSize: "1rem",
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          fontWeight: 500,
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          lineHeight: 1.4,
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          minHeight: 40,
          fontSize: "0.875rem",
          fontWeight: 500,
        },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: {
          minHeight: 48,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
