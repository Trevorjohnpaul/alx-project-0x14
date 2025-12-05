interface MovieCardProps {
  title: string;
  posterImage: string;
  releaseYear: string | number;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  posterImage,
  releaseYear,
}) => {
  return (
    <div className="bg-gray-900 p-2 rounded-lg">
      <img src={posterImage} alt={title} className="w-full h-auto rounded" />
      <h2 className="mt-2 font-bold">{title}</h2>
      <p className="text-sm text-gray-400">{releaseYear}</p>
    </div>
  );
};

export default MovieCard;
