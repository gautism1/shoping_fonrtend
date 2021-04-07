export default (state,action)=> {
    switch(action.type)
    {
        case 'add_to_cart':
             let obj = state.data.find(product => product._id ==action.data._id);
             
            if(!obj){
             return { ...state,
            data:[...state.data, action.data]
          }
        }
        else 
        { alert("Item has been already added to cart")
          return{
          data:[...state.data]
        }}
        case 'remove_from_cart':
          let obj1 =state.data.find(product => product._id==action.data);

            let index = state.data.map(function(item) {
                    return item._id
                }).indexOf(action.data);
               state.data.splice(index-1, 1); 
            
           return { ...state,
            data:[...state.data]
          
        }
        default:
            return state;
    }   
}     