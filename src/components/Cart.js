import React, { lazy,useState, useEffect, useContext } from "react";
import '../style/cart.css';
import { GlobalContext } from "../Global/GlobalState";
const CartItem = lazy(() => import("./CartItem"));

function Cart () {
              const {productlist} =useContext(GlobalContext);
              var sum=0;
                          
const [amount,setAmount] =useState(0);  
          
  
             useEffect(() => {
              for(let key in productlist)
              {
                if(productlist[key].price)
               sum=sum+productlist[key].price;
               setAmount(sum)
              }
            },[]);

            let updateprice=  function(price)
            {
              console.log("update",price)
              
              setAmount( price);
            }
    return (<div className="cart-div">
        <p>Items in your Cart</p> 
     
      <div className="pay">
         {  productlist && productlist.length>0   && <div>
          { 
            productlist.map((product,index)=>(
          <div > 
          <CartItem 
            product={product}  
            updateprice={updateprice}
          />
          </div>
              ))
        }
        </div>}
        { productlist.length>0 && <div className="checkout">
           
             <p>Total Amount  :
               <span> ₹ {amount} /- </span> </p>
            
             <button className="cart-button-pay"onCl >      Pay Now    </button>

               </div>}
      </div>
        <div>

        {
          !(productlist.length >0) &&
          <div>
            <br></br>
            Your Cart is empty
            <br>
            </br>
            Please add items
            </div>
        }
      </div>
    </div>
    )}

export default Cart;      