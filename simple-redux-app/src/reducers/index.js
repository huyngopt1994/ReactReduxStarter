// try to update this reducer we will update state depend on action
export default (state, action) => {
    switch (action.type){
        case "SET_TECHNOLOGY":
            // do something
            return {
                ...state,
                tech: action.tech
            };

        default:
            return state;
    }

}
