import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import store from "./effects/store";

import App from "./App";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
    </StrictMode>,
  rootElement
);
