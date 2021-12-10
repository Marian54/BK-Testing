import "./App.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import ParkingLotPage from "./pages/ParkingLotsPage";
import ParkingSpotPage from "./pages/ParkingSpotsPage";
import FormSucces from "./AddParkingLot/FormSucces";
import GoogleMapComponent from "./GoogleMap/GoogleMapComponent";
import React from "react";


function App() {
    return (
        <BrowserRouter>
            <Switch>


                <Route exact path="/"><Home/></Route>
                <Route exact path="/parkingLotPage"><ParkingLotPage/></Route>
                <Route exact path="/parkingSpotPage"><ParkingSpotPage/></Route>
                <Route exact path="/Park"><Navbar/></Route>
                <Route exact path="/AddParkingLot"><Navbar/>
                    <GoogleMapComponent />
                     <FormSucces />
                </Route>
            </Switch>
        </BrowserRouter>
    );

}

export default App;
