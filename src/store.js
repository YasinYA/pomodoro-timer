import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import periodControlReducer from './reducers/period_control_reducers';


let middleware = [
    thunk,
    logger
];


const intialState = {
    workTime: 25,
    breakTime: 5,
    step: 5
};

const store = createStore(
    periodControlReducer,
    intialState,
    applyMiddleware(...middleware)
);

export default store;
