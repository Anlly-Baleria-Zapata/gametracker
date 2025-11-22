import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaGamepad, FaListAlt, FaPenFancy, FaPlusSquare, FaChartPie } from "react-icons/fa";
import "../styles/Layout.css";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="layout-container">
      <aside className="sidebar">
        <h2 className="sidebar-title">🎮 Mi Panel</h2>
        <nav className="sidebar-nav">
          <Link to="/" className={`sidebar-item ${location.pathname === "/" ? "active" : ""}`}>
            <FaGamepad className="sidebar-icon" /> Biblioteca
          </Link>
          <Link to="/reviews" className={`sidebar-item ${location.pathname === "/reviews" ? "active" : ""}`}>
            <FaListAlt className="sidebar-icon" /> Lista de Reseñas
          </Link>
          <Link to="/add-review/:id" className={`sidebar-item ${location.pathname.includes("/edit-review") ? "active" : ""}`}>
            <FaPenFancy className="sidebar-icon" /> Formulario Reseña
          </Link>
          <Link to="/add-game" className={`sidebar-item ${location.pathname === "/add-game" ? "active" : ""}`}>
            <FaPlusSquare className="sidebar-icon" /> Formulario Juego
          </Link>
          <Link to="/statistics" className={`sidebar-item ${location.pathname === "/statistics" ? "active" : ""}`}>
            <FaChartPie className="sidebar-icon" /> Estadísticas
          </Link>
        </nav>
      </aside>

      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
