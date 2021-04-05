import React from 'react'
import '../style/additem.css';
const axios = require('axios');

function AddItem()
{
    
   let  submit =function(e)
   {
    e.preventDefault();
    var elements = document.getElementById("dataform").elements;
    var obj ={};
    for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
        obj[item.name] = item.value;
    }   
    
    axios.post("http://localhost:5000/shopList",obj).then((data)=>
        {
           alert("kudos !! Product details have been successfully uploaded ");
        }
    ).catch((err)=>
    {
        console.log(err,"error found");
        alert("Something went wrong");
    }
    )
       document.getElementById("dataform").reset();
   }
    return (<>
       <p>Product Item data List</p>
            <span>All fields are compulsory</span>
        <div className="additem">  
         
               <form  onSubmit={submit} id="dataform">
           
               <input type="text" id="name" name="product_name" placeholder ="Enter Product Name"required ></input>
               <br></br>
 
               <input type="number" id="price" name="price" placeholder ="Enter Price" required></input>
               <br></br>
                
               <input type="text" id="desc" name="description"  placeholder ="Enter Description"required ></input>
               <br></br>
               
               <input type="url" id="imageurl" name="imageurl" placeholder ="Enter ImageURLL" required></input>
               <br></br>
               
               <input type="text" id="sku" name="sku"  placeholder ="Enter SKU" required ></input>
               <br></br>
              
               <input type="number" id="reviews" name="total_revieews"  placeholder ="Enter Review" required ></input>
               <br></br>
             
               <input type="number" id="rating" name="rating" placeholder ="Enter Rating" required ></input>
               <br></br>
                
               <input type="number" id="bought" name="total_bought" placeholder ="Enter Buys"  ></input>
               <br></br>
              
               {/* <input type="text" id="category" name="category" placeholder ="Enter Category" ></input>
               <br></br> */}
               <p className="category">Category</p>
               <div className="category">
                    
                  
               <input type="radio" id="male" name="category" value="Charger"></input>
               <label for="male">Charger</label><br></br>
               <input type="radio" id="female" name="category" value="Mobile"></input>
               <label for="female">Mobile</label><br></br>
               <input type="radio" id="other" name="category" value="Watches"></input><br></br>
               <label for="other">Watches </label> 
               </div>
             <button type="submit" className="submit-form">Submit</button>  

               </form>
        </div>
        </>
    )
}
export default AddItem;