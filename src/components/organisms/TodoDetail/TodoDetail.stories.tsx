import type { Meta, StoryObj } from "@storybook/react";
import { TodoDetail } from "./TodoDetail";

const meta = {
  title: "organisms/TodoDetail",
  component: TodoDetail,
  parameters: {},
  argTypes: {},
  args: {},
} satisfies Meta<typeof TodoDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    todo: {
      id: "1",
      title: "title",
      description: "description",
      status: 0,
      deadline: "2022-01-01",
      created_at: "2022-01-01",
      updated_at: "2022-01-01",
    },
    onClose: () => {},
  },
};
