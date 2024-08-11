import { Todos } from "@/components/pages/Todos";
import { AppShell } from "@mantine/core";
import type { Meta, StoryObj } from "@storybook/react";
import { http, HttpResponse } from "msw";

const meta = {
  title: "pages/Todos",
  component: Todos,
  parameters: {
    msw: {
      handlers: [
        http.get("/todos", () => {
          return HttpResponse.json({
            data: [
              {
                id: "1",
                title: "Todo 1",
                status: 0,
                created_at: new Date().toISOString(),
                updated_at: "",
                deadline: "",
                description: "",
              },
              {
                id: "2",
                title: "Todo 2",
                status: 1,
                created_at: new Date().toISOString(),
                updated_at: "",
                deadline: "",
                description: "",
              },
              {
                id: "3",
                title: "Todo 2",
                status: 2,
                created_at: new Date().toISOString(),
                updated_at: "",
                deadline: "",
                description: "",
              },
            ],
          });
        }),
      ],
    },
  },
  argTypes: {},
  args: {},
  render: () => {
    const isAsideOpen = true;
    return (
      <AppShell
        aside={{
          width: 400,
          breakpoint: "sm",
          collapsed: { mobile: !isAsideOpen, desktop: !isAsideOpen },
        }}
      >
        <Todos />
      </AppShell>
    );
  },
} satisfies Meta<typeof Todos>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
