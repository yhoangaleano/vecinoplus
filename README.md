# Vecino+

Marketplace hiperlocal para conjuntos residenciales en Colombia. Conecta residentes con prestadores de servicios y comercios verificados dentro de su comunidad.

## Stack

| | |
|---|---|
| **Runtime** | Node.js 18+ |
| **Bundler** | Vite 5 |
| **UI** | React 18 + TypeScript |
| **Routing** | React Router 6 |
| **State** | Zustand 5 |
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
├── components/   # Componentes reutilizables (nav, cards, layout, phone shell)
├── data/         # Datos mock tipados
├── lib/          # Providers y utilidades (theme)
├── screens/      # Vistas por ruta
├── stores/       # Zustand stores (user, services, chat)
└── styles/       # Variables CSS y estilos globales
```

## Pantallas

| Ruta | Descripción | Auth |
|---|---|---|
| `/` | Galería de prototipos | No |
| `/login` | Inicio de sesión | No |
| `/registro` | Crear cuenta | No |
| `/feed` | Feed principal de servicios | Sí |
| `/servicio/:id` | Detalle de proveedor | Sí |
| `/publicar` | Alta de servicio | Sí |
| `/comercio` | Perfil de comercio aliado | Sí |
| `/social` | Comunidad y eventos | Sí |
| `/perfil` | Cuenta y plan Premium | Sí |
| `/mensajes` | Bandeja de mensajes | Sí |
| `/chat/:id` | Conversación individual | Sí |

## Roadmap

- ~~Autenticación y verificación de residencia~~ (UI de login/registro implementada)
- Integración backend real (actualmente Zustand + mock data)
- Backend transaccional con integración Wompi / ePayco
- Panel de administración para conjuntos y comercios
- Apps nativas (Flutter)

---

© 2026 Vecino+. Todos los derechos reservados.
