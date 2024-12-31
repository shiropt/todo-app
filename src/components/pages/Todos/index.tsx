import { ActionIcon } from "@/components/atoms/ActionIcon";
import { StatusBadge } from "@/components/molecules/StatusBadge";
import { TodoDetail } from "@/components/organisms/TodoDetail";
import { useDispatch, useSelector } from "@/libs/redux";
import { STATUS, Todo, TodosResponse } from "@/modules/todo/type";
import { uiActions } from "@/modules/ui/slice";
import { AppShell, Box, Skeleton, Table, Text } from "@mantine/core";
import { memo, Suspense, use, useCallback, useMemo, useState } from "react";

const fetchTodoList = async () => {
  const response = await fetch(import.meta.env.VITE_API_ENDPOINT + "/todos");
  if (!response.ok) throw new Error("Failed to fetch todos");
  const json = await response.json();
  return json;
};

const deleteTodo = async (id: string) => {
  const response = await fetch(
    import.meta.env.VITE_API_ENDPOINT + `/todo/${id}`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) throw new Error("Failed to delete todo");
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
  const promise = useMemo(() => fetchTodoList(), []);
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
                  aria-label="Add new todo"
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
              promise={promise}
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

const TableBody = memo(
  ({
    promise,
    handleRowClick,
    selectedTodo,
  }: {
    promise: PromiseLike<TodosResponse>;
    handleRowClick: (todo: Todo) => void;
    selectedTodo?: Todo | null;
  }) => {
    const [list, setList] = useState(use(promise));

    const handleRemove = async (id: string) => {
      const response = await deleteTodo(id);
      const removedId = response.data.id;
      setList((prev) => ({
        ...prev,
        data: prev.data.filter((todo) => todo.id !== removedId),
      }));
    };

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
                    onClick={() => handleRemove(todo.id)}
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
  }
);
