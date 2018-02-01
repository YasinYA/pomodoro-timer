export const STARTCOUNTDOWN = 'STARTCOUNTDOWN';
export const STOPCOUNTDOWN = 'STOPCOUNTDOWN';
export const RESETCOUNTDOWN = 'RESETCOUNTDOWN';


export const startCountDown = () => {
    return {
        type: STARTCOUNTDOWN
    };
};

export const stopCountDown = () => {
    return {
        type: STOPCOUNTDOWN
    };
};

export const resetCountDown = () => {
    return {
        type: RESETCOUNTDOWN
    };
};
