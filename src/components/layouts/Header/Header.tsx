import { IconButton } from "@/components/atoms/IconButton";
import { Avatar, Flex } from "@radix-ui/themes";
import type { FC } from "react";
import styled from "styled-components";

type Props = {
  className?: string;
  avatarImage?: string;
  alt?: string;
};

export const Header: FC<Props> = ({ className, avatarImage, alt }) => {
  return (
    <StyledHeader className={className}>
      <Flex height="100%" justify="between" align="center">
        <IconButton icon="mdiMagnify" />
        <Flex align="center" gap="4">
          <IconButton icon="mdiBellOutline" />
          <Avatar
            src={avatarImage}
            alt={alt}
            radius="full"
            size="2"
            fallback={<IconButton icon="mdiAccountOutline" />}
          />
        </Flex>
      </Flex>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 60px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.background.main};
  border-bottom: ${({ theme }) => theme.border};
`;
