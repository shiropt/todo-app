import { Middleware } from "@reduxjs/toolkit";
import LogRocket from "logrocket";

export const logRocketMiddleware = (appId: string): Middleware => {
  if (appId) {
    LogRocket.init(appId);
    LogRocket.identify("todo-app", {
      name: "shiro",
    });
    return LogRocket.reduxMiddleware();
  }
  return () => (next) => (action) => next(action);
};
