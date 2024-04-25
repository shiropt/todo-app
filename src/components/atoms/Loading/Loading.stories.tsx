import type { Meta, StoryObj } from "@storybook/react";
import { LoadingSpinner } from ".";

const meta = {
  title: "layouts/LoadingSpinner",
  component: LoadingSpinner,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof LoadingSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Small: Story = {
  args: {
    size: "small",
  },
};
export const WithOverlay: Story = {
  args: {
    size: "medium",
    withOverlay: true,
  },
};
