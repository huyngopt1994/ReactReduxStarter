import user from "./user";
import contacts from "./contacts";
import {combineReducers} from "redux";
import activeUserId from "./activateuserid"
export default combineReducers({
    user,
    contacts,
    activeUserId
});
