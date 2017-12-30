import { INCREMENT_WORK_TIME, DECREMENT_WORK_TIME } from "../actions/work_time_actions";
import { INCREMENT_BREAK_TIME, DECREMENT_BREAK_TIME } from "../actions/break_time_actions";


export default function periodControlReducer (state = {}, action) {
    switch (action.type) {
        case INCREMENT_WORK_TIME:
            return {
                ...state,
                workTime: state.workTime + state.step
            }
        case DECREMENT_WORK_TIME:
            return {
                ...state,
                workTime: state.workTime - state.step
            }
        case INCREMENT_BREAK_TIME:
            return {
                ...state,
                breakTime: state.breakTime + state.step
            }
        case DECREMENT_BREAK_TIME:
            return {
                ...state,
                breakTime: state.breakTime - state.step
            }
        default:
            return state;
    }
}
