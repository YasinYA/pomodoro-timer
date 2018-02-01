import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import reducer from './reducers/root_reducers';


let middleware = [
    thunk,
    logger
];


const intialState = {
    periodControls: {
        workTime: 25,
        breakTime: 5,
        step: 5
    },
    timer: {
        countDownStarted: false,
        countDownStopped: false,
        countDownReseted: false,
        tFB: false
    }
};

const store = createStore(
    reducer,
    intialState,
    applyMiddleware(...middleware)
);

export default store;
