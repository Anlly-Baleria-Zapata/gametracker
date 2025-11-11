import React, { useState, useMemo } from 'react';
import TarjetaJuego from './TarjetaJuego';
import useGames from '../hooks/useGames';
import { Link } from 'react-router-dom';
import '../styles/BibliotecaJuegos.css';
import { FaGamepad, FaListAlt, FaPenFancy, FaPlusSquare, FaChartPie } from 'react-icons/fa'; // 🎨 Íconos

const BibliotecaJuegos = () => {
  const { games } = useGames();
  const [search, setSearch] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    genero: '',
    plataforma: '',
    añoLanzamiento: '',
    desarrollador: '',
    completado: ''
  });

  // Listas únicas
  const generos = useMemo(() => [...new Set(games.map(g => g.genero).filter(Boolean))], [games]);
  const plataformas = useMemo(() => [...new Set(games.map(g => g.plataforma).filter(Boolean))], [games]);
  const años = useMemo(() => [...new Set(games.map(g => g.añoLanzamiento).filter(Boolean))].sort((a, b) => b - a), [games]);
  const desarrolladores = useMemo(() => [...new Set(games.map(g => g.desarrollador).filter(Boolean))], [games]);

  // Filtro
  const filteredGames = games.filter((juego) => {
    const matchesSearch = juego.titulo.toLowerCase().includes(search.toLowerCase());
    const matchesGenero = filters.genero ? juego.genero === filters.genero : true;
    const matchesPlataforma = filters.plataforma ? juego.plataforma === filters.plataforma : true;
    const matchesAño = filters.añoLanzamiento ? juego.añoLanzamiento === Number(filters.añoLanzamiento) : true;
    const matchesDesarrollador = filters.desarrollador ? juego.desarrollador === filters.desarrollador : true;
    const matchesCompletado =
      filters.completado === ''
        ? true
        : filters.completado === 'true'
        ? juego.completado
        : !juego.completado;

    return (
      matchesSearch &&
      matchesGenero &&
      matchesPlataforma &&
      matchesAño &&
      matchesDesarrollador &&
      matchesCompletado
    );
  });

  return (
    <div className="layout-container">
      {/* === BARRA LATERAL === */}
      <aside className="sidebar">
        <h2 className="sidebar-title">🎮 Mi Panel</h2>
        <nav className="sidebar-nav">
          <Link to="/" className="sidebar-item active">
            <FaGamepad className="sidebar-icon" /> Biblioteca
          </Link>
          <Link to="/reviews" className="sidebar-item">
            <FaListAlt className="sidebar-icon" /> Lista de Reseñas
          </Link>
          <Link to="/edit-review/:id" className="sidebar-item">
            <FaPenFancy className="sidebar-icon" /> Formulario Reseña
          </Link>
          <Link to="/add-game" className="sidebar-item">
            <FaPlusSquare className="sidebar-icon" /> Formulario Juego
          </Link>
          <Link to="/statistics" className="sidebar-item">
            <FaChartPie className="sidebar-icon" /> Estadísticas
          </Link>
        </nav>
      </aside>

      {/* === CONTENIDO PRINCIPAL === */}
      <main className="biblioteca-juegos">
        <div className="biblioteca-header">
          <h1>
            Biblioteca de Juegos
            <span className="cantidad-juegos"> ({filteredGames.length})</span>
          </h1>

          <div className="busqueda-wrapper">
            <span className="lupa">&#128269;</span>
            <input
              type="text"
              placeholder="Buscar juego..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="busqueda-juegos"
            />
          </div>

          <button className="boton-filtros" onClick={() => setShowFilters(!showFilters)}>
            {showFilters ? '▲ Ocultar Filtros' : '🔽 Mostrar Filtros'}
          </button>
        </div>

        {showFilters && (
          <div className="filtros-panel">
            <select value={filters.genero} onChange={(e) => setFilters({ ...filters, genero: e.target.value })}>
              <option value="">Todos los géneros</option>
              {generos.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>

            <select value={filters.plataforma} onChange={(e) => setFilters({ ...filters, plataforma: e.target.value })}>
              <option value="">Todas las plataformas</option>
              {plataformas.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>

            <select value={filters.añoLanzamiento} onChange={(e) => setFilters({ ...filters, añoLanzamiento: e.target.value })}>
              <option value="">Todos los años</option>
              {años.map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>

            <select value={filters.desarrollador} onChange={(e) => setFilters({ ...filters, desarrollador: e.target.value })}>
              <option value="">Todos los desarrolladores</option>
              {desarrolladores.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>

            <select value={filters.completado} onChange={(e) => setFilters({ ...filters, completado: e.target.value })}>
              <option value="">Todos</option>
              <option value="true">Completados</option>
              <option value="false">No completados</option>
            </select>
          </div>
        )}

        <div className="juegos-lista">
          {filteredGames.map((juego) => (
            <TarjetaJuego key={juego._id || juego.id} juego={juego} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default BibliotecaJuegos;
