# Mindlet — Documentation technique

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Documentation technique complète du projet Mindlet (rapport de Master Informatique — Parcours Développement Full Stack).

## ✅ Contenu ajouté

- Page d’accueil (splash) et structure Starlight personnalisée
- Sections : Introduction, Architecture, Projet, Annexes
- Pages détaillées : backend, frontend, IA, sécurité/RGPD, tests, performances, SEO
- Intégration des schémas et captures d’écran

## 📚 Plan de documentation

### Introduction
- Présentation de Mindlet
- Notre histoire

### Architecture
- Vue d’ensemble (n-tiers + cloud)
- Backend (Laravel)
- Frontend (React Native)
- Service IA (LangChain / LangGraph)

### Projet
- Équipe & organisation
- Sécurité & RGPD
- Tests & qualité
- Performances & scalabilité

### Annexes
- État de l’art (technos & alternatives)
- Difficultés & retours d’expérience
- SEO & site web (Astro)

## 🗂️ Structure du projet

```
.
├── public/
├── src/
│   ├── assets/
│   │   ├── app-screenshots/
│   │   └── elements/
│   ├── content/
│   │   └── docs/
│   │       ├── index.mdx
│   │       ├── introduction/
│   │       ├── architecture/
│   │       ├── projet/
│   │       └── annexes/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🧭 Points d’entrée utiles

- Page d’accueil : [src/content/docs/index.mdx](src/content/docs/index.mdx)
- Sidebar Starlight : [astro.config.mjs](astro.config.mjs)
- Assets & diagrammes : [src/assets](src/assets)

## 🧞 Commandes

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installe les dépendances                         |
| `bun dev`                 | Démarre le serveur en local (`localhost:4321`)   |
| `bun build`               | Build de production dans `./dist/`               |
| `bun preview`             | Prévisualise le build                            |
| `bun astro ...`           | Commandes Astro (`astro add`, `astro check`)     |
| `bun astro -- --help`     | Aide CLI Astro                                   |

## 🔗 Liens

- Site web : https://mindlet.app
- Starlight : https://starlight.astro.build
- Astro : https://docs.astro.build
