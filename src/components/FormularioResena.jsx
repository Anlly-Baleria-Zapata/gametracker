import React, { useState } from 'react';

const FormularioResena = ({ onSubmit, existingReview }) => {
    const [reviewText, setReviewText] = useState(existingReview ? existingReview.text : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ text: reviewText });
        setReviewText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Write your review here..."
                required
            />
            <button type="submit">{existingReview ? 'Update Review' : 'Submit Review'}</button>
        </form>
    );
};

export default FormularioResena;