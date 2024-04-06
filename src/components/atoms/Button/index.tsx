import { ComponentProps, FC } from "react";
import styled, { css } from "styled-components";

type Props = {
  className?: string;
  children: React.ReactNode;
  large?: boolean;
  rounded?: boolean;
} & ComponentProps<"button">;

export const Button: FC<Props> = ({ children, large, rounded, ...props }) => {
  return (
    <StyledButton large={!!large} rounded={!!rounded} {...props}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ large: boolean; rounded: boolean }>`
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
  ${({ large }) => css`
    padding: 8px ${large ? 48 : 16}px;
  `}
  ${({ rounded }) => css`
    border-radius: ${rounded ? 24 : 4}px;
  `}
`;
