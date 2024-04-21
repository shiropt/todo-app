import type { Meta, StoryObj } from "@storybook/react";
import { Card } from ".";

const meta = {
  title: "molecules/Card",
  component: Card,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "card",
    todo: {
      id: "1",
      title: "Title",
      description: "Description",
      status: 0,
      deadline: "2021-12-31",
      created_at: "2021-12-31",
      updated_at: "2021-12-31",
    },
  },
};
