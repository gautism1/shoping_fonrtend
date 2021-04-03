import React, {useState,useEffect, useContext } from "react";
import {
    Link
  } from "react-router-dom";
import '../style/nav.css';
import { GlobalContext } from "../Global/GlobalState";

function Nav()
{
  const {productlist} =useContext(GlobalContext);
            const [count,setCount]=useState(0);
          
            
console.log(count)
    return (
        <div>
        <div className="header">  
             <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/additem">Add Item</Link>
          </li>
          <li>
            <Link to="/cart">Cart   {count!=0 && <span> ({count})</span>}</Link>
          </li>
        </ul>
      <hr></hr>
  </div>
</div>
    )
}

export  default  Nav;