import "./App.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
<<<<<<< HEAD
import {Route, BrowserRouter, Switch} from "react-router-dom";
import ParkingLotPage from "./pages/ParkingLotsPage";
import ParkingSpotPage from "./pages/ParkingSpotsPage";
=======
import { Route, BrowserRouter, Switch } from "react-router-dom";
>>>>>>> 51c69b7abb256811f6a61dd1adc99fdae08c7dbe

function App() {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/"><Home/></Route>
                <Route exact path="/parkingLotPage"><ParkingLotPage/></Route>
                <Route exact path="/parkingSpotPage"><ParkingSpotPage/></Route>
                <Route exact path="/Park"><Navbar/></Route>
                <Route exact path="/Park1"><Navbar/>
                    <Route
                        render={({history}) => (
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
