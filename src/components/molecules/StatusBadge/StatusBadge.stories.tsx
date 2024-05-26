import { Grid } from "@radix-ui/themes";
import type { Meta, StoryFn } from "@storybook/react";
import { StatusBadge } from "./StatusBadge";

const meta = {
  title: "molecules/StatusBadge",
  component: StatusBadge,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof StatusBadge>;

export default meta;

export const Status: StoryFn = () => {
  return (
    <Grid display="inline-grid" gap="2">
      <StatusBadge status={0} />
      <StatusBadge status={1} />
      <StatusBadge status={2} />
    </Grid>
  );
};
