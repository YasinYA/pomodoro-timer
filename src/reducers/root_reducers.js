import { combineReducers } from 'redux';
import timerReducer from './timer_reducer';
import periodControlReducer from './period_control_reducers';


export default combineReducers({
    periodControls: periodControlReducer,
    timer: timerReducer
});
