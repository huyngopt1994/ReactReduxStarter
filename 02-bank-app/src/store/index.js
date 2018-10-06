import {createStore} from "redux";
import {reducer} from "../reducers";

const init_state = {
    username: "Janny",
    totalAmount: 2500701
};

export const store = createStore(reducer, init_state);
