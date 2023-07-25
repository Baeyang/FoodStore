function nameReducer(state ='' , action) {
    console.log(state,action)
    switch (action.type) {
        case "SEARCH_NAME":
            return action.name;
        default:
            return state
    }
}

export default nameReducer