import "./App.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/" ><Home/></Route>
        <Route exact path="/Park"><Navbar/></Route>
        <Route exact path="/Park1" ><Navbar/>
          <Route
            render={({ history }) => (
              <button
                type="button"
                onClick={() => {
                  history.push("/");
                }}
              >
                PARK NOW
              </button>
            )}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
