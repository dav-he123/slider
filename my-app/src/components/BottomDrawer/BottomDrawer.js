import React from "react";
import "./BottomDrawer.scss";
import Button from "./Button";


const BottomDrawer = props => (

  <nav className = "bottom-drawer">    

    <div className="bottom-drawer--button">
      <Button click = {props.buttonHandlerToggle}>Show More</Button>
    </div> 

  </nav>

);

export default BottomDrawer;

