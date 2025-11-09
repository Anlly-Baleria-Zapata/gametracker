import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BibliotecaJuegos from './components/BibliotecaJuegos';
import TarjetaJuego from './components/TarjetaJuego';
import FormularioJuego from './components/FormularioJuego';
import ListaResenas from './components/ListaResenas';
import FormularioResena from './components/FormularioResena';
import EstadisticasPersonales from './components/EstadisticasPersonales';
import GameDetails from './pages/GameDetails';
import Wishlist from './pages/Wishlist';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BibliotecaJuegos />} />
        <Route path="/game/:id" element={<GameDetails />} />
        <Route path="/add-game" element={<FormularioJuego />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/reviews" element={<ListaResenas />} />
        <Route path="/edit-review/:id" element={<FormularioResena />} />
        <Route path="/statistics" element={<EstadisticasPersonales />} />
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
      </Routes>
    </Router>
  );
};

export default App;