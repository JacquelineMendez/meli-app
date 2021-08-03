import React from "react";
import MeliImage from "../Header/meliImage.jpg";
import  "./styles/styles.scss";

export const Header = () => {
  return (
    <>
     <div className="HeaderContainer">
        <img className="logoImage" src={MeliImage}/>
        <text className="helpLink">Ayuda</text>
      </div>
    </>
  );
};

export default Header;