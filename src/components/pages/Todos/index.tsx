import styled from "styled-components";
import { useGetTodoListQuery } from "../../../modules/todo/api";
import { Card } from "../../molecules/Card";
import { LoadingSpinner } from "../../atoms/Loading";

export const Todos = () => {
  const { data, error, isLoading } = useGetTodoListQuery("");
  if (isLoading) return <LoadingSpinner withOverlay />;
  if (error) return <div>Error:</div>;

  return (
    <StyledTodos>
      <ul>
        {data?.data.map((todo) => (
          <li key={todo.id}>
            <Card todo={todo} />
          </li>
        ))}
      </ul>
    </StyledTodos>
  );
};

const StyledTodos = styled.div`
  > ul {
    padding: 0 24px;
    > li {
      margin-bottom: 24px;
    }
  }
`;
