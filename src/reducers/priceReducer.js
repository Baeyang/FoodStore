const priceReducer = (state = 'Default' , action) => {
    switch (action.type) {
        case "SET_PRICE":
            return action.value
    
        default:
            return state
    }
}

export default priceReducer