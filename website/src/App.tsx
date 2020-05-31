import React, { useContext, useEffect } from "react";
import "./style/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalState from "Context/GlobalState";
import UserContext from "Context/userContext";
import Login from "./pages/RegisterLogin/login";

function App() {
  const user = useContext(UserContext);

  return (
    <GlobalState>
      <Router>
        {/* <Switch>
          <Route path="/" exact>
            {}
          </Route>
          <Route></Route>
        </Switch> */}
        <div className="App">
          <div>Hello</div>
          <Login />
        </div>
      </Router>
    </GlobalState>
  );
}

export default App;
