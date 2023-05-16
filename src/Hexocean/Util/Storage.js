import { REDUX_KEY } from "./Config";

export function loadState() {
  try {
    const serializedState = localStorage.getItem(REDUX_KEY);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
  }
}

export async function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(REDUX_KEY, serializedState);
  } catch (e) {
    console.log(e)
  }
}
