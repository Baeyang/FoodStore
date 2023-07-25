import {combineReducers} from "redux"
import loginReducer from "./loginReducer"
import cartReducer from "./cartReducer"
import filterReducer from "./filterReducer"
import nameReducer from "./nameReducer"
import priceReducer from "./priceReducer"

const allReducers = combineReducers({
    loginReducer,cartReducer,filterReducer,priceReducer,nameReducer,
})

export default allReducers