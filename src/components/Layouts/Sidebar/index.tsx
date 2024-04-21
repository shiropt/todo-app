import { FC } from "react";
import styled from "styled-components";

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
  background-color: rgb(243 244 246 / 0.4);
  border: 1px solid #e5e7eb;
  > div {
    border-bottom: 1px solid #e5e7eb;
    padding: 16px;
    > p {
      font-weight: 700;
      cursor: pointer;
      margin: 0;
    }
  }
  > div:hover {
    background-color: #f3f4f6;
  }
  > nav {
    padding: 0 16px;
    > ul {
      > li {
        padding: 4px 8px;
        color: #6b7280;
        border-radius: 4px;
        cursor: pointer;
      }
      > li:hover {
        color: #111827;
        background-color: #f3f4f6;
      }
    }
  }
`;
