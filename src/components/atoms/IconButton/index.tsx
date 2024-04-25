import type { ComponentProps, FC } from "react";
import styled from "styled-components";
import { Icon, IconPath } from "../Icon";

type Props = {
  className?: string;
  path: IconPath;
  rounded?: boolean;
} & ComponentProps<"button">;

export const IconButton: FC<Props> = ({ className, path, rounded = false }) => {
  return (
    <StyledIconButton rounded={rounded} className={className}>
      <Icon path={path}></Icon>
    </StyledIconButton>
  );
};

const StyledIconButton = styled.button<Pick<Props, "rounded">>`
  background-color: white;
  border: ${({ theme }) => theme.border};
  border-radius: ${({ rounded }) => (rounded ? "50%" : "8px")};
  padding: 6px 8px;
`;
