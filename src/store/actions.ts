import { Action } from "redux";
import { ICategory, IItem } from "../types";

// 1. Search
// 2. Filter => Set Active Category
// 3. Get Movies
// 4. Get Categories

export const SEARCH = "search movies by title";

export interface ISearchAction extends Action {
  searchTerm: string;
}
export function searchAction(searchTerm: string): ISearchAction {
  return { type: SEARCH, searchTerm };
}

export const SET_ACTIVE_ITEM = "Set active category";

export interface ISetItemAction extends Action {
  selectedItem: IItem;
}
export function setItemAction(selectedItem: IItem): ISetItemAction {
  return { type: SET_ACTIVE_ITEM, selectedItem };
}
