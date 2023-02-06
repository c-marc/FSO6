import React from "react";
import ReactDOM from "react-dom/client";

import { createStore } from "redux";
import counterReducer from "./reducer";

const store = createStore(counterReducer);

const App = () => {
  const stats = store.getState();
  return (
    <div>
      <button onClick={(e) => store.dispatch({ type: "GOOD" })}>good</button>
      <button onClick={(e) => store.dispatch({ type: "OK" })}>ok</button>
      <button onClick={(e) => store.dispatch({ type: "BAD" })}>bad</button>
      <button onClick={(e) => store.dispatch({ type: "ZERO" })}>
        reset stats
      </button>
      <div>good {stats.good}</div>
      <div>ok {stats.ok}</div>
      <div>bad {stats.bad}</div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const renderApp = () => {
  root.render(<App />);
};

renderApp();
store.subscribe(renderApp);
