import codeTheme from "@theme-ui/prism/presets/shades-of-purple.json"
import baseTheme from "@pauliescanlon/gatsby-theme-terminal/src/gatsby-plugin-theme-ui"

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    text: "#dcdbf9",
    muted: "#8b87ea",
    primary: "#a92aeb",
    secondary: "#688ce0",
    error: "#ef2c63",
    success: "#cbbaff",
    background: "#131127",
    surface: "#232140",
  },

  styles: {
    ...baseTheme.styles,
    p: {
      a: {
        ...baseTheme.styles.p.a,
        color: "secondary",
        wordBreak: "break-word",
      },
      code: {
        ...baseTheme.styles.p.code,
        color: "inherit",
        fontSize: "14px",
        wordBreak: "break-word",
        backgroundColor: "surface",
      },
    },
    pre: {
      ...baseTheme.styles.pre,
      ...codeTheme,
    },
    a: {
      ...baseTheme.styles.a,
      color: "secondary",
      button: {
        cursor: "pointer",
      },
    },
    li: {
      code: {
        ...baseTheme.codeBlock,
        fontSize: 14,
      },
    },
    buttons: {
      ghost: {
        ...baseTheme.buttons.primary,
        color: "muted",
        backgroundColor: "background",
        transition: ".2s linear background-color",
        ":hover": {
          backgroundColor: "surface",
        },
      },
    },
  },
}
