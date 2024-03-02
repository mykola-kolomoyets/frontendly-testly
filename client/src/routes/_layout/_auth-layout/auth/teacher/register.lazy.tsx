import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(
  "/_layout/_auth-layout/auth/teacher/register"
)({
  component: () => (
    <div>Hello /_layout/_auth-layout/auth/teacher/register!</div>
  ),
});
