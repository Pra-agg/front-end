import userReducer  from "./user.reducer";
import { combineReducers } from "redux"
import authReducer from "./auth"
import productReducer from "./products.reducer";
import categoryReducer from "./category.reducer";
import orderReducer from "./products.reducer"
const rootReducer = combineReducers({
    auth:authReducer,
    user:userReducer,
    category:categoryReducer,
    order:orderReducer,
    product:productReducer
});

export default rootReducer;