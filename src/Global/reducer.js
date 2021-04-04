export default (state,action)=> {
    switch(action.type)
    {
        case 'add_to_cart':
          let obj = state.data.find(product => product._id ==action.data._id);
console.log(obj);
if(!obj){
           return { ...state,
            data:[...state.data, action.data]
          }
        }
      
      
        default:
            return state;
    }   
}     