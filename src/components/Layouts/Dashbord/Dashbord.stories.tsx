import type { Meta, StoryObj } from "@storybook/react";
import { Dashboard } from ".";

const meta = {
  title: "layouts/Dashboard",
  component: Dashboard,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Dashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "dashboard",
  },
};
