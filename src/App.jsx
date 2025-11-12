import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout";
import BibliotecaJuegos from "./components/BibliotecaJuegos";
import TarjetaJuego from "./components/TarjetaJuego";
import FormularioJuego from "./components/FormularioJuego";
import ListaResenas from "./components/ListaResenas";
import FormularioResena from "./components/FormularioResena";
import EstadisticasPersonales from "./components/EstadisticasPersonales";
import GameDetails from "./pages/GameDetails";
import Wishlist from "./pages/Wishlist";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas dentro del Layout (mantiene barra lateral fija) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/biblioteca" />} />
          <Route path="biblioteca" element={<BibliotecaJuegos />} />
          <Route path="add-game" element={<FormularioJuego />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="reviews" element={<ListaResenas />} />
          <Route path="edit-review/:id" element={<FormularioResena />} />
          <Route path="statistics" element={<EstadisticasPersonales />} />
          <Route path="game/:id" element={<GameDetails />} />
        </Route>

        {/* Página de error */}
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
