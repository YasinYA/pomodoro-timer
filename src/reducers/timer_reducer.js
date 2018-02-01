import { BREAKTIME } from '../actions/break_time_actions';
import { STARTCOUNTDOWN, STOPCOUNTDOWN, RESETCOUNTDOWN } from '../actions/timer_actions';


export default function timerReducer (state = {}, action) {
    switch (action.type) {
        case STARTCOUNTDOWN:
            return {
                ...state,
                countDownStarted: true,
                countDownReseted: false,
                countDownStopped: false
            }
        case STOPCOUNTDOWN:
            return {
                ...state,
                countDownStopped: true,
                countDownReseted: false,
                countDownStarted: false
            }
        case RESETCOUNTDOWN:
            return {
                ...state,
                countDownReseted: true,
                countDownStopped: false,
                countDownStarted: false
            }
        case BREAKTIME:
            return {
                ...state,
                tFB: action.data
            }
        default:
            return state;
    }
};
