import type { RegisteredRouter } from "@tanstack/react-router";
import type { RouteById } from "@tanstack/router-core";
import { Route as ServiceRoute } from "@/routes/services.$slug";

type FromTree = RouteById<RegisteredRouter["routeTree"], "/services/$slug">["types"]["loaderData"];
type FromRoute = ReturnType<typeof ServiceRoute.useLoaderData>;

export const a: number = null as unknown as FromTree;
export const b: number = null as unknown as FromRoute;
