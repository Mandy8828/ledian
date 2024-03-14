import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import le from "./components/le";
import dian from "./components/dian";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={le} exact />
            <Route path="/le" component={le} exact />
            <Route path="/dian" component={dian} exact />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
