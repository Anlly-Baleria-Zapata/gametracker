import React, { useState } from 'react';

const FormularioJuego = ({ onSubmit, initialData }) => {
    const [title, setTitle] = useState(initialData ? initialData.title : '');
    const [description, setDescription] = useState(initialData ? initialData.description : '');
    const [genre, setGenre] = useState(initialData ? initialData.genre : '');
    const [releaseDate, setReleaseDate] = useState(initialData ? initialData.releaseDate : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const gameData = { title, description, genre, releaseDate };
        onSubmit(gameData);
        resetForm();
    };

    const resetForm = () => {
        setTitle('');
        setDescription('');
        setGenre('');
        setReleaseDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="genre">Genre:</label>
                <input
                    type="text"
                    id="genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="releaseDate">Release Date:</label>
                <input
                    type="date"
                    id="releaseDate"
                    value={releaseDate}
                    onChange={(e) => setReleaseDate(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormularioJuego;