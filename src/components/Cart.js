import React, { useState, useEffect, useContext } from "react";
import '../style/home.css';
import { GlobalContext } from "../Global/GlobalState";
 
function Cart () {
              const {productlist} =useContext(GlobalContext);
              
    return <div className="">
      <p>Items in your Cart</p>
      <div>
          { productlist  && productlist.length && 
            productlist.map((product,index)=>(
          <div key={index}> Hello{product.product_name}</div>
         ))
        }
      </div>
    </div>
}

export default Cart;      