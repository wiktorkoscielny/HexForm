/*
 * @category  Hexocean
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from 'redux-form'
import formReducer from "./Form/Form.reducers";
import notificationReducers from "./Notification/Notification.reducers";
import recipeReducers from "./Recipes/Recipes.reducers";
import loaderReducers from "./Loader/Loader.reducers";

const rootReducer = combineReducers({
  notification: notificationReducers,
  recipe: recipeReducers,
  loader: loaderReducers,
  form: reduxFormReducer.plugin({
    HEX_FORM: formReducer
  })
});

export default rootReducer;
