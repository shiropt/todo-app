import MdiIcon from "@mdi/react";
import { mdiHomeOutline } from "@mdi/js";
import { mdiCheckboxMarkedCircleAutoOutline } from "@mdi/js";
import { mdiFileTreeOutline } from "@mdi/js";
import { mdiCalendarTextOutline } from "@mdi/js";
import { mdiChartBellCurveCumulative } from "@mdi/js";
import { mdiBellOutline } from "@mdi/js";
import { mdiTrashCanOutline } from "@mdi/js";
import { mdiNoteEditOutline } from "@mdi/js";
import { mdiMagnify } from "@mdi/js";
import { FC } from "react";

export type IconPath = keyof typeof icons;
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
};

const sizes = {
  medium: 0.8,
  large: 1,
};

export const Icon: FC<{
  path: IconPath;
  size?: IconSize;
}> = ({ path, size = "medium" }) => {
  return <MdiIcon path={icons[path]} size={sizes[size]} />;
};
