import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

const renderApp = () => {
  const App = require("./App").default;
  const appRoot = document.getElementById("root");

  if (!(appRoot instanceof Element)) {
    throw new Error("invalid app root!");
  }

  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppContainer>
    </Provider>,
    appRoot
  );
};

renderApp();
