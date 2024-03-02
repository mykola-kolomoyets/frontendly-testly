import { Navigate, createFileRoute } from "@tanstack/react-router";
import {
  InvalidOrganizationIdError,
  ROUTE_LOADER_RESPONSE_CODE,
} from "@/constants";
import AuthLayout from "@/layouts/AuthLayout";
import { z } from "zod";

const authLayoutSearchParamsSchema = z.object({
  organization_id: z.coerce.string().default(""),
});

export const Route = createFileRoute("/_layout/_auth-layout")({
  component: AuthLayout,
  validateSearch(search: Record<string, string>) {
    return authLayoutSearchParamsSchema.parse(search);
  },
  loaderDeps({ search }) {
    return {
      search,
    };
  },
  loader({ deps: { search } }) {
    if (!search.organization_id) {
      throw new InvalidOrganizationIdError();
    }

    return {
      result: true,
      code: ROUTE_LOADER_RESPONSE_CODE.success,
    };
  },
  errorComponent({ error }) {
    if (error instanceof InvalidOrganizationIdError) {
      return (
        <Navigate
          to="/"
          search={{
            code: ROUTE_LOADER_RESPONSE_CODE.invalidOrganizationId,
          }}
        />
      );
    }
  },
});
