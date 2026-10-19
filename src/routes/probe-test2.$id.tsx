import { createFileRoute, notFound } from "@tanstack/react-router";

const DATA = [{ slug: "a", label: "A" }];

export const Route = createFileRoute("/probe-test2/$id")({
  loader: ({ params }) => {
    const item = DATA.find((x) => x.slug === params.id);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ params }) => ({ meta: [{ title: params.id }] }),
  component: Probe2,
});

function Probe2() {
  const { item } = Route.useLoaderData();
  return <div>{item.label}</div>;
}
