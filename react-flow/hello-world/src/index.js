import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Text from "./Text";
import registerServiceWorker from "./registerServiceWorker";

let root = document.getElementById("root");
ReactDOM.render(<App />, root);
registerServiceWorker();
