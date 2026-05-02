# Vecino+

Marketplace hiperlocal para conjuntos residenciales en Colombia. Conecta residentes con prestadores de servicios y comercios verificados dentro de su comunidad.

## Stack

| | |
|---|---|
| **Runtime** | Node.js 18+ |
| **Bundler** | Vite 5 |
| **UI** | React 18 + TypeScript |
| **Routing** | React Router 6 |
| **Estilos** | TailwindCSS 3 |

## Desarrollo local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # genera dist/
npm run preview # sirve el build localmente
```

## Estructura

```
src/
├── components/   # Componentes reutilizables (nav, cards, layout)
├── data/         # Datos mock tipados
├── lib/          # Providers y utilidades (theme)
├── screens/      # Vistas por ruta
└── styles/       # Variables CSS y estilos globales
```

## Pantallas

| Ruta | Descripción |
|---|---|
| `/` | Galería de prototipos |
| `/onboarding` | Verificación de residencia |
| `/feed` | Feed principal de servicios |
| `/servicio/:id` | Detalle de proveedor |
| `/publicar` | Alta de servicio |
| `/comercio` | Perfil de comercio aliado |
| `/social` | Comunidad y eventos |
| `/perfil` | Cuenta y plan Premium |

## Roadmap

- Autenticación y verificación de residencia (Truora)
- Backend transaccional con integración Wompi / ePayco
- Panel de administración para conjuntos y comercios
- Apps nativas (Flutter)

---

© 2026 Vecino+. Todos los derechos reservados.
