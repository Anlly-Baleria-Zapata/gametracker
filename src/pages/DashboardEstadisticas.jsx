import React, { useEffect, useState } from "react";
import EstadisticasPersonales from "../components/EstadisticasPersonales";
import { fetchGames, fetchAllReviews, fetchGameInsights } from "../services/api";

const DashboardEstadisticas = () => {
  const [games, setGames] = useState([]);
  const [insights, setInsights] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const fetchedGames = await fetchGames();
        setGames(fetchedGames);

        const fetchedInsights = await fetchGameInsights();
        setInsights(fetchedInsights);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <p>Cargando juegos...</p>;
  if (!games.length) return <p>No hay juegos para mostrar.</p>;

  return (
    <div>
      <h1>Mis Estadísticas de Juegos</h1>
      <EstadisticasPersonales games={games} insights={insights} />
    </div>
  );
};

export default DashboardEstadisticas;
