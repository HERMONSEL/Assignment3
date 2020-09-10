import React from 'react';
// importlogo "./logo.svg";
import"./App.css";

import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import SingleRooms from "./Pages/SingleRooms";
import Error from "./Pages/Error";
import Navbar from "./Component/Navbar";

import {Route, Switch} from "react-router-dom";


function App() {
  return (
   <>
   <Navbar />
   <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/rooms" component={Rooms} />
     <Route exact path="/rooms/:slug" component={SingleRooms} />
     <Route  component={Error} />
   </Switch>);
   </>
  )
}

export default App;
