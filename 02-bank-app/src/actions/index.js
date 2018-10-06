// We should set 2 actions : draw with and get all
export const draw_with = (money) => {
    return {
        type: "DRAW_WITH",
        money: money
    }
};

export const draw_all = () => {
    return {
        type: "DRAW_ALL",
    }
};

