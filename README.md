# AL STUDIO

Application web mobile-first de dressing intelligent premium (React + TypeScript + Vite).

## Fonctionnalités

- Routes complètes: `/`, `/onboarding`, `/dressing`, `/dressing/add`, `/dressing/:id`, `/looks`, `/looks/:id`, `/calendar`, `/favorites`, `/profile`, `/avatar`, `/try-on`, `/beauty`, `/inspiration`, `/settings`, `/privacy`
- Onboarding en 6 écrans avec progression et persistance locale
- Dressing avec recherche, filtres, tri, ajout, détail, suppression et favoris
- Looks filtrables, favoris, planification calendrier
- Calendrier mensuel interactif avec persistance
- Profil, avatar/scan 3D démo, try-on démo, beauty et inspiration interactifs
- Paramètres persistés et page privacy avec suppression des données locales

## Stack

- React 19
- TypeScript
- Vite
- React Router
- Lucide React
- CSS tokens + composants UI réutilisables
- LocalStorage (prototype, sans backend)

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

## Build / Preview

```bash
npm run build
npm run preview
```

## Variables d'environnement

Copier `.env.example` en `.env` si nécessaire:

```bash
VITE_WEATHER_API_KEY=
```

> `weatherService.ts` est mocké (26°, Ensoleillé) dans cette version.

## Architecture

- `src/components` : design system et composants de navigation
- `src/pages` : pages routées
- `src/layouts` : layout global
- `src/data` : mocks réalistes vêtements/looks
- `src/services` : storage + services mockés (weather/reco/try-on/pinterest)
- `src/store` : AppContext global persisté
- `src/styles` : tokens et styles globaux
- `src/types` : types métier

## Déploiement

### Vercel
1. Importer le repository
2. Build command: `npm run build`
3. Output directory: `dist`

### Netlify
1. New site from Git
2. Build command: `npm run build`
3. Publish directory: `dist`

## Limitations simulées (prototype)

- Scan 3D et try-on: démonstrations UI sans traitement caméra/IA réel
- Pinterest: simulation d’intégration OAuth
- Météo: mock local sans appel API

## Roadmap

- Intégration backend sécurisé
- OAuth Pinterest réel
- Try-on IA et avatar 3D avancé
- Recommandations enrichies par historique d’usage
