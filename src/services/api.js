import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:4000", // apunta al backend
});

// ======================
// === JUEGOS / GAMES ===
// ======================

export const fetchGames = async () => {
  const res = await API.get("/games"); // se conecta con GET http://localhost:4000/api/games
  return res.data;
};

export const fetchGameDetails = async (id) => {
  const res = await API.get(`/games/${id}`);
  return res.data;
};


export const addGame = async (gameData) => {
  const res = await API.post("/games", gameData);
  return res.data;
};

export const updateGame = async (gameId, gameData) => {
  const res = await API.put(`/games/${gameId}`, gameData);
  return res.data;
};

export const deleteGame = async (gameId) => {
  await API.delete(`/games/${gameId}`);
};

// =========================
// === RESEÑAS / REVIEWS ===
// =========================

export const fetchAllReviews = async () => {
  const res = await API.get("/reviews");
  return res.data;
};

export const addReview = async (gameId, reviewData) => {
  // Construimos el body para enviar al backend
  const body = {
    juegoId: gameId,              // id del juego
    puntuacion: reviewData.puntuacion,
    textoResenia: reviewData.textoResena,
    horasJugadas: Number(reviewData.horasJugadas), // asegurarse de que sea número
    dificultad: reviewData.dificultad,
    recomendaria: reviewData.recomendaria
  };

    return await API.post("/reviews", body);
};

export const updateReview = async (id, updatedData) => {
  const res = await API.put(`/reviews/${id}`, updatedData);
  return res.data;
};

export const deleteReview = async (id) => {
  const res = await API.delete(`/reviews/${id}`);
  return res.data;
};

// =========================
// === RESEÑAS DE UN JUEGO ===
// =========================
export const fetchReviewsByGame = async (gameId) => {
  const res = await API.get(`/reviews/game/${gameId}`);
  return res.data;
};

// ==========================
// === ESTADÍSTICAS / STATS ===
// ==========================

export const fetchGameInsights = async () => {
  try {
    const games = await fetchGames();
    const reviews = await fetchAllReviews();

    if (!games.length) return {};

    // Planeta más brillante: juego con más reseñas
    const planetaBrillante = games.reduce((prev, current) => {
      const prevCount = reviews.filter(r => r.gameId === prev.id).length;
      const currentCount = reviews.filter(r => r.gameId === current.id).length;
      return currentCount > prevCount ? current : prev;
    }, games[0]);

    // Gigante azul: juego con más horas (si no hay horas, asumimos 0)
    const giganteAzul = games.reduce((prev, current) => {
      const prevHours = prev.horasJugadas || 0;
      const currentHours = current.horasJugadas || 0;
      return currentHours > prevHours ? current : prev;
    }, games[0]);

    // Planeta muerto: juego no completado con menos horas jugadas (opcional)
    const planetasAbandonados = games.filter(g => !g.completado);
    let planetaMuerto = null;
    if (planetasAbandonados.length) {
      planetaMuerto = planetasAbandonados.reduce((prev, current) => {
        const prevHours = prev.horasJugadas || 0;
        const currentHours = current.horasJugadas || 0;
        return currentHours < prevHours ? current : prev;
      }, planetasAbandonados[0]);
    }

    // Nueva misión: juego recomendado (aleatorio entre no completados)
    const nuevaMision = planetasAbandonados.length
      ? planetasAbandonados[Math.floor(Math.random() * planetasAbandonados.length)]
      : null;

    return {
      planetaBrillante,
      giganteAzul,
      planetaMuerto,
      nuevaMision,
    };
  } catch (error) {
    console.error("Error fetching game insights:", error);
    throw error;
  }
};
