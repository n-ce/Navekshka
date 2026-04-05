# Navekshka

A modern, responsive music application built with Solid.js, featuring an orientation-aware layout and a single-file production build.

## UI Standard

The application implements a unique orientation-based layout:

### Panel Section
- **Portrait (Mobile):** The panel is positioned at the bottom, containing a MiniPlayer and a Navigation Bar for quick access to Library, Search, and Queue.
- **Landscape:** The panel moves to the left as a side panel. It features a Navigation List, an accordion-style Library view with collection links, a Queue accordion, and a MiniPlayer at the bottom.

### Content View
- **Portrait:** A single content view that snappily switches between Library, Search, Settings, Player, List, and Queue.
- **Landscape:** Inherits a multi-screen layout. The main content view remains snappy for Library, Search, List, and Settings, while the Player view expands into a middle panel (when toggled via the MiniPlayer).

## Features
- **Responsive Proportions:** In landscape mode, the layout maintains a balanced `2:3:4` ratio between the Side Panel, Player View, and Active Content View.
- **Single-File Build:** The entire application, including assets and styles, is bundled into a single `index.html` file located in the `docs` folder for easy deployment.
- **Dynamic Viewport:** Utilizes `dvw` and `dvh` units for a robust fullscreen experience on mobile devices.
- **Browser History Support:** Full support for browser 'back' and 'forward' actions via `@solidjs/router`.

## Development

### Prerequisites
- Node.js
- npm

### Setup
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
```
The build output will be generated in the `docs/` directory as a single `index.html` file.

## Tech Stack
- [Solid.js](https://www.solidjs.com/)
- [Vite](https://vitejs.dev/)
- [Solid Router](https://github.com/solidjs/solid-router)
- [Vite Plugin SingleFile](https://github.com/richardtallent/vite-plugin-singlefile)
