import type { ComponentProps, FC } from "react";
import { Icon } from "@/components/atoms/Icon";
import {
  IconButtonProps,
  IconButton as RadixIconButton,
} from "@radix-ui/themes";

type Props = {
  icon: Icon;
} & ComponentProps<"button"> &
  IconButtonProps;

export const IconButton: FC<Props> = ({
  icon,
  color = "gray",
  radius = "full",
  size = "2",
  variant = "outline",
  ...props
}) => {
  return (
    <RadixIconButton
      style={{ cursor: "pointer" }}
      color={color}
      radius={radius}
      size={size}
      variant={variant}
      {...props}
    >
      <Icon icon={icon} />
    </RadixIconButton>
  );
};
