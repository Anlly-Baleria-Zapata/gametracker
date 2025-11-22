import React, { useEffect, useState } from "react";

const API_URL = "https://6910e25e7686c0e9c20bfa0f.mockapi.io/reviews";

const ListaResenas = () => {
  const [reseñas, setReseñas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setReseñas(data);
      } catch (error) {
        console.error("Error cargando reseñas:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="lista-resenas">
      <h2>Reseñas de la comunidad</h2>

      {reseñas.length === 0 ? (
        <p>No hay reseñas todavía.</p>
      ) : (
        reseñas.map((r) => (
          <div className="resena-card" key={r.id}>
            {/* 🔥 Nunca mostramos juegoId directamente */}
            <p><strong>Puntuación:</strong> ⭐ {r.puntuacion}</p>
            <p><strong>Dificultad:</strong> {r.dificultad}</p>
            <p><strong>Horas jugadas:</strong> {r.horasJugadas}</p>
            <p><strong>Recomienda:</strong> {r.recomendaria ? "Sí" : "No"}</p>
            <p><em>{r.textoResena}</em></p>
            
            <p className="fecha">
              🕒 {new Date(r.fechaCreacion).toLocaleDateString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default ListaResenas;
