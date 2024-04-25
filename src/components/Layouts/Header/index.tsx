import type { FC } from "react";
import styled from "styled-components";
import { IconButton } from "../../atoms/IconButton";

type Props = {
  className: string;
};

export const Header: FC<Props> = ({ className }) => {
  return (
    <StyledHeader className={className}>
      <IconButton path="mdiMagnify" rounded />
      <div>
        <IconButton path="mdiBellOutline" rounded />
        <IconButton path="mdiAccountOutline" rounded />
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
    margin-right: 8px;
    button {
      margin: 0 8px;
    }
  }
`;
