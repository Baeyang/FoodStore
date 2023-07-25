const filterReducer = (state = 'all' , action) => {
    switch (action.type) {
        case 'FILTER_OPTION':
            return action.cagetory.category
        default:
            return state
    }
}

export default filterReducer