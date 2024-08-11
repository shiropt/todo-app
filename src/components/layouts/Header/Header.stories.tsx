import { Header } from "@/components/layouts/Header/Header";
import { AppShell } from "@mantine/core";
import type { Meta, StoryObj } from "@storybook/react";

const args = {
  avatarImage: "",
  mobileOpened: true,
  desktopOpened: true,
  toggleDesktop: () => {},
  toggleMobile: () => {},
};

const meta = {
  title: "layouts/Header",
  component: Header,
  parameters: {},
  argTypes: {},
  args: {},
  render: () => {
    return (
      <AppShell>
        <Header {...args}></Header>
      </AppShell>
    );
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...args },
};
