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
  path: keyof typeof icons;
  size?: keyof typeof sizes;
}> = ({ path, size = "medium" }) => {
  return <MdiIcon path={icons[path]} size={sizes[size]} />;
};
