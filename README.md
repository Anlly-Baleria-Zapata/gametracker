# Stitch Game Library Dashboard

## Overview
The Stitch Game Library Dashboard is a React.js web application designed to manage and display a collection of games. It includes features for viewing games, adding/editing games, writing reviews, and viewing personal statistics.

## Project Structure
```
stitch-game-library-dashboard
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── README.md
└── src
    ├── main.jsx
    ├── App.jsx
    ├── assets
    │   └── themes
    │       ├── game_library_dashboard_code.html
    │       ├── game_details_screen_code.html
    │       ├── personal_statistics_dashboard_code.html
    │       ├── wishlist_screen_code.html
    │       └── add_edit_game_form_code.html
    ├── components
    │   ├── BibliotecaJuegos.jsx
    │   ├── TarjetaJuego.jsx
    │   ├── FormularioJuego.jsx
    │   ├── ListaResenas.jsx
    │   ├── FormularioResena.jsx
    │   └── EstadisticasPersonales.jsx
    ├── pages
    │   ├── GameDetails.jsx
    │   └── Wishlist.jsx
    ├── hooks
    │   └── useGames.js
    ├── services
    │   └── api.js
    └── styles
        ├── variables.css
        └── global.css
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd stitch-game-library-dashboard
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm run dev
```
The application will be available at `http://localhost:3000`.

### Building for Production
To create a production build, run:
```
npm run build
```

## Components
- **BibliotecaJuegos**: Main collection view of games.
- **TarjetaJuego**: Individual game card component.
- **FormularioJuego**: Component for adding or editing games.
- **ListaResenas**: Displays the reviews view.
- **FormularioResena**: Component for writing or editing reviews.
- **EstadisticasPersonales**: Displays the personal statistics dashboard.

## Themes
The application includes various graphic themes located in the `src/assets/themes` directory, which can be used to style different components of the application.

## License
This project is licensed under the MIT License. See the LICENSE file for details.