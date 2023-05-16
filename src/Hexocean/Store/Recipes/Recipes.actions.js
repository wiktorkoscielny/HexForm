/*
 * @category  Hexocean
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { ADD_RECIPE, DELETE_ALL_RECIPES, DELETE_SINGLE_RECIPE } from "./Types";

export function addRecipe(payload) {
  return {
    type: ADD_RECIPE,
    payload: payload,
  };
}

export function deleteAllRecipes() {
  return {
    type: DELETE_ALL_RECIPES,
  };
}

export function deleteSingleRecipe(payload) {
  return {
    type: DELETE_SINGLE_RECIPE,
    payload: payload,
  };
}
