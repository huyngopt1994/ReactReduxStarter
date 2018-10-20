import {SET_ACTIVE_USER_ID, SET_TYPING_VALUE, SEND_MESSAGE} from "../constants/action-types";
// Take id an return an object with type.
export const setActiveUserId = id => ({
    type: SET_ACTIVE_USER_ID,
    payload: id
});

export const setTypingValue = value => ({
    type: SET_TYPING_VALUE,
    payload: value
});

export const sendMessage = (message, userId)  => ({
    type: SEND_MESSAGE,
    payload: {
        message,
        userId
    }
});
