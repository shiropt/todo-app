import { StatusBadge } from "@/components/molecules/StatusBadge";
import { TodoDetail } from "@/components/organisms/TodoDetail";
import { useDispatch, useSelector } from "@/libs/redux";
import { useGetTodoListQuery } from "@/modules/todo/api";
import { Todo } from "@/modules/todo/type";
import { uiActions } from "@/modules/ui/slice";
import {
  AppShell,
  Box,
  Loader,
  Table,
  Text,
  LoadingOverlay,
} from "@mantine/core";
import { useCallback, useState } from "react";

export const Todos = () => {
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>();
  const isAsideOpen = useSelector((state) => state.ui.isAsideOpen);
  const dispatch = useDispatch();

  const handleRowClick = useCallback(
    (todo: Todo) => {
      setSelectedTodo({ ...todo });
      if (isAsideOpen) return;
      dispatch(uiActions.toggleAside());
    },
    [isAsideOpen, dispatch, setSelectedTodo]
  );

  const { data, error, isLoading } = useGetTodoListQuery("");
  if (isLoading)
    return (
      <LoadingOverlay
        visible={isLoading}
        loaderProps={{ children: <Loader /> }}
      />
    );

  if (error) return <div>Error:</div>;

  return (
    <Box>
      <Box>
        <Table
          style={{ borderRight: "1px solid var(--app-shell-border-color)" }}
          horizontalSpacing="md"
          highlightOnHover
          verticalSpacing="sm"
        >
          <Table.Tbody>
            {data?.data.map((todo) => {
              return (
                <Table.Tr
                  bd={todo.id === selectedTodo?.id ? "1px solid blue" : "none"}
                  key={todo.id}
                  onClick={() => handleRowClick(todo)}
                  style={{ cursor: "pointer" }}
                >
                  <Table.Td>
                    <Text>{todo.title}</Text>
                  </Table.Td>
                  <Table.Td align="right">
                    <StatusBadge status={todo.status}></StatusBadge>
                  </Table.Td>
                </Table.Tr>
              );
            })}
          </Table.Tbody>
        </Table>
      </Box>
      <AppShell.Aside>
        {selectedTodo && (
          <TodoDetail
            onClose={() => {
              dispatch(uiActions.toggleAside());
              setSelectedTodo(null);
            }}
            todo={selectedTodo}
          />
        )}
      </AppShell.Aside>
    </Box>
  );
};
