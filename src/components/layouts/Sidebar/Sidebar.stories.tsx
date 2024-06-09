import { Sidebar } from "@/components/layouts/Sidebar/Sidebar";
import { menus } from "@/routes/navigation";
import { AppShell } from "@mantine/core";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "layouts/Sidebar",
  component: Sidebar,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  render: () => {
    return (
      <AppShell
        navbar={{
          width: 180,
          breakpoint: "sm",
        }}
      >
        <Sidebar menus={menus}></Sidebar>
      </AppShell>
    );
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { menus },
};
