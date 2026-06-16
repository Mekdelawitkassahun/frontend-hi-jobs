# Hi JOB — Frontend

Mobile-first Next.js frontend based on the Figma designs for Hi JOB.

## Breakpoints

| Breakpoint | Width  | Layout |
|------------|--------|--------|
| Mobile     | 375px  | Single column, bottom nav, features + footer below empty state |
| Tablet     | 860px  | Profile card + empty state (2 cols), features banner below |
| Desktop    | 1440px | Full header, 3-column grid with promotions sidebar |
| Wide       | 1920px | Same as desktop with expanded padding (`max-w-[1920px]`) |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
├── app/              # Next.js App Router pages
├── components/
│   ├── layout/       # Header, Footer, BottomNav
│   ├── profile/      # ProfileCard
│   ├── promotions/   # PromoBanner, TalentCard, Sidebar
│   ├── search/       # EmptyState
│   └── ui/           # Logo, SearchBar, ProfileProgress
└── lib/              # Data & utilities
```

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- Lucide React icons
