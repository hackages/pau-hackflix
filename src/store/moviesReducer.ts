import { movies as mockMovies } from "../mocks";
import { ISetItemAction, SEARCH, SET_ACTIVE_ITEM } from "./actions";
import { filterMoviesByTitle, updateMoviesByCategories } from "../utils";
import { ISearchAction } from "./actions";
import { IMovie } from "../types";

interface IAppState {
  movies: IMovie[];
  selectedMovie: IMovie | null;
}

const initialState = {
  movies: mockMovies,
  selectedMovie: null,
};

type TMovieAction = ISearchAction | ISetItemAction;

export function searchMovieByTitleReducer(
  state: IAppState,
  action: ISearchAction
) {
  return {
    ...state,
    movies: filterMoviesByTitle(action.searchTerm, initialState.movies),
  };
}

export function showMoviesByCategoryReducer(
  state: IAppState,
  action: TMovieAction
) {
  return {
    ...state,
    movies: updateMoviesByCategories(
      (action as ISetItemAction).selectedItem.name,
      mockMovies
    ),
  };
}
interface IReducer {
  (state: IAppState, action: TMovieAction): IAppState;
}

const reducers: { [key: string]: IReducer } = {
  [SEARCH]: searchMovieByTitleReducer,
  [SET_ACTIVE_ITEM]: showMoviesByCategoryReducer,
};

export function moviesReducer(state = initialState, action: TMovieAction) {
  const handler = reducers[action.type];
  return handler ? handler(state, action) : state;
}
