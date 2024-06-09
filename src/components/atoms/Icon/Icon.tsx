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
} from "@mdi/js";

import { FC } from "react";

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
};

const sizes = {
  medium: 0.8,
  large: 1,
};

export const Icon: FC<{
  icon: Icon;
  size?: IconSize;
}> = ({ icon, size = "medium" }) => {
  return <MdiIcon path={icons[icon]} size={sizes[size]} />;
};
