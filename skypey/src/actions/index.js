import { SET_ACTIVE_USER_ID } from "../constants/action-types";

// Take id an return an object with type.
export const setActiveUserId = id => ({
    type: SET_ACTIVE_USER_ID,
    payload:id
});
