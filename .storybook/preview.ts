import { theme } from "./../src/styles/variables";
import { GlobalStyle } from "./../src/styles/global";
import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: { light: theme },
    defaultTheme: "light",
    GlobalStyles: GlobalStyle,
    Provider: ThemeProvider,
  }),
];

export default preview;
