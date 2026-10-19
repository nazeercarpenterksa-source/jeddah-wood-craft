import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/probe-test")({
  loader: () => ({ hello: "world" }),
  component: Probe,
});

function Probe() {
  const { hello } = Route.useLoaderData();
  return <div>{hello}</div>;
}
