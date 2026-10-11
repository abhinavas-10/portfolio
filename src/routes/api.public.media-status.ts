import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/public/media-status")({
  server: {
    handlers: {
      GET: async ({ request }) => {
          try {
          const mediaUrl = new URL("/assets/hero-video.mp4", request.url);
          const response = await fetch(mediaUrl, { method: "HEAD" });
            const slugs = ["nova", "phishield", "smartschedule"] as const;
            const projectImages = Object.fromEntries(
              await Promise.all(slugs.map(async (slug) => {
                const imageResponse = await fetch(new URL(`/projects/${slug}.png`, request.url), { method: "HEAD" });
                return [slug, imageResponse.ok && Boolean(imageResponse.headers.get("content-type")?.startsWith("image/"))];
              })),
            );
          return Response.json({
            portfolioReel: response.ok && Boolean(response.headers.get("content-type")?.startsWith("video/")),
              projectImages,
          });
        } catch {
            return Response.json({ portfolioReel: false, projectImages: {} });
        }
      },
    },
  },
});