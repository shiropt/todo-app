import { Todo, todoStatus } from "@/modules/todo/type";
import { Badge as RadixBadge } from "@radix-ui/themes";
import { FC } from "react";
import styled from "styled-components";

type Props = {
  className?: string;
  status: Todo["status"];
};

export const Component: FC<Props> = ({ className, status }) => {
  return (
    <RadixBadge className={className} color={todoStatus[status].color}>
      {todoStatus[status].label}
    </RadixBadge>
  );
};

export const StatusBadge = styled(Component)`
  padding: 4px;
  text-align: center;
  display: inline-block;
`;
