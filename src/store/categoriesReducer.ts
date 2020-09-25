import { categories as mockCategories } from "../mocks";
import { Action } from "redux";
import { SET_ACTIVE_ITEM, ISetItemAction } from "./actions";
import { changeCategory } from "../utils";

const initialState = {
  categories: mockCategories,
};

type TCategoriesAction = ISetItemAction;

export function categoriesReducer(
  state = initialState,
  action: ISetItemAction
) {
  if (action.type === SET_ACTIVE_ITEM) {
    return {
      ...state,
      categories: changeCategory(action.selectedItem.name, state.categories),
    };
  }
  return state;
}
