import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from ".";
import { Icon } from "../../atoms/Icon";

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
      {
        title: (
          <a>
            <Icon path="mdiHomeOutline" />
            <span>Home</span>
          </a>
        ),
        to: "/home",
      },
      {
        title: (
          <a>
            <Icon path="mdiFileTreeOutline" />
            <span>Todos</span>
          </a>
        ),
        to: "/todos",
      },
      {
        title: (
          <a>
            <Icon path="mdiCalendarTextOutline" />
            <span>Calendar</span>
          </a>
        ),
        to: "/calendar",
      },
      {
        title: (
          <a>
            <Icon path="mdiChartBellCurveCumulative" />
            <span>Stats</span>
          </a>
        ),
        to: "/stats",
      },
    ],
  },
};
