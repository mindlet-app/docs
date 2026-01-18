// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import mermaid from "astro-mermaid";
import cloudflare from "@astrojs/cloudflare";
import starlightImageZoomPlugin from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mermaid({
      theme: "forest",
      autoTheme: true,
    }),
    starlight({
      title: "Mindlet - Documentation",
      logo: {
        src: "./src/assets/logo.png",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/mindlet-app",
        },
        { icon: "rocket", label: "Site web", href: "https://www.mindlet.app" },
      ],
      sidebar: [
        {
          label: "📖 Introduction",
          items: [
            {
              label: "Présentation de Mindlet",
              slug: "introduction/presentation",
            },
            { label: "Notre histoire", slug: "introduction/histoire" },
          ],
        },
        {
          label: "🏗️ Architecture",
          items: [
            { label: "Vue d'ensemble", slug: "architecture/overview" },
            { label: "Backend - API Laravel", slug: "architecture/backend" },
            { label: "Frontend - React Native", slug: "architecture/frontend" },
            { label: "Service IA", slug: "architecture/service-ia" },
            {
              label: "Pipelines de traitement",
              slug: "architecture/pipelines-traitement",
            },
            {
              label: "Graphes LangGraph",
              slug: "architecture/graphes-langgraph",
            },
            {
              label: "Génération de cartes",
              slug: "architecture/generation-cartes",
            },
          ],
        },
        {
          label: "📋 Projet",
          items: [
            { label: "Équipe et organisation", slug: "projet/equipe" },
            { label: "Sécurité et RGPD", slug: "projet/securite" },
            { label: "Tests et qualité", slug: "projet/tests" },
            {
              label: "Performances et scalabilité",
              slug: "projet/performances",
            },
          ],
        },
        {
          label: "📚 Annexes",
          items: [
            { label: "État de l'art", slug: "annexes/etat-art" },
            { label: "Difficultés et retours", slug: "annexes/difficultes" },
            { label: "SEO et site web", slug: "annexes/seo" },
          ],
        },
      ],
      customCss: [],
      plugins: [starlightImageZoomPlugin()],
    }),
  ],

  adapter: cloudflare(),
});
