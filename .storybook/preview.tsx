import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import { Theme as RadixTheme } from "@radix-ui/themes";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import type { Decorator, Preview } from "@storybook/react";
import React from "react";
import { GlobalStyle } from "../src/styles/global";

export const theme = createTheme({
  fontFamily: "serif",
});
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
  (renderStory: any) => (
    <MantineProvider theme={theme}>{renderStory()}</MantineProvider>
  ),
  (Story) => (
    <RadixTheme>
      <Story />
    </RadixTheme>
  ),
  withThemeFromJSXProvider({
    themes: { light: theme },
    defaultTheme: "light",
    GlobalStyles: GlobalStyle,
  }),
];

export default preview;
