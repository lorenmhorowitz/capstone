import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";

const renderApp = () => {
  const App = require("./App").default;
  const appRoot = document.getElementById("root");

  if (!(appRoot instanceof Element)) {
    throw new Error("invalid app root!");
  }

  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContainer>,
    appRoot
  );
};

renderApp();

module.hot.accept("./App", renderApp);
