import user from "./user";
import contacts from "./contacts";
import {combineReducers} from "redux";

export default combineReducers({
    user,
    contacts,
});
