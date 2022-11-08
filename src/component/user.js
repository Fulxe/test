import "./user.css";
import { useContext } from "react";
import { DarkMode } from "../theme";
import Dog from "./dog.jpeg";
import Wrtn from "./Avatar.jpg"


// import axios from "axios";

function User() {
  const { ToggleSwitch, darkMode } = useContext(DarkMode);
  return (
    <div className="user" style={{ backgroundColor: darkMode && "#1c1c1c" }}>
      <div
        className="navbar"
        style={{ backgroundColor: darkMode && " #28292d" }}
      >
        <Logo />
        <div className="navbar-right">
          <label className="switch">
            <input type="checkbox" onChange={ToggleSwitch}></input>
            <span class="slider-round"></span>
          </label>
          <div className="nv-text" style={{ color: darkMode && "black" }}>
            Product
          </div>
          <div className="nv-text" style={{ color: darkMode && "black" }}>
            Services
          </div>
          <div className="nv-text" style={{ color: darkMode && "black" }}>
            Contact
          </div>
          <div className="nv-text" style={{ color: darkMode && "black" }}>
            Log in
          </div>
          <div className="nv-tex">
            <p>Get Access</p>
          </div>
        </div>
      </div>
      <div className="axios">
        <div className="axios-img">
          <img src={Dog} />
        </div>
        <div className="axios-p">
          <p>Long-coated black dog on bed</p>
        </div>
        <div className="axios-wrtn">
          <div className="wrtn2">
            <div className="wrtn-img">
              <img src={Wrtn}/>
            </div>
            <div className="wrtn-name">
              <div className="wrtn-name2" >written by</div>
              <div className="wrtn-name3">Benjamin Wilson</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Logo() {
  const { ToggleSwitch, darkMode } = useContext(DarkMode);

  return (
    <div className="navbar-left">
      <p style={{ color: darkMode && "white" }}>Team</p>
    </div>
  );
}
export default User;
