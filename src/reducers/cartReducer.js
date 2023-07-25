import { getCookie, setCookie } from "../helper/Cookie";
const cookieState = getCookie('cart') ? JSON.parse(getCookie('cart')):[]
const cartReducer = (state=cookieState,action) => {
    var newState = [...state]
    switch (action.type) {
        case "ADD_TO_CART":
            // return [
            //     ...state, 
            //     {
            //         id: action.id,
            //         quantity : 1,
            //         info : action.info
            //     }
            // ]

            const newItem = {
                id: action.id,
                quantity: 1,
                info: action.info,
                isChecked : false
              };
              newState.push(newItem);
              setCookie('cart', JSON.stringify(newState),1)
              return newState;  
        case "UPDATE_CART":
            const itemUpdate = newState.find(item=> item.id === action.id)
            itemUpdate.quantity  = itemUpdate.quantity + action.quantity
            setCookie('cart', JSON.stringify(newState),1)
            return newState

        case "DELETE_ITEM":
            newState = newState.filter(item => item.id !== action.id)
            setCookie('cart', JSON.stringify(newState),1)
            return newState    

        case "DELETE_CART":
            newState = []
            setCookie('cart', JSON.stringify(newState),1)
            return newState
        default:
            return state;


    }
    
}

export default cartReducer