
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "moviesStore",
    initialState: {
        categories: ["Action", "Adventure", "Comedy", "Drama", "History", "War", "Crime", "Romance", "Family", "Crime", "Thriller"],
        filter: {
            categories: [],
            year: "recent",
        },
        movies: [],
    },
    reducers: {
        addMovies(state, action) {
            return {
                ...state,
                movies: state.movies.concat(action.payload)
            }
        },
        toggleFilterCategory(state, action) {
            let category = state.filter.categories.find((c) => c == action.payload)

            if (category) {
                return {
                    ...state,
                    filter: {
                        ...state.filter,
                        categories: state.filter.categories.filter((c) => c != action.payload)
                    }
                }
            } else {
                return {
                    ...state,
                    filter: {
                        ...state.filter,
                        categories: state.filter.categories.concat([action.payload])
                    }
                }
            }
            
        }
    },
});

export const { addMovies, toggleFilterCategory } = slice.actions;

export default slice.reducer
