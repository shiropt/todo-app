import { Menu } from "@/components/molecules/Menu";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "molecules/Menu",
  component: Menu,
  parameters: {},
  argTypes: {},
  args: {
    title: "Home",
    to: "/home",
    icon: "mdiHomeOutline",
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
