import React from "react";
import './App.css';
import Header from "./Header";
import SideBar from "./SideBar";

function App() {
  return (
    <div className="App">
     <h1>Welcome</h1>

    <Header/>
    <div className= "app_body">
      <SideBar />
    </div>


    </div>
  );
}

export default App;


