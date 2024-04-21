import type { FC } from "react";
import styled from "styled-components";
import { aliases } from "../../../styles/variables";
import { Icon } from "../../atoms/Icon";
import type { IconPath } from "../../atoms/Icon";

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
            return <li key={menu.to}>{menu.title}</li>;
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
  border: ${aliases.border};
  > div {
    display: flex;
    align-items: center;
    padding: 0 8px;
    border-bottom: ${aliases.border};
    height: 60px;
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
