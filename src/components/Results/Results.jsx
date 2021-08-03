import React from "react";
import { Header } from "../Utilities/Header/Header";
import lupaImage from "../Search/lupa.png";
import closeImage from "./close.png";
import  "./styles/styles.scss";

const Results = () => {
  return (
    <>
      <Header/>
      <div className="frameResults">
        <div className="result">
          <img src={lupaImage} width="15px" height="15px"/>
            <input type ="text"/>
            <img src={closeImage} width="13px" height="13px"/>
        </div>
            <button className="buttonSearch"> Buscar</button>
         
          <div className="productImage"> Imagen producto</div>
        <div className="frameAtributes">
            <h3 className="productCodeText"> letra pequenia codigo del producto</h3>
            <h1 className="productTitleText"> Titulo del producto</h1>
            <h2 className="productAtributesText"> Descripcion</h2>
            <h2 className="productAtributesText"> Descripcion</h2>
            <h2 className="productAtributesText"> Descripcion</h2>
            <h2 className="productAtributesText"> Descripcion</h2>
            <h2 className="productAtributesText"> Descripcion</h2>
        </div>
        </div>
    </>
  );
};


export default Results;