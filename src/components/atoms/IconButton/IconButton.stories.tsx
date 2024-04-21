import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from ".";

const meta = {
  title: "atoms/IconButton",
  component: IconButton,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "iconButton",
    path: "mdiBellOutline",
  },
};
export const Rounded: Story = {
  args: {
    className: "iconButton",
    rounded: true,
    path: "mdiBellOutline",
  },
};
