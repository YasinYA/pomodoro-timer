export const INCREMENT_WORK_TIME = 'INCREMENT_WORK_TIME';
export const DECREMENT_WORK_TIME = 'DECREMENT_WORK_TIME';


export const incrementWorktime = () => {
    return {
        type: INCREMENT_WORK_TIME,
    }
}

export const decrementWorktime = (step) => {
    return {
        type: DECREMENT_WORK_TIME,
        step: step
    }
}
