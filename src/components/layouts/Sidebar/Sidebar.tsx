import type { FC } from "react";
import styled from "styled-components";
import { Icon } from "@/components/atoms/Icon";
import { Menu } from "@/components/molecules/Menu";
import { Link } from "wouter";
import { paths } from "@/routes/path";
import type { Menus } from "@/routes/navigation";

type Props = {
  className?: string;
  menus: Menus;
};

export const Sidebar: FC<Props> = ({ className, menus }) => {
  return (
    <StyledSidebar className={className}>
      <Link to={paths.home}>
        <Icon icon="mdiCheckboxMarkedCircleAutoOutline" size="large" />
        <p>Acme Inc</p>
      </Link>
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
  > a {
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
`;
