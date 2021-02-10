import React from "react";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from "./Header";
import SideBar from "./SideBar";
import Chat from "./Chat";

function App() {
  return (
    <div className="App">
     <Router>

     <Header/>
    <div className= "app_body">
      <SideBar />
        <Switch>
          <Route path= "/room/:roomId">
            <Chat/>
          </Route>

          <Route path= "/">
            <Chat/>
          </Route>
        </Switch>
   
    </div>
    </Router>


    </div>
  );
}

export default App;


