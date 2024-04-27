import { Route, Switch } from "wouter";
import { paths } from "@/routes/path";
import { FC } from "react";
import { Todos } from "@/components/pages/Todos";

export const Main: FC = () => {
  return (
    <Route>
      <Switch>
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
      </Switch>
    </Route>
  );
};
