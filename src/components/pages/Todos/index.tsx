import { LoadingSpinner } from "@/components/atoms/Loading";
import { StatusBadge } from "@/components/molecules/StatusBadge";
import { useGetTodoListQuery } from "@/modules/todo/api";
import { Table, Text } from "@radix-ui/themes";
import styled from "styled-components";

const StyledRow = styled(Table.Row)`
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

export const Todos = () => {
  const { data, error, isLoading } = useGetTodoListQuery("");
  if (isLoading) return <LoadingSpinner withOverlay />;
  if (error) return <div>Error:</div>;

  return (
    <StyledTodos>
      <div style={{ display: "none" }}>aaa</div>
      <Table.Root>
        <Table.Body>
          {data?.data.map((todo) => {
            return (
              <StyledRow key={todo.id}>
                <Table.Cell>
                  <Text as="p">{todo.title}</Text>
                </Table.Cell>
                <Table.Cell align="right">
                  <StatusBadge status={todo.status}></StatusBadge>
                </Table.Cell>
              </StyledRow>
            );
          })}
        </Table.Body>
      </Table.Root>
    </StyledTodos>
  );
};

const StyledTodos = styled.div``;
