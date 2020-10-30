import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Login from "./Login";
import "./styles.css";
import View from "./View";

export const UserContext = React.createContext();
function App() {
  const history = useHistory();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userLoginData"));
    if (!user) {
      history.push("/signin");
    }
    return () => {};
  }, [history]);
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <View />
          </Route>
          <Route exact path="/signin">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
// <div className="container-bottom"></div>
// onChange={(e) => setView1(e.target.value)}
// onChange={(e) => setView2(e.target.value)}
//  history.pushState('')
