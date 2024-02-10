const APIKEY = "6088909e652a68d74dea929a2e71e37d";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchNetfilxOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}with_genres=10749`,
  fetchDocumMovies: `/discover/movie?api_key=${APIKEY}with_genres=99`,
};

export default requests;
