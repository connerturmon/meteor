const { createStore } = require("@reduxjs/toolkit");
import characterReducer from './reducers/characterReducer';

const store = createStore(
  characterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;