import { movies as mockMovies } from "../mocks";
import { ISetItemAction, SEARCH, SET_ACTIVE_ITEM } from "./actions";
import { filterMoviesByTitle, updateMoviesByCategories } from "../utils";
import { ISearchAction } from "./actions";

const initialState = {
  movies: mockMovies,
  selectedMovie: null,
};

type TMovieAction = ISearchAction | ISetItemAction;

export function moviesReducer(state = initialState, action: TMovieAction) {
  if (action.type === SEARCH) {
    const value = (action as ISearchAction).searchTerm;
    return {
      ...state,
      movies: filterMoviesByTitle(value, initialState.movies),
    };
  }
  if (action.type === SET_ACTIVE_ITEM) {
    return {
      ...state,
      movies: updateMoviesByCategories(
        (action as ISetItemAction).selectedItem.name,
        mockMovies
      ),
    };
  }

  return state;
}
