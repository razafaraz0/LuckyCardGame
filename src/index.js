import allReducers from './reducers'
import Main from './main'
import React from "react";

import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { render } from "react-dom";

const store = createStore(allReducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => (
  <Provider store={store}>
    <div>
      <Main/>
    </div>
  </Provider>
);

render(<App />, document.getElementById("app"));
