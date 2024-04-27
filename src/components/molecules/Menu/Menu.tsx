import type { FC } from "react";
import styled from "styled-components";
import { Icon } from "@/components/atoms/Icon";
import { Link } from "wouter";
import { Menus } from "@/routes/navigation";

type Props = Menus[number];

export const Menu: FC<Props> = ({ icon, title, to }) => {
  return (
    <StyledMenu>
      <Link className={(active) => (active ? "active" : "")} to={to}>
        <Icon icon={icon} />
        <span>{title}</span>
      </Link>
    </StyledMenu>
  );
};

const StyledMenu = styled.li`
  color: ${({ theme }) => theme.colors.passive};
  border-radius: 4px;
  cursor: pointer;
  > a {
    display: block;
    text-decoration: none;
    color: inherit;
    padding: 8px;
    /* padding: inherit; li 要素の padding を継承 */
    > svg,
    span {
      vertical-align: middle;
      margin: 0 4px;
    }
  }
  > a:hover {
    color: ${({ theme }) => theme.colors.active};
    background: ${({ theme }) => theme.background.hover};
    transition: background 0.3s;
  }
  .active {
    color: ${({ theme }) => theme.colors.active};
    background-color: ${({ theme }) => theme.background.active};
  }
`;
