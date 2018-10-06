export const reducer =(state, action) =>{
    switch (action.type){
        case "DRAW_WITH":
            let current_amount =state.totalAmount;
            let new_amout = current_amount - parseInt(action.money)
            if (new_amout < 0){
                new_amout =0
            }
            return {
                ...state,
                totalAmount: new_amout
            };
        case "DRAW_ALL":
            return {
                ...state,
                totalAmount:0
            };
        default:
            return state;
        }



}
