import React, { useState, useEffect, useContext } from "react";
import '../style/home.css';
import { GlobalContext } from "../Global/GlobalState";
 
function Cart () {
              const {initialstate} =useContext(GlobalContext);
              const [products,setProducs]=useState([]);
              
              useEffect(() => {
                 setProducs(initialstate);
                 console.log(products)
            },[]);
    return <div className="">
      <p>Items in your Cart</p>
      <div>
          { products  && products.length && 
            products.map((product,index)=>(
          <div key={index}>{products.product_name}</div>
         ))
        }
      </div>
    </div>
}

export default Cart;      