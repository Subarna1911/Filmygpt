import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ImgCdnUrl, ApiOptions } from "../utils/constant";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";

const MovieDetails = () => {
  const { id } = useParams();
  const [trailer, setTrailer] = useState(null);
  const [movieData, setMovieData] = useState(null); // fallback for direct URL navigation

  // Fetch trailer
  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos`,
          ApiOptions
        );
        const data = await res.json();
        const trailerData = data.results.find(
          (vid) => vid.type === "Trailer" && vid.site === "YouTube"
        );
        setTrailer(trailerData || null);
      } catch (err) {
        console.error("Error fetching trailer:", err);
      }
    };
    fetchTrailer();
  }, [id]);

  // Access all movies from Redux
  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } =
    useSelector((state) => state.movies);

  // Try to find movie in Redux first (fast path)
  const allMovies = [
    ...(nowPlayingMovies || []),
    ...(popularMovies || []),
    ...(topRatedMovies || []),
    ...(upcomingMovies || []),
  ];
  const movieFromRedux = allMovies.find((m) => m.id.toString() === id);

  // If not in Redux (e.g. direct URL / page refresh), fetch from TMDB directly
  useEffect(() => {
    if (!movieFromRedux) {
      fetch(`https://api.themoviedb.org/3/movie/${id}`, ApiOptions)
        .then((res) => res.json())
        .then(setMovieData)
        .catch((err) => console.error("Error fetching movie:", err));
    }
  }, [id, movieFromRedux]);

  const movie = movieFromRedux || movieData;

  // Show loading state while fetching
  if (!movie) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center space-y-3">
          <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-white text-lg font-medium">Loading movie...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-screen md:p-12 h-full p-8 w-full">
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Movie trailer or poster fallback */}
        <div>
          {trailer ? (
            <iframe
              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=0&mute=1`}
              title="Trailer"
              className="w-full h-[280px] md:h-[320px] rounded-lg shadow-lg"
              allowFullScreen
            />
          ) : (
            <img
              src={`${ImgCdnUrl}${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-[280px] md:h-[320px] object-cover rounded-lg shadow-lg"
            />
          )}
        </div>

        {/* Movie info */}
        <div className="space-y-3">
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p className="text-md leading-relaxed">{movie.overview}</p>
          <p className="text-sm font-semibold">
            Release Date:{" "}
            <span className="font-normal">{movie.release_date}</span>
          </p>
          <div className="flex items-center gap-1 text-sm">
            <Star className="w-5 h-5 text-yellow-400" />
            <span>
              {movie.vote_average?.toFixed(1)} ({movie.vote_count} votes)
            </span>
          </div>
          <p className="text-sm">
            <strong>Language:</strong>{" "}
            {movie.original_language?.toUpperCase()}
          </p>
        </div>
      </div>

      <MovieList title="Top Rated Movies" movies={topRatedMovies} />
      <MovieList title="Upcoming Movies" movies={upcomingMovies} />
    </div>
  );
};

export default MovieDetails;
