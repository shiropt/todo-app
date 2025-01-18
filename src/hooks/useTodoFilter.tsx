import { useSelector } from "@/libs/redux";
import { STATUS } from "@/modules/todo/type";
import { useMemo } from "react";

export const useTodoFilter = () => {
  const { todoList } = useSelector((state) => state.todo);

  const todayTodos = useMemo(
    () =>
      todoList.filter(
        (todo) =>
          new Date(todo.deadline).getDate() === new Date().getDate() &&
          todo.status !== STATUS.COMPLETE
      ),
    [todoList]
  );

  const afterTomorrowTodos = useMemo(
    () =>
      todoList.filter(
        (todo) => new Date(todo.deadline).getDate() > new Date().getDate()
      ),
    [todoList]
  );

  const completeTodos = useMemo(
    () => todoList.filter((todo) => todo.status === STATUS.COMPLETE),
    [todoList]
  );

  const stayTodos = useMemo(
    () => todoList.filter((todo) => todo.status === STATUS.STAY),
    [todoList]
  );

  const limitedTodos = useMemo(
    () =>
      todoList.filter(
        (todo) =>
          new Date(todo.deadline).getDate() < new Date().getDate() &&
          todo.status === STATUS.IN_PROGRESS
      ),
    [todoList]
  );

  return {
    todayTodos,
    afterTomorrowTodos,
    completeTodos,
    stayTodos,
    limitedTodos,
  };
};
