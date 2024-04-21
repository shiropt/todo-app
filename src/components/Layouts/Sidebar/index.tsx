import type { FC } from "react";
import styled from "styled-components";
import { aliases } from "../../../styles/variables";
import { Icon } from "../../atoms/Icon";
import type { IconPath } from "../../atoms/Icon";
import { Menu } from "../../molecules/Menus";

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
        <Icon path="mdiCheckboxMarkedCircleAutoOutline" size="large" />
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
  width: 180px;
  height: 100vh;
  background-color: ${aliases.backgroundColor};
  border-right: ${aliases.border};
  > div {
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    border-bottom: ${aliases.border};
    > p {
      font-weight: 700;
      cursor: pointer;
      margin: 0 0 0 8px;
    }
  }
  > div:hover {
    background-color: ${aliases.hoverBackgroundColor};
  }
  > nav {
    padding: 0 8px;
  }
`;
