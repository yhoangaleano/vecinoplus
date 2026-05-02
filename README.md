# Vecino+

> Marketplace hiperlocal verificado para conjuntos residenciales en Colombia.

Prototipo funcional de alta complejidad para el Diplomado en Negocios. Construido con Vite + React 18 + TypeScript + TailwindCSS, listo para desplegar en Vercel.

## Stack

- **Vite 5** — bundler rápido con HMR
- **React 18** + **TypeScript** — UI con tipado estricto
- **React Router 6** — navegación entre las 7 pantallas
- **TailwindCSS 3** — utility-first con paleta personalizada
- **Sin backend** — todos los datos son mock (TypeScript tipado)

## Diseño

- **Paleta:** Indigo profundo (`#1E1B4B`) + Lime vibrante (`#84CC16`). Inspirada en Linear, Cash App y Discord — tech con energía de comunidad.
- **Tipografía:** Bricolage Grotesque (display, variable opsz) + Inter Tight (body).
- **Modo claro y oscuro** con persistencia en localStorage. Detecta preferencia del sistema operativo en la primera carga.

## Pantallas (7)

1. **Onboarding · Verificación** — selección de conjunto, torre y apartamento (`/onboarding`)
2. **Feed principal** — servicios y productos cerca de tu torre y conjunto (`/feed`)
3. **Detalle de servicio** — perfil de un proveedor vecino (`/servicio/:id`)
4. **Publicar servicio** — flujo del residente prestador (`/publicar`)
5. **Comercio verificado** — perfil de un comercio externo aliado (`/comercio`)
6. **Comunidad social** — grupos por intereses y eventos (`/social`)
7. **Perfil de usuario** — gestión de cuenta y plan Premium (`/perfil`)

La ruta `/` muestra todas las pantallas en una galería interactiva. Tocar cualquiera abre su vista individual.

---

## Cómo correrlo localmente

Requiere Node.js 18+.

```bash
npm install
npm run dev
```

La app se abre en `http://localhost:5173`.

## Cómo desplegarlo

### Opción 1 — Vercel (recomendado, 3 pasos, ~3 minutos)

1. **Sube el repo a GitHub:**

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Vecino+ prototype"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/vecino-plus.git
   git push -u origin main
   ```

2. **Conecta a Vercel:**
   - Entra a [vercel.com](https://vercel.com) y haz login con GitHub.
   - Click en **Add New** → **Project**.
   - Selecciona el repo `vecino-plus`.
   - Vercel detecta automáticamente que es Vite. **No cambies nada.**
   - Click en **Deploy**.

3. **Listo.** En 30-60 segundos tendrás una URL pública tipo `https://vecino-plus-xxxx.vercel.app` lista para compartir.

Cada `git push` posterior dispara un nuevo deploy automático.

### Opción 2 — Vercel CLI (si prefieres terminal)

```bash
npm i -g vercel
vercel
```

Sigue los prompts. La primera vez te pedirá login.

### Opción 3 — Otro hosting estático

Genera el build y sube la carpeta `dist/` a Netlify, Cloudflare Pages, GitHub Pages, etc.

```bash
npm run build
# La carpeta dist/ contiene los archivos listos para servir
```

---

## Estructura del proyecto

```
vecino-plus/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BottomNav.tsx       # Navegación inferior
│   │   ├── PhoneShell.tsx      # Marco de teléfono con barra de estado
│   │   ├── ServiceCard.tsx     # Tarjeta reusable de servicio
│   │   ├── SingleView.tsx      # Wrapper para vistas individuales
│   │   ├── ThemeToggle.tsx     # Botón light/dark
│   │   └── Topbar.tsx          # Barra superior
│   ├── data/
│   │   └── mock.ts             # Datos de prueba tipados
│   ├── lib/
│   │   └── theme.tsx           # Context provider de tema
│   ├── screens/
│   │   ├── ShowcaseScreen.tsx     # Galería principal (ruta /)
│   │   ├── OnboardingScreen.tsx   # Pantalla 01
│   │   ├── FeedScreen.tsx         # Pantalla 02
│   │   ├── ServiceDetailScreen.tsx # Pantalla 03
│   │   ├── CreateScreen.tsx       # Pantalla 04
│   │   ├── BusinessScreen.tsx     # Pantalla 05
│   │   ├── SocialScreen.tsx       # Pantalla 06
│   │   └── ProfileScreen.tsx      # Pantalla 07
│   ├── styles/
│   │   └── index.css           # Variables CSS + estilos globales
│   ├── App.tsx                 # Router y providers
│   └── main.tsx                # Entry point
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json                 # SPA rewrites para Vercel
└── .gitignore
```

## Notas técnicas

- **Sin backend:** los datos viven en `src/data/mock.ts`. Para conectar a una API real, reemplaza esos imports por llamadas a `fetch`.
- **Theming:** el sistema de variables CSS en `src/styles/index.css` permite agregar más temas (ej: alto contraste) sin tocar componentes.
- **SVG inline:** todos los íconos están como SVG inline para evitar dependencias adicionales y permitir herencia de color via `currentColor`.
- **Sin localStorage en componentes individuales** salvo el theme — todos los estados son in-memory.

## Roadmap (post-prototipo)

- [ ] Capa de autenticación y verificación real (Truora, Olimpia IT)
- [ ] Backend en Node.js o Spring Boot con AWS
- [ ] Integración Wompi/ePayco para take rate transaccional
- [ ] Apps nativas en Flutter (iOS/Android)
- [ ] Panel web para administradores y comercios pagantes

---

## Licencia

Prototipo académico. Todos los derechos reservados © 2026.
