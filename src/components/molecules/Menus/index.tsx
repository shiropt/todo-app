import type { FC } from "react";
import { Icon } from "../../atoms/Icon";
import styled from "styled-components";
import { aliases } from "../../../styles/variables";
import type { Menu as MenuType } from "../../Layouts/Sidebar";

type Props = MenuType;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Menu: FC<Props> = ({ path, title, to }) => {
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
  color: ${aliases.inActiveColor};
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    color: ${aliases.primaryColor};
    background-color: ${aliases.hoverBackgroundColor};
  }
  > a {
    > svg,
    span {
      vertical-align: middle;
      margin: 0 4px;
    }
  }
`;
