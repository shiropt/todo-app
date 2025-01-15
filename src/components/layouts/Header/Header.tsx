import { ActionIcon } from "@/components/atoms/ActionIcon";
import { Icon } from "@/components/atoms/Icon";
import { paths } from "@/routes/path";
import { AppShell, Avatar, Burger, Flex, Group, NavLink } from "@mantine/core";
import type { FC } from "react";
import { Link } from "wouter";

type Props = {
  avatarImage?: string;
  alt?: string;
  mobileOpened: boolean;
  desktopOpened: boolean;
  toggleDesktop: () => void;
  toggleMobile: () => void;
};

export const Header: FC<Props> = ({
  avatarImage,
  alt,
  mobileOpened,
  desktopOpened,
  toggleDesktop,
  toggleMobile,
}) => {
  return (
    <AppShell.Header>
      <Flex h="100%" align="center" justify="space-between">
        <Group h="100%" px="md" gap={0}>
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          />
          <Link to={paths.home} style={{ textDecoration: "none" }}>
            <NavLink
              style={{
                textDecoration: "none",
                color: "black",
              }}
              component="button"
              label="Acme Inc"
              leftSection={
                <Icon icon="mdiCheckboxMarkedCircleAutoOutline" size="lg" />
              }
            />
          </Link>
        </Group>
        <Flex pr="sm" gap="sm" align="center">
          {/* <ActionIcon icon="mdiBellOutline" />
          <Avatar src={avatarImage} alt={alt} size="sm" /> */}
        </Flex>
      </Flex>
    </AppShell.Header>
  );
};
