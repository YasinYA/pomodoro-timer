export const INCREMENT_BREAK_TIME = 'INCREMENT_BREAK_TIME';
export const DECREMENT_BREAK_TIME = 'DECREMENT_BREAK_TIME';
export const BREAKTIME = 'BREAKTIME';


export const incrementBreaktime = () => {
    return {
        type: INCREMENT_BREAK_TIME
    };
};

export const decrementBreaktime = () => {
    return {
        type: DECREMENT_BREAK_TIME
    };
};

export const timeForBreak = (data) => {
    return {
        type: BREAKTIME,
        data: data
    };
};
