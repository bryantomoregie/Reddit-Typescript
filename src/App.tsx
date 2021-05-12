import React, { useState } from "react";
import Navigation from "./Components/Navigation";
import SignUpContainer from "./Components/SignUpContainer";
import HomePage from "./Components/HomePage";
import "./Style/App.css";

function App() {
  const [showHomePage, setShowHomePage] = useState(false);

  const showHome = () => setShowHomePage(!showHomePage);

  return (
    <>
      <Navigation showHome={showHome} />
      {showHomePage ? <HomePage /> : <SignUpContainer />}
    </>
  );
}

export default App;

/*
App componnet
Nav component inside 
SIgnupContainer component 
sign up buttons inside 
*/
