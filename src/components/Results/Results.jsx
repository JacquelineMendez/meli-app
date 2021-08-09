import React from "react";
import { Header } from "../Utilities/Header/Header";
import lupaImage from "../Search/lupa.png";
import closeImage from "./close.png";
import  "./styles/styles.scss";

const Results = () => {

  const [products, setProducts] = useState([]);
  const callAPI = async () => {
      try {
          const url = 'http://localhost:3001/api/products';
          const response = await fetch(url);
          const out = await response.json();
          return out.data;
      } catch (e) {
          console.log('error:', e);
      }
  };
  useEffect(() => {
      console.log("Fetch API")
      callAPI().then((data) => {
          setProducts(data);
      });
  }, []);

{products.map((product) => (
    <Episode id={product.id} title={product.title} img={product.pictures.source} codeProd={product.category_id}
    attOne={product.attributes.value_name} attTwo={product.condition} attThree={product.price} attFour={product.available_quantity} attFive={product.buying_mode} 
    
    />
))
}
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
         
          <div className="productImage">{img}</div>
        <div className="frameAtributes">
            <h3 className="productCodeText"> Codigo del producto:{codeProd}</h3>
            <h1 className="productTitleText">{title}</h1>
            <h2 className="productAtributesText"> {attOne}</h2>
            <h2 className="productAtributesText"> Condicion:{attTwo}</h2>
            <h2 className="productAtributesText"> Precio:{attThree}</h2>
            <h2 className="productAtributesText"> Disponibles{attFour}</h2>
            <h2 className="productAtributesText"> Modo de compra:{attFive}</h2>
        </div>
        </div>
    </>
  );
};


export default Results;