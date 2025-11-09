import axios from 'axios';

const API_BASE_URL = 'https://6910e25e7686c0e9c20bfa0f.mockapi.io'; // Replace with your actual API base URL

export const fetchGames = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/games`);
        return response.data;
    } catch (error) {
        console.error('Error fetching games:', error);
        throw error;
    }
};

export const fetchGameDetails = async (gameId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/games/${gameId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching game details:', error);
        throw error;
    }
};

export const addGame = async (gameData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/games`, gameData);
        return response.data;
    } catch (error) {
        console.error('Error adding game:', error);
        throw error;
    }
};

export const updateGame = async (gameId, gameData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/games/${gameId}`, gameData);
        return response.data;
    } catch (error) {
        console.error('Error updating game:', error);
        throw error;
    }
};

export const deleteGame = async (gameId) => {
    try {
        await axios.delete(`${API_BASE_URL}/games/${gameId}`);
    } catch (error) {
        console.error('Error deleting game:', error);
        throw error;
    }
};

export const fetchReviews = async (gameId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/games/${gameId}/reviews`);
        return response.data;
    } catch (error) {
        console.error('Error fetching reviews:', error);
        throw error;
    }
};

export const addReview = async (gameId, reviewData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/games/${gameId}/reviews`, reviewData);
        return response.data;
    } catch (error) {
        console.error('Error adding review:', error);
        throw error;
    }
};

export const updateReview = async (gameId, reviewId, reviewData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/games/${gameId}/reviews/${reviewId}`, reviewData);
        return response.data;
    } catch (error) {
        console.error('Error updating review:', error);
        throw error;
    }
};

export const deleteReview = async (gameId, reviewId) => {
    try {
        await axios.delete(`${API_BASE_URL}/games/${gameId}/reviews/${reviewId}`);
    } catch (error) {
        console.error('Error deleting review:', error);
        throw error;
    }
};