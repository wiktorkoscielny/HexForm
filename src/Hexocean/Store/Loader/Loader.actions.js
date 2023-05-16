/*
 * @category  Hexocean
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { TOGGLE_LOADER } from "./Types";

export function updateLoader(payload) {
  return {
    type: TOGGLE_LOADER,
    payload: payload,
  };
}
