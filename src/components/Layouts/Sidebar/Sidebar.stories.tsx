import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from ".";

const meta = {
  title: "layouts/Sidebar",
  component: Sidebar,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "sidebar",
    menus: [
      { title: "Home", to: "/home", icon: "mdiHomeOutline" },
      { title: "Todos", to: "/todos", icon: "mdiFileTreeOutline" },
      { title: "Calendar", to: "/calendar", icon: "mdiCalendarTextOutline" },
      { title: "Stats", to: "/stats", icon: "mdiChartBellCurveCumulative" },
    ],
  },
};
