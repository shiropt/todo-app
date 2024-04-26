import styled from "styled-components";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { Main } from "../../pages/main";
import { menus } from "../../../routes/navigation";

export const Dashboard = () => {
  return (
    <StyledDashboard>
      <Sidebar menus={menus} />
      <div>
        <Header />
        <Main />
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
