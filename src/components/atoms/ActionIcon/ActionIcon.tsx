import { Icon } from "@/components/atoms/Icon";
import {
  ActionIconProps,
  ActionIcon as MantineActionIcon,
} from "@mantine/core";
import { ComponentProps, FC } from "react";

type Props = {
  icon: Icon;
} & ActionIconProps & {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
  } & ComponentProps<"button">;

export const ActionIcon: FC<Props> = ({
  icon,
  color = "gray",
  variant = "outline",
  radius = "lg",
  size = "md",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ref,
  ...props
}) => {
  return (
    <MantineActionIcon
      size={size}
      variant={variant}
      color={color}
      radius={radius}
      {...props}
    >
      <Icon size={size} icon={icon} />
    </MantineActionIcon>
  );
};
