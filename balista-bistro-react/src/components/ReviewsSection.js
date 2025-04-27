import React from 'react';

function ReviewsSection({ reviews }) {
  return (
    <section className="reviews-section">
      <h2>Recent Reviews</h2>
      <div className="reviews-container">
        {reviews.map(review => (
          <div key={review.id} className="review">
            <img src={review.image} alt={review.author} className="review-img" />
            <div className="review-text">
              <h3>{review.title}</h3>
              <p>{review.content}</p>
              <p className="author">- {review.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ReviewsSection;
