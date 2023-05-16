import React from "react";
import { useDispatch } from "react-redux";
import "./components/mainStyles.css";
import { useSelector } from "react-redux";

const App = () => {
  const productList = useSelector(state => state.items);
  const dispatch = useDispatch();
  const fetchingDataProduct = () => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.products);
        const response = data.products;
        dispatch({ type: "ADD_PRODUCTS", items: response });
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
      console.log(productList);
  };
  return (
    <div className="main-styles">
      <h1>Product Aplication</h1>
      <label className="label-1">Add Product:</label>
      <input className="input-1" type="text" />
      <button className="btn-1" onClick={fetchingDataProduct}>Add product</button>
      <button className="btn-2" >Remove product</button>
      <div>{productList}</div>
    </div>
  );
};

export default App;
