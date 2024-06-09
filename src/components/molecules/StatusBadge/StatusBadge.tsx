import { Todo, todoStatus } from "@/modules/todo/type";
import { Badge as MantineBadge } from "@mantine/core";
import { FC } from "react";

type Props = {
  status: Todo["status"];
};

export const StatusBadge: FC<Props> = ({ status }) => {
  return (
    <MantineBadge variant="light" color={todoStatus[status].color}>
      {todoStatus[status].label}
    </MantineBadge>
  );
};
