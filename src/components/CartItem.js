import React, { useState, useEffect, useContext } from "react";
import '../style/cart.css';
import { GlobalContext } from "../Global/GlobalState";
 
function CartItem (props) {
 
        const {remove} =useContext(GlobalContext);
            
        function removefromcart()
        {
                remove(props.product._id);
        }
    return (
    <div className="cart-div">
     
     <div className="cart-product">
      <div className="content">
       <img src={props.product.image_url ? props.product.image_url : 'https://fakeimg.pl/200*200'} className="img" alt="Product-image" />
    <div className="product-detail">
       <div>  {props.product.product_name}  </div>
        <div className="product-price">    ₹ {props.product.price}    </div>    

        <p className="product-desc">      {props.product.desciption}     </p>
        <div className="product-reviews"> Total-Reviews : {props.product.total_reviews}</div>
                 <div className="product-sku">  S.K.U  :    {props.product.sku}</div>
   </div>       
   </div>       
<div className="pay">
        <div class="button-div">       
        <button className="cart-button-remove" onClick={removefromcart}>      Remove    </button>
        </div>            
  </div>
</div>
       
    </div>
    )
}

export default CartItem;      