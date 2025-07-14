export const TMDB_CONFIG = {
  baseUrl: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

export const fetchMovies = async ({ query }: { query: string }) => {
  const endporint = query
    ? `${TMDB_CONFIG.baseUrl}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.baseUrl}/discover/movie?sort_by=popularity.desc`;

  const response = await fetch(endporint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });
  if (!response.ok) {
    //@ts-ignore
    throw new Error("Failed to fetch movies", response.statusText);
  }

  const data = await response.json();
  return data.results;
};

export const fetchMovieDetails = async (
  movieId: string
): Promise<MovieDetails> => {
  try {
    const response = await fetch(
      `${TMDB_CONFIG.baseUrl}/movie/${movieId}?api_key=${TMDB_CONFIG.API_KEY}`,
      {
        method: "GET",
        headers: TMDB_CONFIG.headers,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch movie details");
    }

    const data = await response.json();
    return data as MovieDetails;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};
// const url =
//   "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGE1ODljNWIzNTJiYzczMGQxMDFmNjkzZWI4M2Q3NCIsIm5iZiI6MTc1MTQ0NDc1NC40MDksInN1YiI6IjY4NjRlZDEyZDdjNzc4ZWVmNDQzMGIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KIIEBkDzQsfEPufC9za321EY3U-E76NlOQQ-5-dcMFA",
//   },
// };

// fetch(url, options)
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.error(err));
