import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import type { Preview } from "@storybook/react";
import React from "react";

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
    <MantineProvider forceColorScheme="light" theme={theme}>
      {renderStory()}
    </MantineProvider>
  ),
];

export default preview;
