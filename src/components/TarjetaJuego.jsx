import React from 'react';

const TarjetaJuego = ({ juego }) => {
    return (
        <div className="tarjeta-juego">
            <img src={juego.imagen} alt={juego.titulo} className="tarjeta-juego__imagen" />
            <h3 className="tarjeta-juego__titulo">{juego.titulo}</h3>
            <p className="tarjeta-juego__descripcion">{juego.descripcion}</p>
            <button className="tarjeta-juego__boton">Ver Detalles</button>
        </div>
    );
};

export default TarjetaJuego;