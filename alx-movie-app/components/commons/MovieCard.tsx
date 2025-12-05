import React from "react";

const MovieCard: React.FC = () => {
  return (
    <div className="border p-2 rounded">
      <p>Movie Title</p>
      <img src="https://via.placeholder.com/150" alt="Movie Poster" />
    </div>
  );
};

export default MovieCard;
