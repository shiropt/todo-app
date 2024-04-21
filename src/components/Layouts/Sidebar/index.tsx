import { FC } from "react";
import styled from "styled-components";
import { aliases } from "../../../styles/variables";

type Menu = {
  title: string;
  to: string;
};
type Props = {
  className: string;
  menus: Menu[];
};

export const Sidebar: FC<Props> = ({ className, menus }) => {
  return (
    <StyledSidebar className={className}>
      <div>
        <p>Acme Inc</p>
      </div>
      <nav>
        <ul>
          {menus.map((menu) => {
            return <li key={menu.title}>{menu.title}</li>;
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
    border-bottom: ${aliases.border};
    padding: 16px;
    > p {
      font-weight: 700;
      cursor: pointer;
      margin: 0;
    }
  }
  > div:hover {
    background-color: ${aliases.hoverBackgroundColor};
  }
  > nav {
    padding: 0 16px;
    > ul {
      > li {
        padding: 4px 8px;
        color: ${aliases.inActiveColor};
        border-radius: 4px;
        cursor: pointer;
      }
      > li:hover {
        color: ${aliases.primaryColor};
        background-color: ${aliases.hoverBackgroundColor};
      }
    }
  }
`;
