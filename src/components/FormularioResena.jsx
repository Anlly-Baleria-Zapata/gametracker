import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { addReview } from "../services/api";
import "../styles/FormularioResena.css";
import { FaStar } from "react-icons/fa";

const FormularioResena = () => {
  const { id: gameId } = useParams();
  const navigate = useNavigate();

const [reviewData, setReviewData] = useState({
  puntuacion: 0,
  textoResenia: "", // cambié el nombre para coincidir con el backend
  horasJugadas: 1,  // valor inicial
  dificultad: "Normal",
  recomendaria: false,
});


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setReviewData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleStarClick = (valor) => {
    setReviewData((prev) => ({ ...prev, puntuacion: valor }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addReview(gameId, reviewData);
      navigate(`/GameReviews/${gameId}`);
    } catch (error) {
      console.error("Error al agregar reseña:", error);
    }
  };

  return (
    <div className="form-resena-container">
      <h2>Añadir Reseña</h2>
      <form className="form-resena" onSubmit={handleSubmit}>
        {/* ⭐ Puntuación con estrellas */}
        <label className="stars-label">
          Puntuación:
          <div className="stars-container">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                size={24}
                className={star <= reviewData.puntuacion ? "star filled" : "star"}
                onClick={() => handleStarClick(star)}
              />
            ))}
          </div>
        </label>

        {/* Texto de la reseña */}
        <label>
          Reseña:
          <textarea
            name="textoResena"
            value={reviewData.textoResena}
            onChange={handleChange}
            placeholder="Escribe tu reseña aquí..."
            required
          />
        </label>

        {/* Horas jugadas */}
      <input
          type="range"
          name="horasJugadas"
          min="1"
          max="24"
          value={reviewData.horasJugadas}
          onChange={handleChange}
        />
        <span>{reviewData.horasJugadas} h</span>


        {/* Dificultad */}
        <label>
          Dificultad:
          <select
            name="dificultad"
            value={reviewData.dificultad}
            onChange={handleChange}
          >
            <option value="Fácil">Fácil</option>
            <option value="Normal">Normal</option>
            <option value="Difícil">Difícil</option>
          </select>
        </label>

        {/* Switch recomendaría */}
     <label className="switch-label">
        Recomendaría el juego: 
        <span className="switch-text">{reviewData.recomendaria ? "Sí" : "No"}</span>
        <input
            type="checkbox"
            name="recomendaria"
            checked={reviewData.recomendaria}
            onChange={(e) =>
            setReviewData({ ...reviewData, recomendaria: e.target.checked })
            }
        />
        <span className="slider"></span>
        </label>


        <button type="submit" className="guardar-btn">
          Guardar Reseña
        </button>
      </form>
    </div>
  );
};

export default FormularioResena;
