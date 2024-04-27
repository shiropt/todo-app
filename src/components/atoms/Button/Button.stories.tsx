import { Button } from "@/components/atoms/Button/Button";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import styled from "styled-components";

const meta = {
  title: "atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Buttons: StoryFn = () => {
  return (
    <Style>
      <Button>Default</Button>
      <Button rounded>rounded</Button>
      <Button large>large</Button>
      <Button large rounded>
        large rounded
      </Button>
    </Style>
  );
};

const Style = styled.div`
  > * {
    display: block;
    margin: 8px;
    text-align: center;
  }
`;
