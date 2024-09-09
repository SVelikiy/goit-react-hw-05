import axios from "axios";

export const getMovieSearch = async (query) => {
  const respopnce = await axios.get('https://api.themoviedb.org/3/search/movie', {
      params: { query : `${query}`, language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzgyM2RiMjVmYjVmYzc4MjlhZjQzNWE2YjViNGYyNiIsIm5iZiI6MTcyNTU0NjI5Mi40OTkxMDUsInN1YiI6IjY2ZDliYzE3MDA1ZDYyNGExMTZkMDU1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QFbnMVP0wES8HSgxweooekZAE_6NN0CjUPIel3O4LIE",
    },
  });
  return respopnce.data.results;
};
