import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FormularioJuego.css";

const FormularioJuego = ({ onSubmit }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    titulo: "",
    genero: "",
    plataforma: "",
    añoLanzamiento: "",
    desarrollador: "",
    imagenPortada: "",
    descripcion: "",
    completado: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...form, fechaCreacion: new Date() };
    onSubmit(data);
    navigate("/");
  };

  return (
    <div className="form-juego-container">
      <form className="form-juego" onSubmit={handleSubmit}>
        <h2>Agregar Nuevo Juego 🎮</h2>

        <label>
          Título del juego
          <input
            type="text"
            name="titulo"
            value={form.titulo}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Género
          <select name="genero" value={form.genero} onChange={handleChange} required>
            <option value="">Selecciona género</option>
            <option value="Acción">Acción</option>
            <option value="Aventura">Aventura</option>
            <option value="RPG">RPG</option>
            <option value="Estrategia">Estrategia</option>
            <option value="Shooter">Shooter</option>
            <option value="Deportes">Deportes</option>
          </select>
        </label>

        <label>
          Plataforma
          <select
            name="plataforma"
            value={form.plataforma}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona plataforma</option>
            <option value="PC">PC</option>
            <option value="PlayStation">PlayStation</option>
            <option value="Xbox">Xbox</option>
            <option value="Nintendo Switch">Nintendo Switch</option>
            <option value="Mobile">Mobile</option>
          </select>
        </label>

        <label>
          Año de lanzamiento
          <input
            type="number"
            name="añoLanzamiento"
            value={form.añoLanzamiento}
            onChange={handleChange}
            min="1980"
            max="2030"
            required
          />
        </label>

        <label>
          Desarrollador
          <input
            type="text"
            name="desarrollador"
            value={form.desarrollador}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          URL de imagen de portada
          <input
            type="url"
            name="imagenPortada"
            value={form.imagenPortada}
            onChange={handleChange}
            placeholder="https://ejemplo.com/imagen.jpg"
            required
          />
        </label>

        <label>
          Descripción
          <textarea
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </label>

        {/* SWITCH COMPLETADO */}
        <label className="switch-label">
          Juego completado:
          <div className="switch-container">
            <input
              type="checkbox"
              id="completado-switch"
              name="completado"
              checked={form.completado}
              onChange={handleChange}
            />
            <span className="slider"></span>
            <span className="switch-text">
              {form.completado ? "Sí" : "No"}
            </span>
          </div>
        </label>

        <button type="submit" className="guardar-btn">
          Guardar Juego
        </button>
      </form>
    </div>
  );
};

export default FormularioJuego;
