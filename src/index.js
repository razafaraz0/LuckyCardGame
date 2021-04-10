import allReducers from './reducers'
import Main from './main'
import React from "react";

import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { render } from "react-dom";

// Create a Redux Store.
// The Second Parameter is for the dev tool or easier debugging
const store = createStore(allReducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => (
  // Provider provides the global state to all the components within it.
  <Provider store={store}>
    <div>
      <Main/>
    </div>
  </Provider>
);

render(<App />, document.getElementById("app"));
