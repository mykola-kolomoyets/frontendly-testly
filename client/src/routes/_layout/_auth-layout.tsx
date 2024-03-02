import {
  Link,
  Outlet,
  createFileRoute,
  useRouterState,
} from "@tanstack/react-router";
import {
  Root as TabsRoot,
  List as TabsList,
  Trigger as TabsTrigger,
} from "@radix-ui/react-tabs";
import s from "./_auth-layout.module.css";
import clsx from "clsx";

export const Route = createFileRoute("/_layout/_auth-layout")({
  component: AuthLayout,
});

function AuthLayout() {
  const { location } = useRouterState();

  const isLogin = location.pathname.includes("login");
  const isTeacher = location.pathname.includes("teacher");

  return (
    <div className={s.wrap}>
      <div
        className={clsx(s.left, {
          [s.teacher]: isTeacher,
        })}
      ></div>
      <section className={s.right}>
        <div className={s.content}>
          <h1>{isLogin ? "Увійти" : "Зареєструватися"}</h1>
          <div className={s["view-switcher-wrap"]}>
            <TabsRoot value={isTeacher ? "teacher" : "student"}>
              <TabsList className={s.tabs}>
                <TabsTrigger
                  className={clsx(s["tab-item"], "link", "focus-primary")}
                  value="teacher"
                  asChild
                >
                  <Link
                    to={
                      isLogin ? "/auth/teacher/login" : "/auth/teacher/register"
                    }
                  >
                    Вчитель
                  </Link>
                </TabsTrigger>
                <TabsTrigger
                  className={clsx(s["tab-item"], "link", "focus-primary")}
                  value="student"
                  asChild
                >
                  <Link
                    to={
                      isLogin ? "/auth/student/login" : "/auth/student/register"
                    }
                  >
                    Учень
                  </Link>
                </TabsTrigger>
              </TabsList>
            </TabsRoot>
          </div>
          <div className={s["outlet-wrap"]}>
            <Outlet />
          </div>
          <footer>
            <Link
              className={clsx("link", "focus-primary")}
              to={
                isLogin
                  ? `/auth/${isTeacher ? "teacher" : "student"}/register`
                  : `/auth/${isTeacher ? "teacher" : "student"}/login`
              }
            >
              {isLogin ? "Зареєструватись" : "Вже є аккаунт? Увійти"}
            </Link>
          </footer>
        </div>
      </section>
    </div>
  );
}
