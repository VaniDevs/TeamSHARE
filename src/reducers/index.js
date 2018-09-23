import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { authReducer, userInfoReducer } from "./authReducer";
import { agencyReducer } from "./agencyReducer";
import { clientReducer } from "./clientReducer";

const rootReducer = combineReducers({
    form: formReducer,
    currentUser: authReducer, 
    userInfo: userInfoReducer,
    agency: agencyReducer,
    client: clientReducer
})

export default rootReducer;