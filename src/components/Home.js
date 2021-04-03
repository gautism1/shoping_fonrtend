import React,{useState,useEffect,lazy} from 'react';
import '../style/home.css';
const axios = require('axios');
const Productdetails = lazy(() => import("./productdetails."));


function Home () {

    const [products, setProduct] = useState([]);

    useEffect(() => {
    axios.get('http://localhost:5000/shopList').then((res) => {
       
        setProduct(res.data);
    }).catch((err)=>
    {
        console.log(err,"error found during fetching")
    })
},[]);

    return <>
    <p>Products</p>
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