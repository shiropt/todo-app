import type { FC } from "react";
import styled from "styled-components";
import type { IconPath } from "../../atoms/Icon";
import { Icon } from "../../atoms/Icon";
import { Menu } from "../../molecules/Menu";

export type Menu = {
  title: string;
  to: string;
  path: IconPath;
};
type Props = {
  className: string;
  menus: Menu[];
};

export const Sidebar: FC<Props> = ({ className, menus }) => {
  return (
    <StyledSidebar className={className}>
      <div>
        <Icon icon="mdiCheckboxMarkedCircleAutoOutline" size="large" />
        <p>Acme Inc</p>
      </div>
      <nav>
        <ul>
          {menus.map((menu) => {
            return <Menu key={menu.to} {...menu} />;
          })}
        </ul>
      </nav>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  background-color: ${({ theme }) => theme.background.main};
  width: 180px;
  height: 100vh;
  border-right: ${({ theme }) => theme.border};
  > div {
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    border-bottom: ${({ theme }) => theme.border};
    > p {
      font-weight: 700;
      cursor: pointer;
      margin: 0 0 0 8px;
    }
  }
  > div:hover {
    background: ${({ theme }) => theme.background.hover};
  }
  > nav {
    padding: 0 8px;
  }
`;
