import { createFileRoute, notFound } from "@tanstack/react-router";

const DATA = [{ slug: "a", label: "A" }];

export const Route = createFileRoute("/probe-test/$id")({
  head: ({ params }) => ({ meta: [{ title: params.id }] }),
  loader: ({ params }) => {
    const item = DATA.find((x) => x.slug === params.id);
    if (!item) throw notFound();
    return { item };
  },
  component: Probe,
});

function Probe() {
  const { item } = Route.useLoaderData();
  return <div>{item.label}</div>;
}
