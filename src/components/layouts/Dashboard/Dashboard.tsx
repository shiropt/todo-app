import { Header } from "@/components/layouts/Header";
import { Main } from "@/components/pages/main";
import { menus } from "@/routes/navigation";
import { FC, useMemo } from "react";
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Sidebar } from "@/components/layouts/Sidebar";
import { useDispatch, useSelector } from "@/libs/redux";
import { STATUS, Todo } from "@/modules/todo/type";
import { TodoDetail } from "@/components/organisms/TodoDetail";
import { uiActions } from "@/modules/ui/slice";

export const Dashboard: FC = () => {
  const dispatch = useDispatch();
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const { selectedTodo } = useSelector((state) => state.todo);
  const isAsideOpen = useSelector((state) => state.ui.isAsideOpen);
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

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 180,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      aside={{
        width: 400,
        breakpoint: "xs",
        collapsed: { mobile: !isAsideOpen, desktop: !isAsideOpen },
      }}
    >
      <Header
        mobileOpened={mobileOpened}
        desktopOpened={desktopOpened}
        toggleDesktop={toggleDesktop}
        toggleMobile={toggleMobile}
      />
      <Sidebar menus={menus} />
      <Main />
      <AppShell.Aside>
        <TodoDetail
          onClose={() => {
            dispatch(uiActions.toggleAside());
          }}
          todo={selectedTodo || newTodo}
        />
      </AppShell.Aside>
    </AppShell>
  );
};
