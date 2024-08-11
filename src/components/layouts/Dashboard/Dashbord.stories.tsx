import { Dashboard } from "@/components/layouts/Dashboard";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "layouts/Dashboard",
  component: Dashboard,
  parameters: {},
  argTypes: {},
  args: {},
  render: () => {
    return <Dashboard />;
  },
} satisfies Meta<typeof Dashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
