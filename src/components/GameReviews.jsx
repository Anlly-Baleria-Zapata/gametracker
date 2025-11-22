import React, { useEffect, useState } from "react";
import { FaPlusSquare, FaEdit } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import { fetchGameDetails, fetchReviewsByGame } from "../services/api";
import "../styles/GameReviews.css";

const GameReviews = () => {
  const { id } = useParams(); // ID del juego
  const navigate = useNavigate();

  const [juego, setJuego] = useState(null);
  const [resenias, setResenias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Traer datos del juego
        const dataJuego = await fetchGameDetails(id);
        setJuego(dataJuego);

        // Traer reseñas del juego
        const gameReviews = await fetchReviewsByGame(id);
        setResenias(gameReviews);
      } catch (err) {
        console.error("Error al cargar los datos:", err);
        setError("Hubo un error cargando los datos. Intenta de nuevo.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p className="loading">Cargando reseñas...</p>;
  if (error) return <p className="loading">{error}</p>;
  if (!juego)
    return (
      <div className="game-reviews-container">
        <p>Juego no encontrado.</p>
        <button className="volver-btn" onClick={() => navigate(-1)}>
          ← Volver
        </button>
      </div>
    );

  return (
    <div className="game-reviews-container">
      <button className="volver-btn" onClick={() => navigate(-1)}>
        ← Volver
      </button>

      {/* === FICHA DEL JUEGO === */}
      <div className="game-card">
        <img
          src={juego.imagenPortada || "https://cdn.pixabay.com/photo/2024/02/22/05/40/natural-scenery-8589166_1280.jpg"}
          alt={juego.titulo}
          className="game-card__imagen"
        />
        <div className="game-card__info">
          <h2>{juego.titulo}</h2>
          <p>
            <strong>Desarrollador:</strong> {juego.desarrollador}
          </p>
          <p>
            <strong>Plataforma:</strong> {juego.plataforma}
          </p>
          <p>
            <strong>Género:</strong> {juego.genero}
          </p>
          <p>
            <strong>Año:</strong> {juego.anioLanzamiento}
          </p>
        </div>
      </div>

      {/* === BOTÓN PARA AÑADIR RESEÑA === */}
      <button className="añadir-reseña-btn" onClick={() => navigate(`/add-review/${id}`)}>
        <FaPlusSquare className="icono-btn" /> Añadir Reseña
      </button>

      {/* === LISTA DE RESEÑAS === */}
      <h3 className="titulo-reseñas">Reseñas de la comunidad</h3>
      {resenias.length > 0 ? (
        <div className="reseñas-lista">
          {resenias.map((r) => (
            <div key={r._id} className="reseña-card">
                <button 
                  className="edit-btn" 
                  onClick={() => onEdit(r)}
                >
                  <FaEdit size={18}/>
                </button>
              <p><strong>Puntuación:</strong> ⭐ {r.puntuacion}/100</p>
              <p className="texto-reseña">"{r.textoResenia}"</p>
              <p><strong>Dificultad:</strong> {r.dificultad}</p>
              <p><strong>Recomendaría:</strong> {r.recomendaria ? "Sí" : "No"}</p>
              <p className="fecha-reseña">🕒 {new Date(r.fechaCreacion * 1000).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="sin-reseñas">No hay reseñas para este juego aún.</p>
      )}
    </div>
  );
};

export default GameReviews;
