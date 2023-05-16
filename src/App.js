import { Provider } from "react-redux";
import { createStore } from "redux";
import { debounce } from "debounce";
import { saveState } from "./Hexocean/Util/Storage";
import { loadState } from "./Hexocean/Util/Storage";
import rootReducer from "./Hexocean/Store";
import '../src/Hexocean/Style/Body.style.css';
import NotificationContainer from "./Hexocean/Components/Notification/Notification.container";
import LoaderContainer from "./Hexocean/Components/Loader/Loader.container";
import MainContainer from "./Hexocean/Components/Main/Main.container";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  devTools: true,
  reducer: rootReducer,
  preloadedState: loadState(),
});

store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 800)
);

export default function App() {
  return (
    <div className="body">
      <Provider store={store}>
        <MainContainer />
        <NotificationContainer />
        <LoaderContainer />
      </Provider>
    </div>
  );
}
