// src/router.tsx
import { createRouter } from "@tanstack/react-router";
import NotFound from "./components/features/not-found/page";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultNotFoundComponent: NotFound,
    defaultPreload: "intent",
  });

  return router;
}
