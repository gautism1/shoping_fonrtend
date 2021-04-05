import React, { createContext , useReducer } from'react';
import AppReducer from './reducer';
const axios =require('axios');

const initialstate={
    data:[]
};

export const GlobalContext=createContext(initialstate);

export const GlobalProvider=  ({children})  =>  
{
    const [state,dispatch]=useReducer(AppReducer,initialstate);

    async function addToCart(product_details)
    {  
dispatch({
    type:"add_to_cart",
    data:product_details
})
    }
    async function remove(_id)
    {   
dispatch({
    type:"remove_from_cart",
    data:_id
}) 
    }
return (   
    <GlobalContext.Provider value={{
        productlist:state.data,
        addToCart,
        remove
    }}>
    {children}
    </GlobalContext.Provider>     
);
}
