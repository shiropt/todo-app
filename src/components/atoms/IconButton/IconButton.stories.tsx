import { IconButton } from "@/components/atoms/IconButton/IconButton";
import type { Meta, StoryObj } from "@storybook/react";

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
    icon: "mdiBellOutline",
  },
};
