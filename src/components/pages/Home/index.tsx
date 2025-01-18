import {
  Box,
  Card as MantineCard,
  Flex,
  CardProps,
  Title,
  List,
  ThemeIcon,
  Skeleton,
} from "@mantine/core";
import { FC, memo, Suspense, use, useCallback, useMemo, useRef } from "react";
import "./home.css";
import { IconCircleCheck, IconCircleDashed } from "@tabler/icons-react";
import { fetchTodos } from "@/libs/supabase/actions";
import { STATUS, Todo } from "@/modules/todo/type";
import { useDispatch, useSelector } from "@/libs/redux";
import { todoActions } from "@/modules/todo/slice";
import { useTodoFilter } from "@/hooks/useTodoFilter";
import { uiActions } from "@/modules/ui/slice";

const Card: FC<{
  cardProps?: CardProps;
  title: string;
  list?: Todo[];
  fallback?: boolean;
  handleRowClick?: (todo: Todo) => void;
}> = ({ cardProps, title, list, fallback, handleRowClick }) => {
  return (
    <MantineCard radius="md" p="md" {...cardProps} shadow="xs">
      <Title mb="md" order={4}>
        {title}
      </Title>
      <List center>
        {fallback ? (
          <>
            <Skeleton height={12} radius="xl" />
            <Skeleton height={12} mt={6} radius="xl" />
            <Skeleton height={12} mt={6} radius="xl" />
            <Skeleton height={12} mt={6} width="70%" radius="xl" />
          </>
        ) : (
          list &&
          list.map((item) => {
            return (
              <List.Item
                p="4px"
                key={item.title}
                onClick={() => handleRowClick && handleRowClick(item)}
                icon={
                  item.status === STATUS.COMPLETE ? (
                    <ThemeIcon color="teal" size={24} radius="xl">
                      <IconCircleCheck size={16} />
                    </ThemeIcon>
                  ) : (
                    <ThemeIcon color="blue" size={24} radius="xl">
                      <IconCircleDashed size={16} />
                    </ThemeIcon>
                  )
                }
              >
                {item.title}
              </List.Item>
            );
          })
        )}
      </List>
    </MantineCard>
  );
};

export const Home: FC = () => {
  const promise = useMemo(() => fetchTodos(), []);
  return (
    <Suspense fallback={<FallBack />}>
      <Cards promise={promise} />
    </Suspense>
  );
};

const Cards = memo(({ promise }: { promise: PromiseLike<Todo[]> }) => {
  const isFirstRender = useRef(false);
  const dispatch = useDispatch();
  const isAsideOpen = useSelector((state) => state.ui.isAsideOpen);

  if (!isFirstRender.current) {
    dispatch(todoActions.setTodoList(use(promise)));
    isFirstRender.current = true;
  }
  const {
    todayTodos,
    afterTomorrowTodos,
    completeTodos,
    stayTodos,
    limitedTodos,
  } = useTodoFilter();

  const handleRowClick = useCallback(
    (todo: Todo) => {
      dispatch(todoActions.setSelectedTodo(todo));
      if (isAsideOpen) return;
      dispatch(uiActions.toggleAside());
    },
    [isAsideOpen, dispatch]
  );

  return (
    <Box p="xl">
      <Flex justify="center" mb="lg">
        <MantineCard p="md" flex={1} shadow="xs">
          <Title order={4} mb="md">
            {limitedTodos.length
              ? `⚠️ 期限切れのタスクが${limitedTodos.length}件あります`
              : "現在期限切れのタスクはありません👍"}
          </Title>
          <List center>
            {limitedTodos.map((item) => {
              return (
                <List.Item
                  p="4px"
                  onClick={() => handleRowClick(item)}
                  key={item.title}
                  icon={
                    <ThemeIcon color="red" size={24} radius="xl">
                      <IconCircleDashed size={16} />
                    </ThemeIcon>
                  }
                >
                  {item.title}
                </List.Item>
              );
            })}
          </List>
        </MantineCard>
      </Flex>
      <Flex
        className="card-wrapper"
        wrap="wrap"
        justify="space-around"
        gap="md"
      >
        <Card
          handleRowClick={handleRowClick}
          title="今日が期限のタスク"
          list={todayTodos}
        ></Card>
        <Card
          handleRowClick={handleRowClick}
          title="明日以降が期限のタスク"
          list={afterTomorrowTodos}
        ></Card>
        <Card
          handleRowClick={handleRowClick}
          title="完了タスク"
          list={completeTodos}
        ></Card>
        <Card
          handleRowClick={handleRowClick}
          title="保留中のタスク"
          list={stayTodos}
        ></Card>
      </Flex>
    </Box>
  );
});

const FallBack = () => {
  return (
    <Box p="xl">
      <Box mb="lg">
        <MantineCard p="md" shadow="xs">
          <Skeleton height={24} w="60%" />
        </MantineCard>
      </Box>
      <Flex
        className="card-wrapper"
        wrap="wrap"
        justify="space-around"
        gap="md"
      >
        <Card fallback title="今日が期限のタスク"></Card>
        <Card fallback title="明日以降が期限のタスク"></Card>
        <Card fallback title="完了タスク"></Card>
        <Card fallback title="保留中のタスク"></Card>
      </Flex>
    </Box>
  );
};
