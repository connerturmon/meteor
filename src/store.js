import characterReducer from './reducers/characterReducer';
import skinsReducer from './reducers/skinsReducer';
import xmlReducer from './reducers/xmlReducer';
const { combineReducers, createStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
  characters: characterReducer,
  xml: xmlReducer,
  skins: skinsReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;