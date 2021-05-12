import React, { useState } from "react";
import HomePage from "./HomePage";

const logoStyle = {
  fontSize: "1.5rem",
  margin: "auto 7px auto auto",
  color: "#ff4500",
};

const arrowStyle = {
  padding: "5px",
  margin: "auto 10px auto auto",
};

interface NavProps {
  showHome: () => void;
}

const Navigation = (props: NavProps) => {
  const [showArrow, setShowArrow] = useState(true);
  const HandleClick = () => {
    setShowArrow(!showArrow);
    props.showHome();
  };
  return (
    <nav>
      <div id="logo">
        {showArrow && (
          <span style={arrowStyle}>
            <i onClick={HandleClick} className="fas fa-arrow-left"></i>
          </span>
        )}
        <span style={logoStyle}>
          <i className="fab fa-reddit"></i>
        </span>
        <h3>reddit</h3>
      </div>
      <div id="useAppButton">Use App</div>
    </nav>
  );
};

export default Navigation;

/*This is what I want.  User clicks on the nav bar, the nav bar remains, and the page is switched up with home page

Whats happening, When I click link, homepage displays + signup container + nav bar
*/
