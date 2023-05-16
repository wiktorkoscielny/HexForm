/*
 * @category  Hexocean
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { CHANGE_CONTENT, SHOW_NOTIFICATION, HIDE_NOTIFICATION } from "./Types";

export function updateNotificationMessage(payload) {
  return {
    type: CHANGE_CONTENT,
    payload: payload,
  };
}

export function showNotification(payload) {
  return {
    type: SHOW_NOTIFICATION,
    payload: payload,
  };
}

export function hideNotification(payload) {
  return {
    type: HIDE_NOTIFICATION,
    payload: payload
  }
}
