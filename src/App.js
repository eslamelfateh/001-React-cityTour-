import React from "react";
import "./App.scss";
import Navbar from "./component/navebar/Navbar";
import TourList from "./component/TourList";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <TourList />
    </React.Fragment>
  );
}

export default App;
