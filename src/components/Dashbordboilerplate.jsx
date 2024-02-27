import React from "react";
import "./Home.scss";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Dashhead from "./Dashhead";


const Dashbordboilerplate = () => {
    const [display, setDisplay] = React.useState(false);
  return (
    <div className="row">
    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
      <Dashhead id={3} display={display} />
    </div>

    <div
      className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 dashboard-container"
      onClick={() => display && setDisplay(false)}
    >
      <span className="iconbutton display-mobile">
        <IconButton
          size="large"
          aria-label="Menu"
          onClick={() => setDisplay(true)}
        >
          <MenuIcon fontSize="inherit" />
        </IconButton>
      </span>
      <h1 className="my-5 title text-center">
          Dashboard 
        
        </h1>
        </div>
        </div>
  )
}

export default Dashbordboilerplate