/*
 * @category  Hexocean
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { ADD_RECIPE, DELETE_ALL_RECIPES, DELETE_SINGLE_RECIPE } from "./Types";

/** @namespace Hexocean/Store/Recipes/Reducer/getInitialState */
const intialState = {
  recipes: [],
};

export default function recipeReducers(state = intialState, action) {
  switch (action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
      };
    case DELETE_ALL_RECIPES:
      return {
        ...state,
        recipes: [],
      };
    case DELETE_SINGLE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter((recipe) => recipe.id !== action.payload),
      };
    default:
      return state;
  }
}
