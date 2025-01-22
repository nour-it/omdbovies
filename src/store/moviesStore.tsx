
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "moviesStore",
  initialState: {
    categories: ["Action", "Adventure", "Comedy", "Drama", "History", "War", "Crime", "Romance", "Family", "Crime", "Thriller"],
    filter: [],
    movies: [],
  },
  reducers: {
    addMovies(state, action) {
      return {
        ...state,
        movies: state.movies.concat(action.payload)
      }
    },
  },
});

export const { addMovies } = slice.actions;

export default slice.reducer
