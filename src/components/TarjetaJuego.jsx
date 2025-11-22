import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa'; // ícono de lápiz
import '../styles/TarjetaJuego.css';

const TarjetaJuego = ({ juego }) => {
  const navigate = useNavigate();

  const handleVerDetalles = () => {
    navigate(`/game/${juego.id}/reviews`);
  };

  const handleEditarResena = () => {
    navigate(`/add-review/${juego._id}`);
  };

  return (
    <div className="tarjeta-juego">
      <img
        src={juego.imagen}
        alt={juego.titulo}
        className="tarjeta-juego__imagen"
      />

      <div className="tarjeta-juego__info">
        <h3 className="tarjeta-juego__titulo">{juego.titulo}</h3>
        <div className="tarjeta-juego__botones">
          <button
            className="tarjeta-juego__boton"
            onClick={handleVerDetalles}
          >
            Ver Detalles
          </button>
          <button
            className="tarjeta-juego__icono"
            onClick={handleEditarResena}
            title="Editar Reseña"
          >
            <FaEdit size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TarjetaJuego;
