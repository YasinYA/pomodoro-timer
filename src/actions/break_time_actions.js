export const INCREMENT_BREAK_TIME = 'INCREMENT_BREAK_TIME';
export const DECREMENT_BREAK_TIME = 'DECREMENT_BREAK_TIME';


export const incrementBreaktime = (step) => {
    return {
        type: INCREMENT_BREAK_TIME,
        step: step
    }
}

export const decrementBreaktime = () => {
    return {
        type: DECREMENT_BREAK_TIME,
    }
}
