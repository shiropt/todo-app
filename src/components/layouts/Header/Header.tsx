import type { FC } from "react";
import styled from "styled-components";
import { IconButton } from "@/components/atoms/IconButton";
import * as Avatar from "@radix-ui/react-avatar";

type Props = {
  className?: string;
  src?: string;
  alt?: string;
};

const StyledAvatar = styled(Avatar.Image)`
  width: 26px;
  height: 26px;
  object-fit: cover;
  border-radius: 50%;
`;

export const Header: FC<Props> = ({ className, src, alt }) => {
  return (
    <StyledHeader className={className}>
      <IconButton icon="mdiMagnify" rounded />
      <div>
        <IconButton icon="mdiBellOutline" rounded />
        <Avatar.Root>
          <StyledAvatar className={className} alt={alt} src={src} />
          <Avatar.Fallback>
            <IconButton icon="mdiAccountOutline" rounded />
          </Avatar.Fallback>
        </Avatar.Root>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 60px;
  background-color: ${({ theme }) => theme.background.main};
  border-bottom: ${({ theme }) => theme.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  > button {
    height: 32px;
    margin-left: 16px;
  }
  > div {
    display: flex;
    margin-right: 8px;
    align-items: center;
    button,
    img {
      display: block;
      margin: 0 8px;
    }
  }
`;
