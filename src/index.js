import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import reviews from "./mocks/reviews";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./store/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createAPI } from "./services/api";

const api = createAPI(() =>
  store.dispatch(
    ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)
  )
);

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

ReactDOM.render(
  <Provider store={store}>
    <App reviews={reviews} />
  </Provider>,
  document.querySelector(`#root`)
);
