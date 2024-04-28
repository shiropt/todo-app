import { FC } from "react";
import styled from "styled-components";
import type { Todo } from "@/modules/todo/type";
import { IconButton } from "@/components/atoms/IconButton";

type Props = {
  className?: string;
  todo: Todo;
};

export const Card: FC<Props> = ({ className, todo }) => {
  return (
    <StyledCard className={className}>
      <div>
        <p>{todo.title}</p>
        <div>
          <IconButton icon="mdiNoteEditOutline" />
          <IconButton icon="mdiTrashCanOutline" />
        </div>
      </div>
      {/* <p>{todo.description}</p> */}
    </StyledCard>
  );
};

const StyledCard = styled.div`
  cursor: pointer;
  padding: 8px;
  border-bottom: ${({ theme }) => theme.border};
  border-radius: 4px;
  &:hover {
    background: ${({ theme }) => theme.background.hover};
  }
  > div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    p {
      margin: 0;
      font-weight: bold;
    }
    > div {
      > button {
        margin: 0 8px;
      }
    }
  }
`;
