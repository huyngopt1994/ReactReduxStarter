import {getMessages} from "../static-data";
import {SEND_MESSAGE} from "../constants/action-types";

import _ from "lodash";
export default function messages(state = getMessages(10), action) {
    console.log(action);
    console.log(state);
    switch (action.type){
        case SEND_MESSAGE:
            const { message, userId} = action.payload;
            const allUserMsgs = state[userId];
            // get the last of key  in allUserMsgs and plust 1
            const number = +_.keys(allUserMsgs).pop() +1;
            console.log(number);
            console.log(state);
            return {
                ...state,
                [userId]: {
                    ...allUserMsgs,
                    [number]:{
                        number,
                        text:message,
                        is_user_msg:true
                    }
                }
            };
        default:
            return state;
    }
};
