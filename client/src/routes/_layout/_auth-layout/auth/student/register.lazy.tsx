import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(
  "/_layout/_auth-layout/auth/student/register"
)({
  component: () => (
    <div>Hello /_layout/_auth-layout/auth/student/register!</div>
  ),
});
