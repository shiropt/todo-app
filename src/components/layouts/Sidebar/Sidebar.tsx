import { Menu } from "@/components/molecules/Menu";
import type { Menus } from "@/routes/navigation";
import { AppShell } from "@mantine/core";
import type { FC } from "react";

type Props = {
  className?: string;
  menus: Menus;
};

export const Sidebar: FC<Props> = ({ menus }) => {
  return (
    <AppShell.Navbar>
      {menus.map((menu) => {
        return <Menu key={menu.to} {...menu} />;
      })}
    </AppShell.Navbar>
  );
};
