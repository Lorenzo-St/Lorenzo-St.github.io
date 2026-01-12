import React from 'react';
import { useNavigate } from "react-router-dom";
import Navbutton from './Navbutton'

import '../styles/components/nav.css';

function GetButtons() {


  const navigate = useNavigate();
  return (
    <div className="NavButtonArea">
      < Navbutton text={"Home"} action=
        {
          () => navigate("/home")
        } />
      < Navbutton text={"Resume"} action=
        {
          () => navigate("/resume")
        } />
      < Navbutton text={"Projects"} action=
        {
          () => navigate("/projects")
        } />
      < Navbutton text={"About Me"} action=
        {
          () => navigate("/about-me")
        } />
      < Navbutton text={"blog"} action=
        {
          () => navigate("/blog")
        } />
    </div>
  );
}

function NavBar() {

  return (
    <div className="NavBar">
      <GetButtons />
    </div>

  );
}
export default NavBar;
