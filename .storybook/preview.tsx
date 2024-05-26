import { theme } from "../src/styles/variables";
import { GlobalStyle } from "../src/styles/global";
import type { Decorator, Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Theme as RadixTheme } from "@radix-ui/themes";
import React from "react";

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

export const decorators: Decorator[] = [
  (Story) => (
    <RadixTheme>
      <Story />
    </RadixTheme>
  ),
  withThemeFromJSXProvider({
    themes: { light: theme },
    defaultTheme: "light",
    GlobalStyles: GlobalStyle,
    Provider: ThemeProvider,
  }),
];

export default preview;
