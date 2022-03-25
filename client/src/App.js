import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const [dark, setDark] = useState(false);
  const [update, setUpdate] = useState(false);

  return (
    <Switch>
      <Route exact path="/">
        <Home
          dark={dark}
          setDark={setDark}
          update={update}
          setUpdate={setUpdate}
        />
      </Route>
    </Switch>
  );
}

export default App;
