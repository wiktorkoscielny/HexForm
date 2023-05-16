/*
 * @category  Hexocean
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { FORM_SAVE_SUCCESS } from "./Types";

/** @namespace Hexocean/Store/Form/Reducer/getInitialState */
const intialState = {};

export default function formReducer(state = intialState, action) {
  switch (action.type) {
    case FORM_SAVE_SUCCESS:
      return undefined;
    default:
      return state;
  }
}
