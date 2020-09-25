import { combineReducers, createStore } from "redux";
import { categoriesReducer } from "./categoriesReducer";
import { moviesReducer } from "./moviesReducer";

const state = {
  moviesReducer,
  categoriesReducer,
};
const reducers = combineReducers(state);

export type RootState = ReturnType<typeof reducers>;
export const store = createStore(reducers);
