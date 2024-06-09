import { Route, Switch } from "wouter";
import { paths } from "@/routes/path";
import { FC } from "react";
import { Todos } from "@/components/pages/Todos";
import { AppShell } from "@mantine/core";

export const Main: FC = () => {
  return (
    <Route>
      <Switch>
        <AppShell.Main>
          <Route path={paths.home}>
            <div>home</div>
          </Route>
          <Route path={paths.todos}>
            <Todos />
          </Route>
          <Route path={paths.calendar}>
            <div>calendar</div>
          </Route>
          <Route path={paths.stats}>
            <div>stats</div>
          </Route>
          <div>404 not found</div>
        </AppShell.Main>
      </Switch>
    </Route>
  );
};
