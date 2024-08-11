import { Provider as ReduxProvider } from "react-redux";
import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import type { Preview } from "@storybook/react";
import React from "react";
import { store } from "../src/store";

export const theme: MantineThemeOverride = {};

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
  (renderStory: any) => (
    <ReduxProvider store={store}>
      <MantineProvider forceColorScheme="light" theme={theme}>
        {renderStory()}
      </MantineProvider>
    </ReduxProvider>
  ),
];

export default preview;
