import type { FC } from "react";
import styled from "styled-components";
import type { Menu as MenuType } from "../../Layouts/Sidebar";
import { Icon } from "../../atoms/Icon";

type Props = MenuType;

export const Menu: FC<Props> = ({ path, title }) => {
  return (
    <StyledMenu>
      <a>
        <Icon path={path} />
        <span>{title}</span>
      </a>
    </StyledMenu>
  );
};

const StyledMenu = styled.li`
  padding: 4px 8px;
  color: ${({ theme }) => theme.colors.passive};
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.active};
    background-color: ${({ theme }) => theme.background.hover};
  }
  > a {
    > svg,
    span {
      vertical-align: middle;
      margin: 0 4px;
    }
  }
`;
