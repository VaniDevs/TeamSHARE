import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
    form: formReducer,
    currentUser: authReducer, 
    userInfo: userInfoReducer
})

export default rootReducer;