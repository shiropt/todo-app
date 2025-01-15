import { Header } from "@/components/layouts/Header";
import { Main } from "@/components/pages/main";
import { menus } from "@/routes/navigation";
import { FC } from "react";
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Sidebar } from "@/components/layouts/Sidebar";
import { useSelector } from "@/libs/redux";

export const Dashboard: FC = () => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const isAsideOpen = useSelector((state) => state.ui.isAsideOpen);

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
    </AppShell>
  );
};
