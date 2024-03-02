import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import NotFound from "../modules/NotFound";
import s from "./__root.module.css";

export const Route = createRootRoute({
  component() {
    return (
      <main className={s.wrap}>
        <Outlet />
        <TanStackRouterDevtools />
      </main>
    );
  },
  notFoundComponent: NotFound,
});
