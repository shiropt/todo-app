import styled from "styled-components";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { Todos } from "../../pages/Todos";

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
      <div>
        <Header className="header" />
        <Todos />
      </div>
    </StyledDashboard>
  );
};

const StyledDashboard = styled.div`
  display: flex;
  > div:nth-child(1) {
    position: sticky;
    top: 0;
    left: 0;
  }
  > div:nth-child(2) {
    width: 100%;
    > header {
      position: sticky;
      top: 0;
    }
    > div {
      padding: 24px;
    }
  }
`;
