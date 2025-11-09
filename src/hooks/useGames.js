import { useState, useEffect } from 'react';
import { fetchGames } from '../services/api';

const useGames = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadGames = async () => {
            try {
                const gamesData = await fetchGames();
                setGames(gamesData);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadGames();
    }, []);

    return { games, loading, error };
};

export default useGames;