import { Redirect, Route, Switch } from "wouter";
import { paths } from "@/routes/path";
import { FC } from "react";
import { Todos } from "@/components/pages/Todos";
import { AppShell } from "@mantine/core";
import { Home } from "@/components/pages/Home";

export const Main: FC = () => {
  return (
    <Route>
      <Switch>
        <AppShell.Main>
          <Route path={paths.home}>
            <Home />
          </Route>
          <Route path={paths.todos}>
            <Todos />
          </Route>
          {/* <Route path={paths.calendar}>
            <div>calendar</div>
          </Route>
          <Route path={paths.stats}>
            <div>stats</div>
          </Route> */}
          <Route path="*">
            <Redirect to={paths.home} />
          </Route>
        </AppShell.Main>
      </Switch>
    </Route>
  );
};
