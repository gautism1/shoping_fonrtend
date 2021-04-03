export default (state,action)=> {
    switch(action.type)
    {
        case 'add_to_cart':
           console.log(typeof state.data ,state.data)
          return { ...state,
            data:[].push(action.data)
          }
        default:
            return state;
    }   
}     