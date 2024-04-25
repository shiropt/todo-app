import { FC } from "react";
import styled, { keyframes } from "styled-components";

type Sizes = "small" | "medium";

type Props = {
  className?: string;
  withOverlay?: boolean;
  size?: Sizes;
};
const getSize = (size: Sizes) => (size === "small" ? "20px" : "40px");

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div<{ size: Sizes }>`
  border: ${({ size }) => (size === "small" ? "2px" : "4px")} solid
    ${({ theme: { colors } }) => colors.gray8};
  border-left-color: ${({ theme }) => theme.colors.gray11};
  border-radius: 50%;
  width: ${({ size }) => getSize(size)};
  height: ${({ size }) => getSize(size)};
  animation: ${spinAnimation} 0.8s linear infinite;
`;

const Overlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme: { colors } }) => colors.gray2};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  height: 100vh;
`;

export const LoadingSpinner: FC<Props> = ({
  className,
  size = "medium",
  withOverlay = false,
}) => {
  return withOverlay ? (
    <Overlay className={className}>
      <Spinner size={size} />
    </Overlay>
  ) : (
    <Spinner size={size} className={className} />
  );
};
