import React ,{ useState, useEffect, useContext } from 'react';
import '../style/productdetails.css';
import { GlobalContext } from "../Global/GlobalState";


function  Productdetails(props) {
 
      const {addToCart} = useContext( GlobalContext );  
            let addtocart=()=>addToCart(props.product);
          
    return( 
    
    <div className="productdetails">       
          <div className="image-div">
                 <div className="image">
                 <img src={props.product.image_url ? props.product.image_url : 'https://hotroast.net/imgp/pimgp/a/einstei1/p/image-not-found-shitpostfriday/0x0/https://img.whaleshares.io/wls-img/einstei1/d765e65f432e7e6f0d062616d19364ecdc5631da.png'} className="img" alt="Product-image" />
                 </div>
          </div>
          <div>
                <div className="product-details">
                   <div className="product-name">       {props.product.product_name}</div>    
                   <div className="product-price">    ₹ {props.product.price}</div>
                <div className="product-rating">Rated :  {props.product.rating}.. Pieces-out  {props.product.total_bought}</div>
                <p className="product-desc">   {props.product.description}</p>
                <div className="product-reviews"> Total-Reviews : {props.product.total_reviews}</div>
                 <div className="product-sku">  S.K.U  :    {props.product.sku}</div>
                 <div className="product-sku"> Category   {props.product.category}</div>
                </div> 
                <button className="cart-button" onClick={()=>addtocart()}>
                      Add to Cart
                </button>
          </div>
    </div>)
}

export default Productdetails;