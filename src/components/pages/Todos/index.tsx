import { ActionIcon } from "@/components/atoms/ActionIcon";
import { StatusBadge } from "@/components/molecules/StatusBadge";
import { useDispatch, useSelector } from "@/libs/redux";
import { deleteTodo, fetchTodos } from "@/libs/supabase/actions";
import { todoActions } from "@/modules/todo/slice";
import { STATUS, Todo } from "@/modules/todo/type";
import { uiActions } from "@/modules/ui/slice";
import { Box, Skeleton, Table, Text } from "@mantine/core";
import { memo, Suspense, use, useCallback, useMemo, useRef } from "react";

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
  const isAsideOpen = useSelector((state) => state.ui.isAsideOpen);
  const { todoList, selectedTodo } = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  const handleRowClick = useCallback(
    (todo: Todo) => {
      dispatch(todoActions.setSelectedTodo(todo));
      if (isAsideOpen) return;
      dispatch(uiActions.toggleAside());
    },
    [isAsideOpen, dispatch]
  );

  const handleAddButtonClick = useCallback(() => {
    dispatch(todoActions.setSelectedTodo(newTodo));
    if (!isAsideOpen) dispatch(uiActions.toggleAside());
  }, [dispatch, isAsideOpen, newTodo]);

  const promise = useMemo(() => fetchTodos(), []);
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
              todoList={todoList}
              selectedTodo={selectedTodo}
              promise={promise}
              handleRowClick={handleRowClick}
            />
          </Suspense>
        </Table>
      </Box>
    </Box>
  );
};

const TableBody = memo(
  ({
    promise,
    handleRowClick,
    selectedTodo,
    todoList,
  }: {
    promise: PromiseLike<Todo[]>;
    handleRowClick: (todo: Todo) => void;
    selectedTodo?: Todo | null;
    todoList: Todo[];
  }) => {
    const dispatch = useDispatch();
    const isFirstRender = useRef(false);

    if (!isFirstRender.current) {
      dispatch(todoActions.setTodoList(use(promise)));
      isFirstRender.current = true;
    }
    const handleRemove = async (id: string) => {
      await deleteTodo(id, dispatch);
    };

    {
      return (
        <Table.Tbody pt="xs">
          {todoList.map((todo) => {
            return (
              <Table.Tr
                onClick={() => handleRowClick(todo)}
                bg={todo.id === selectedTodo?.id ? "blue.0" : "none"}
                key={todo.id}
                style={{ cursor: "pointer", boxSizing: "border-box" }}
              >
                <Table.Td>
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
