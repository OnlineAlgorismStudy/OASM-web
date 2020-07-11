import React from "react";
import { Provider } from "react-redux";

import Home from "pages/Home";
import Store from "redux/Store";

const store = Store();

export default () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};
