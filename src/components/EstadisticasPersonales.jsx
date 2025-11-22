import React from "react";
import "../styles/EstadisticasPersonales.css";

const EstadisticasPersonales = ({ games, insights }) => {
  if (!games || games.length === 0) return <p>No hay juegos para mostrar.</p>;

  // Mapear juegos para agregar datos extra
  const gamesWithExtras = games.map((g) => ({
    ...g,
    hoursPlayed: g.horasJugadas || Math.floor(Math.random() * 300), // demo si no hay horas
    reviews: g.reviews || [],
    status: g.completado ? "Completed" : "Backlog",
    statusColor: g.completado ? "#22c55e" : "#4f46e5",
    lastPlayed: g.fechaCreacion
      ? new Date(g.fechaCreacion * 1000).toLocaleDateString()
      : "-",
    review: g.reviews && g.reviews.length ? g.reviews[0].texto : "Sin reseña",
    title: g.titulo,
  }));

  return (
    <div className="galaxy-container">
      <div className="galaxy-view">
        <div className="sun"></div>

        {gamesWithExtras.map((game, index) => (
          <div
            key={game.id}
            className={`planet orbit orbit-${index}`}
            style={{
              "--orbit-radius": `${120 + index * 50}px`,
              "--planet-size": `${20 + index * 5}px`,
            }}
          >
            <div
              className="planet-body"
              style={{ backgroundColor: game.statusColor }}
            >
              <div className="tooltip">
                <p><strong>{game.title}</strong></p>
                <p>Horas jugadas: {game.hoursPlayed}</p>
                <p>% completado: {game.completado ? 100 : 0}</p>
                <p>Reseña: {game.review}</p>
                <p>Última jugada: {game.lastPlayed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="insights">
        <h2>Insights Inteligentes</h2>
        <p>
          🌟 Planeta más brillante:{" "}
          {insights.planetaBrillante
            ? `${insights.planetaBrillante.titulo} (${insights.planetaBrillante.reviews?.length || 0} reseñas)`
            : "-"}
        </p>
        <p>
          💙 Gigante azul:{" "}
          {insights.giganteAzul
            ? `${insights.giganteAzul.titulo} (${insights.giganteAzul.horasJugadas || 0} horas)`
            : "-"}
        </p>
        <p>
          ☠️ Planeta muerto:{" "}
          {insights.planetaMuerto ? insights.planetaMuerto.titulo : "-"}
        </p>
        <p>
          🚀 Nueva misión:{" "}
          {insights.nuevaMision ? insights.nuevaMision.titulo : "-"}
        </p>
      </div>
    </div>
  );
};

export default EstadisticasPersonales;
