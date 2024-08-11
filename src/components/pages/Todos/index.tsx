import { ActionIcon } from "@/components/atoms/ActionIcon";
import { StatusBadge } from "@/components/molecules/StatusBadge";
import { TodoDetail } from "@/components/organisms/TodoDetail";
import { useDispatch, useSelector } from "@/libs/redux";
import { useDeleteTodoMutation, useGetTodoListQuery } from "@/modules/todo/api";
import { STATUS, Todo } from "@/modules/todo/type";
import { uiActions } from "@/modules/ui/slice";
import { AppShell, Box, Loader, LoadingOverlay, Table, Text } from "@mantine/core";
import { useCallback, useMemo, useState } from "react";

export const Todos = () => {
  const newTodo: Todo = useMemo(() => {
    return {
      id: "",
      title: "",
      status: STATUS.IN_PROGRESS,
      created_at: new Date().toISOString(),
      updated_at: "",
      deadline: "",
      description: "",
    };
  }, []);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>();
  const isAsideOpen = useSelector((state) => state.ui.isAsideOpen);
  const [remove] = useDeleteTodoMutation();

  const dispatch = useDispatch();

  const handleRowClick = useCallback(
    (todo: Todo) => {
      setSelectedTodo({ ...todo });
      if (isAsideOpen) return;
      dispatch(uiActions.toggleAside());
    },
    [isAsideOpen, dispatch, setSelectedTodo]
  );

  const handleAddButtonClick = useCallback(() => {
    setSelectedTodo(newTodo);
    if (!isAsideOpen) dispatch(uiActions.toggleAside());
  }, [dispatch, isAsideOpen, newTodo]);

  const handleRemove = useCallback(
    (id: string) => async () => {
      await remove(id);
    },
    [remove]
  );

  const { data, error, isLoading } = useGetTodoListQuery("");
  if (isLoading) return <LoadingOverlay visible={isLoading} loaderProps={{ children: <Loader /> }} />;

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
          <Table.Thead>
            <Table.Tr>
              <Table.Th px="xs" py={4}>
                <ActionIcon
                  variant="white"
                  style={{
                    cursor: "pointer",
                    padding: "0",
                  }}
                  icon="mdiPlus"
                  size="lg"
                  onClick={handleAddButtonClick}
                />
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody pt="xs">
            {data?.data.map((todo) => {
              return (
                <Table.Tr
                  bd={todo.id === selectedTodo?.id ? "1px solid blue" : "none"}
                  key={todo.id}
                  style={{ cursor: "pointer", boxSizing: "border-box" }}
                >
                  <Table.Td onClick={() => handleRowClick(todo)}>
                    <Text>{todo.title}</Text>
                  </Table.Td>
                  <Table.Td px={0} align="right">
                    <StatusBadge status={todo.status}></StatusBadge>
                    <ActionIcon
                      style={{ verticalAlign: "middle" }}
                      onClick={handleRemove(todo.id)}
                      icon="mdiTrashCanOutline"
                      variant="white"
                      mx="sm"
                    />
                  </Table.Td>
                </Table.Tr>
              );
            })}
          </Table.Tbody>
        </Table>
      </Box>
      <AppShell.Aside>
        <TodoDetail
          onClose={() => {
            dispatch(uiActions.toggleAside());
            setSelectedTodo(null);
          }}
          todo={selectedTodo || newTodo}
        />
      </AppShell.Aside>
    </Box>
  );
};
