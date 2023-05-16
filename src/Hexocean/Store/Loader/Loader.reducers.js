/*
 * @category  Hexocean
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { TOGGLE_LOADER } from "./Types";

/** @namespace Hexocean/Store/Loader/Reducer/getInitialState */
const intialState = {
  isLoading: false
};

export default function loaderReducers(state = intialState, action) {
  switch (action.type) {
    case TOGGLE_LOADER:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    default:
      return state;
  }
}
