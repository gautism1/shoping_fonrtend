import React,{useState,useEffect,lazy} from 'react';
import '../style/home.css';
const axios = require('axios');
const Productdetails = lazy(() => import("./productdetails."));


function Home () {

    const [products, setProduct] = useState([]);
    const [fakeproducts, setfakeProduct] = useState([]);
    
     useEffect(() => {
    axios.get('http://localhost:5000/shopList').then((res) => {
       
        setProduct(res.data);
        setfakeProduct(res.data);
    }).catch((err)=>
    {
        console.log(err,"error found during fetching")
    })
},[]);
 

function print(e)
{e.preventDefault();
    if(e.target.value !="all")
     { let obj = products.find(product =>product.category==e.target.value);
        setProduct(Object.entries(obj));  // obj is an object
        
     }
     if(e.target.value =="all")
     {
         
         setProduct(Object.entries(fakeproducts))
         console.log(fakeproducts)
     }
    }

    return <>
   <div className="categories"> <p>Products</p>
    {/* <div >
    <label for="cars"> Category    </label>

       <select name="cars" id="cars" className="select_category" onChange={print}>
            <option value="all" selected name="category">  All</option>
            <option value="0" name="category" >       Charger</option>
            <option value="1"  name="category">        Mobile</option>
            <option value="2"  name="category">         Laptop</option>     
        </select>
    </div>  */}
    </div> 
         <div className="products" >  
      {
      products && products.length>0 &&
        products.map((product, index)=>(  <div key={index}className="card-ui">
        <Productdetails
         product={product}
         index={index}
         /></div>))
      }
    </div>
    </>
}
    

export default Home;