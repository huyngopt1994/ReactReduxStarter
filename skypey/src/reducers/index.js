import user from "./user";
import contacts from "./contacts";
import messages from "./message";
import typing from "./typing";
import {combineReducers} from "redux";
import activeUserId from "./activateuserid"

export default combineReducers({
    user,
    contacts,
    activeUserId,
    messages,
    typing
});
