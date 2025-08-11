import { sentryOnBuildEnd } from "@sentry/react-router";

/** @type {import('@react-router/dev/config').Config} */
export default {
  ssr: true,
  buildEnd: async ({ viteConfig, reactRouterConfig, buildManifest }) => {
    await sentryOnBuildEnd({ viteConfig, reactRouterConfig, buildManifest });
  },
};
