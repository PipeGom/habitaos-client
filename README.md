# HabitaOS — Client

> Frontend del sistema de gestión de arrendamientos HabitaOS. Permite a propietarios hacer seguimiento de unidades, inquilinos, contratos y pagos desde un dashboard centralizado.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss)

---

## ¿Qué es HabitaOS?

Sistema web para propietarios que administran múltiples unidades en arriendo (habitaciones, apartamentos y locales). Centraliza la operación en un solo lugar: quién vive en cada unidad, cuánto debe, qué pagó y cuándo vence el próximo cobro.

El backend de este proyecto está en: [habitaos-api](https://github.com/tu-usuario/habitaos-api)

---

## Stack

| Capa | Tecnología |
|---|---|
| Framework | React 19 + TypeScript 5.9 |
| Build | Vite 8 |
| Estilos | Tailwind CSS v4 |
| Componentes | shadcn/ui |
| Routing | React Router v7 |
| Server state | TanStack Query v5 |
| Gráficas | Recharts v3 |
| Íconos | Lucide React |

---

## Arquitectura

Estructura por features con separación estricta de responsabilidades.

```
src/
├── app/                  # Arranque: main, Router, Providers
├── features/             # Módulos de negocio
│   └── [feature]/
│       ├── components/   # UI específica de la feature
│       ├── hooks/        # Lógica de datos con useQuery
│       ├── api/          # Llamadas a la API
│       ├── types.ts      # Tipos de la feature
│       └── index.ts      # Barrel export — única interfaz pública
├── pages/                # Una página por ruta, solo compone features
└── shared/
    ├── components/
    │   ├── ui/           # Primitivos de shadcn (no se editan)
    │   ├── layout/       # AppSidebar, Topbar, PageWrapper
    │   └── common/       # Componentes reutilizables entre features
    ├── lib/              # queryClient, axios
    ├── utils/            # formatCurrency, formatDate, cn
    ├── constants/        # Routes, QueryKeys
    └── types/            # Tipos de dominio y de API
```

### Decisiones clave

**Feature-based con barrel exports** — cada feature expone solo lo necesario a través de su `index.ts`. Ningún archivo externo importa directamente desde el interior de una feature.

**shadcn/ui como capa de primitivos** — los componentes de shadcn viven en `shared/components/ui/` y nunca se editan directamente. La lógica y estilos propios se construyen encima en `layout/` y `common/`.

**Server state con TanStack Query** — toda la comunicación con la API pasa por `useQuery` y `useMutation`. Cuando se conecte el backend real, solo cambia el `queryFn` de cada hook, los componentes no cambian.

---

## Instalación

```bash
git clone https://github.com/tu-usuario/habitaos-client.git
cd habitaos-client
npm install
npm run dev
```

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
---

## Estado del proyecto

- [x] Dashboard con métricas, gráficas y actividad reciente
- [ ] CRUD de inquilinos
- [ ] CRUD de unidades
- [ ] Gestión de arrendamientos
- [ ] Registro de pagos y abonos
- [ ] Reportes y analítica
- [ ] Autenticación
- [ ] Multi-tenant