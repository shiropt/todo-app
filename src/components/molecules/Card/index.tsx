import styled from "styled-components";
import { Todo } from "../../../modules/todo/type";
import { aliases } from "../../../styles/variables";
import { FC } from "react";
import { IconButton } from "../../atoms/IconButton";

type Props = {
  className?: string;
  todo: Todo;
};

export const Card: FC<Props> = ({ className, todo }) => {
  return (
    <StyledCard className={className}>
      <div>
        <h2>{todo.title}</h2>
        <div>
          <IconButton path="mdiNoteEditOutline" />
          <IconButton path="mdiTrashCanOutline" />
        </div>
      </div>
      <p>{todo.description}</p>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  border: ${aliases.border};
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background: ${aliases.hoverBackgroundColor};
  }
  > div {
    display: flex;
    justify-content: space-between;
    h2 {
      margin: 0;
    }
    > div {
      > button {
        margin: 0 8px;
      }
    }
  }
`;
