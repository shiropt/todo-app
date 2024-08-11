import type { Meta, StoryObj } from "@storybook/react";
import { ActionIcon } from "./ActionIcon";

const meta = {
  title: "atoms/ActionIcon",
  component: ActionIcon,
  parameters: {},
  argTypes: {},
  args: {},
} satisfies Meta<typeof ActionIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "mdiAccountOutline",
  },
};
