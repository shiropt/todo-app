import styled from "styled-components";
import { Header } from "@/components/layouts/Header";
import { Sidebar } from "@/components/layouts/Sidebar";
import { Main } from "@/components/pages/main";
import { menus } from "@/routes/navigation";
import { FC } from "react";

export const Dashboard: FC = () => {
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
