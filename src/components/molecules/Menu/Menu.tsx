import type { FC } from "react";
import { Icon } from "@/components/atoms/Icon";
import { Link, useLocation } from "wouter";
import { Menus } from "@/routes/navigation";
import { NavLink } from "@mantine/core";

type Props = Menus[number];

export const Menu: FC<Props> = ({ icon, title, to }) => {
  const [location] = useLocation();

  return (
    <Link
      style={{ textDecoration: "none", color: "inherit", width: "100%" }}
      to={to}
    >
      <NavLink
        component="button"
        active={location === to}
        w="100%"
        leftSection={<Icon icon={icon} />}
        p="md"
        label={title}
      />
    </Link>
  );
};
