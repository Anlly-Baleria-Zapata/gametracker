import React from 'react';
import '../styles/TarjetaJuego.css'; // Asegúrate de crear este archivo

const TarjetaJuego = ({ juego }) => {
  return (
    <div className="tarjeta-juego">
      <img
        src={juego.imagen}
        alt={juego.titulo}
        className="tarjeta-juego__imagen"
      />

      <div className="tarjeta-juego__info">
        <h3 className="tarjeta-juego__titulo">{juego.titulo}</h3>
        <button className="tarjeta-juego__boton">Ver Detalles</button>
      </div>
    </div>
  );
};

export default TarjetaJuego;