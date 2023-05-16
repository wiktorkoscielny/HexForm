/*
 * @category  Hexocean
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { CHANGE_CONTENT, SHOW_NOTIFICATION, HIDE_NOTIFICATION } from "./Types";

/** @namespace Hexocean/Store/Notification/Reducer/getInitialState */
const intialState = {
  message: '',
  open: false
};

export default function notificationReducers(state = intialState, action) {
  switch (action.type) {
    case CHANGE_CONTENT:
      return {
        ...state,
        message: action.payload,
      };
    case SHOW_NOTIFICATION:
      return {
        ...state,
        open: !state.open
      };
    default:
      case HIDE_NOTIFICATION:
        return {
          ...state,
          open: false
        }
      return state;
  }
}
