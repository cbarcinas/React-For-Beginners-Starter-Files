//ICE - import component export
import React from "react";
import { render } from "react-dom";
import StorePicker from "./components/StorePicker";
import App from "./components/App";

import "./css/style.css";

render(<App />, document.querySelector("#main")); //takes 2 things, jsx and mounting point
