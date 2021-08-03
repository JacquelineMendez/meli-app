import React from "react";
import { Header } from "../Utilities/Header/Header";
import lupaImage from "./lupa.png";
import  "./styles/styles.scss";

export const Search = () => {
  return (
    <>
      <Header/>
     <div className="frame">
          <text className="text">Indicá el id del producto</text>
          <div className="input">
          <img className="lupaImage" src={lupaImage}/>
           <input type ="search" 
        placeholder ="Ej.. MLA8339779"
        width="80px"
        />
        </div>
        <button className="buttonSearch"> Buscar</button>
        </div>
    </>
  );
};

