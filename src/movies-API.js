import axios from "axios";

export const getMovies = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day",
    {
      params: {
        language: "en-US",
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzgyM2RiMjVmYjVmYzc4MjlhZjQzNWE2YjViNGYyNiIsIm5iZiI6MTcyNTU0NjI5Mi40OTkxMDUsInN1YiI6IjY2ZDliYzE3MDA1ZDYyNGExMTZkMDU1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QFbnMVP0wES8HSgxweooekZAE_6NN0CjUPIel3O4LIE",
      },
    }
  );
  return response.data.results;
};
