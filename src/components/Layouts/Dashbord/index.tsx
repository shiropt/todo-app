import styled from "styled-components";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

export const Dashboard = () => {
  return (
    <StyledDashboard>
      <Sidebar
        className="sidebar"
        menus={[
          { title: "Home", to: "/home", path: "mdiHomeOutline" },
          { title: "Todos", to: "/todos", path: "mdiFileTreeOutline" },
          {
            title: "Calendar",
            to: "/calendar",
            path: "mdiCalendarTextOutline",
          },
          { title: "Stats", to: "/stats", path: "mdiChartBellCurveCumulative" },
        ]}
      />
      <Header className="header" />
    </StyledDashboard>
  );
};

const StyledDashboard = styled.div`
  display: flex;
`;
