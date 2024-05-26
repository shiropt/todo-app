import { Header } from "@/components/layouts/Header/Header";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "layouts/Header",
  component: Header,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "header",
  },
};
export const WidthImage: Story = {
  args: {
    className: "header",
    avatarImage:
      "https://img.freepik.com/free-photo/portrait-young-woman-wearing-glasses-3d-rendering_1142-43632.jpg?size=626&ext=jpg",
  },
};
