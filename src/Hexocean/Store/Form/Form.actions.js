/*
 * @category  Hexocean
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { FORM_SAVE_SUCCESS } from "./Types";

export function resetForm(payload) {
  return {
    type: FORM_SAVE_SUCCESS,
    payload: payload,
  };
}
