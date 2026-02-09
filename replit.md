# EXPAT'SNEST - Replit Agent Guide

## Overview

EXPAT'SNEST is a premium marketing and service website for an expatriate and diplomatic onboarding company operating in Nigeria. The application provides information about relocation services, cultural integration, security logistics, and concierge support for diplomats, international professionals, and global organizations arriving in Nigeria. It includes a contact/inquiry form that submits data to a PostgreSQL database.

The app is a full-stack TypeScript project with a React frontend (Vite) and an Express backend, using Drizzle ORM with PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend (`client/`)
- **Framework**: React 18 with TypeScript
- **Bundler**: Vite with HMR support
- **Routing**: Wouter (lightweight client-side router)
- **Styling**: Tailwind CSS with CSS variables for theming (diplomatic green + warm gold color scheme)
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives — all components live in `client/src/components/ui/`
- **Fonts**: Playfair Display (display/headings) and DM Sans (body text), loaded via Google Fonts
- **Animations**: Framer Motion for page transitions and scroll animations
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation via `@hookform/resolvers`
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

**Pages**: Home, About, Services, Onboarding (timeline), Contact (with inquiry form), and 404 Not Found.

**Layout**: Persistent Navbar (fixed, transparent-to-solid on scroll) + Footer wrapping all pages via `Layout` component. Pages scroll to top on route change.

### Backend (`server/`)
- **Framework**: Express 5 on Node.js
- **Language**: TypeScript, executed via `tsx`
- **API Pattern**: REST endpoints defined in `server/routes.ts`, with route definitions shared via `shared/routes.ts`
- **Validation**: Zod schemas shared between client and server (defined in `shared/schema.ts`, referenced in `shared/routes.ts`)
- **Storage Layer**: `server/storage.ts` provides a `DatabaseStorage` class implementing `IStorage` interface — this abstraction allows swapping implementations
- **Dev Server**: Vite dev server is integrated as middleware in development mode (`server/vite.ts`)
- **Production**: Static files served from `dist/public` via `server/static.ts`

### Shared Code (`shared/`)
- **`schema.ts`**: Drizzle ORM table definitions and Zod insert schemas. Currently has one table: `inquiries` (id, name, email, subject, message, createdAt)
- **`routes.ts`**: API route contract definitions with paths, methods, input schemas, and response schemas — used by both client and server for type safety

### Database
- **ORM**: Drizzle ORM
- **Database**: PostgreSQL (required — `DATABASE_URL` environment variable must be set)
- **Connection**: `node-postgres` (pg) Pool in `server/db.ts`
- **Migrations**: Drizzle Kit with `drizzle-kit push` command (`npm run db:push`)
- **Session Store**: `connect-pg-simple` is listed as a dependency (for future session support)
- **Schema location**: `shared/schema.ts`
- **Migration output**: `./migrations` directory

### Build Process (`script/build.ts`)
- Client: Built with Vite, output to `dist/public`
- Server: Built with esbuild, output to `dist/index.cjs`
- Server dependencies are selectively bundled (allowlist pattern) to reduce cold start times
- Production start: `node dist/index.cjs`

### Key Design Decisions

1. **Shared validation schemas**: Zod schemas in `shared/` are used by both frontend forms and backend route handlers, ensuring consistent validation.

2. **API contract pattern**: `shared/routes.ts` defines the full API contract (method, path, input/output schemas), making the API self-documenting and type-safe across the stack.

3. **Storage interface abstraction**: The `IStorage` interface in `server/storage.ts` decouples business logic from database implementation.

4. **Component library**: shadcn/ui components are copied into the project (not imported from a package), allowing full customization. The `components.json` file configures the shadcn CLI for adding new components.

## External Dependencies

- **PostgreSQL**: Required database. Connection via `DATABASE_URL` environment variable. Used for inquiry storage and potentially session management.
- **Google Fonts**: Playfair Display and DM Sans loaded via CDN in `index.css` and `index.html`.
- **Unsplash Images**: Stock images referenced directly via Unsplash URLs throughout page components (no local image assets).
- **Replit Plugins**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, and `@replit/vite-plugin-dev-banner` are conditionally loaded in development on Replit.