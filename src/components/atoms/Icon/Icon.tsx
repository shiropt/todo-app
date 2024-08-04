import MdiIcon from "@mdi/react";
import {
  mdiHomeOutline,
  mdiCheckboxMarkedCircleAutoOutline,
  mdiFileTreeOutline,
  mdiCalendarTextOutline,
  mdiChartBellCurveCumulative,
  mdiBellOutline,
  mdiTrashCanOutline,
  mdiNoteEditOutline,
  mdiMagnify,
  mdiAccountOutline,
  mdiPencilOutline,
  mdiChevronDoubleRight,
  mdiPlusCircleOutline,
  mdiClose,
  mdiPlus,
} from "@mdi/js";

import type { ComponentProps, FC } from "react";

export type Icon = keyof typeof icons;
export type IconSize = keyof typeof sizes;

const icons = {
  mdiHomeOutline,
  mdiCheckboxMarkedCircleAutoOutline,
  mdiFileTreeOutline,
  mdiCalendarTextOutline,
  mdiChartBellCurveCumulative,
  mdiBellOutline,
  mdiTrashCanOutline,
  mdiNoteEditOutline,
  mdiMagnify,
  mdiAccountOutline,
  mdiPencilOutline,
  mdiChevronDoubleRight,
  mdiPlusCircleOutline,
  mdiClose,
  mdiPlus,
};

const sizes = {
  xs: 0.5,
  sm: 0.8,
  md: 1,
  lg: 1.2,
  xl: 1.5,
};

type Props = {
  icon: Icon;
  size?: IconSize;
} & Omit<ComponentProps<typeof MdiIcon>, "path">;

export const Icon: FC<Props> = ({ icon, size = "md", ...props }) => {
  return <MdiIcon {...props} path={icons[icon]} size={sizes[size]} />;
};
