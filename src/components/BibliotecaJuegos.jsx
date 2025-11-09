import React from 'react';
import TarjetaJuego from './TarjetaJuego';
import useGames from '../hooks/useGames';

const BibliotecaJuegos = () => {
    const { games } = useGames();

    return (
        <div className="biblioteca-juegos">
            <h1>Biblioteca de Juegos</h1>
            <div className="juegos-lista">
                {games.map((juego) => (
                    <TarjetaJuego key={juego.id} juego={juego} />
                ))}
            </div>
        </div>
    );
};

export default BibliotecaJuegos;