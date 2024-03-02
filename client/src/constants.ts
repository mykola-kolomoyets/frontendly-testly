export const ROUTE_LOADER_RESPONSE_CODE = {
  success: "success",
  notFound: "not-found",
  invalidOrganizationId: "invalid-organization-id",
} as const;

export class InvalidOrganizationIdError extends Error {
  constructor() {
    super("Invalid organization id");
  }
}
