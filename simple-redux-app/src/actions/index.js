// action => when we get the text return type of Action and information
// action should we 2 infors : 1 type : 2 data
export const setTechnology = (text) => {
    return {
        type: "SET_TECHNOLOGY",
        text: text
    }
};
