import { paths } from "@/routes/path";

export const menus = [
  { title: "Home", to: `${paths.home}`, icon: "mdiHomeOutline" },
  { title: "Todos", to: `${paths.todos}`, icon: "mdiFileTreeOutline" },
  {
    title: "Calendar",
    to: `${paths.calendar}`,
    icon: "mdiCalendarTextOutline",
  },
  {
    title: "Stats",
    to: `${paths.stats}`,
    icon: "mdiChartBellCurveCumulative",
  },
] as const;

export type Menus = typeof menus;
