import { ActionIcon } from "@/components/atoms/ActionIcon";
import { StatusBadge } from "@/components/molecules/StatusBadge";
import { TodoDetail } from "@/components/organisms/TodoDetail";
import { useDispatch, useSelector } from "@/libs/redux";
import { useDeleteTodoMutation } from "@/modules/todo/api";
import { STATUS, Todo, TodosResponse } from "@/modules/todo/type";
import { uiActions } from "@/modules/ui/slice";
import { AppShell, Box, Skeleton, Table, Text } from "@mantine/core";
import { Suspense, use, useCallback, useMemo, useState } from "react";

const fetchTodoList = async () => {
  const response = await fetch(import.meta.env.VITE_API_ENDPOINT + "/todos");
  if (!response.ok) throw new Error("Failed to fetch todos");
  const json = await response.json();
  return json;
};

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
          <Suspense
            fallback={
              <Table.Tbody>
                {[...Array(5)].map((_, index) => (
                  <Table.Tr key={index}>
                    <Table.Td>
                      <Skeleton height={40} />
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            }
          >
            <TableBody
              selectedTodo={selectedTodo}
              promise={fetchTodoList()}
              handleRemove={handleRemove}
              handleRowClick={handleRowClick}
            />
          </Suspense>
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

const TableBody = ({
  promise,
  handleRowClick,
  selectedTodo,
  handleRemove,
}: {
  promise: PromiseLike<TodosResponse>;
  handleRowClick: (todo: Todo) => void;
  selectedTodo?: Todo | null;
  handleRemove: (id: string) => () => void;
}) => {
  const list = use(promise);
  {
    return (
      <Table.Tbody pt="xs">
        {list.data.map((todo) => {
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
    );
  }
};
