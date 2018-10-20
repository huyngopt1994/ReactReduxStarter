import {SEND_MESSAGE, SET_TYPING_VALUE} from "../constants/action-types";

export default function typing(state= "", action) {
    console.log(action);
    console.log(state);
    switch (action.type){
        case SET_TYPING_VALUE:
            return action.payload;
        case SEND_MESSAGE:
            return "";
        default:
            return state;
    }
    
}
