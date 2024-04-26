import type { ComponentProps, FC } from "react";
import styled from "styled-components";
import { Icon } from "../Icon";

type Props = {
  className?: string;
  icon: Icon;
  rounded?: boolean;
} & ComponentProps<"button">;

export const IconButton: FC<Props> = ({ className, icon, rounded = false }) => {
  return (
    <StyledIconButton rounded={rounded} className={className}>
      <Icon icon={icon}></Icon>
    </StyledIconButton>
  );
};

const StyledIconButton = styled.button<Pick<Props, "rounded">>`
  background-color: white;
  border: ${({ theme }) => theme.border};
  border-radius: ${({ rounded }) => (rounded ? "50%" : "8px")};
  padding: 6px 8px;
`;
