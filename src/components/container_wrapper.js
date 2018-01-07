import React from 'react';
import { connect } from 'react-redux';

import BreakTimePeriodControl from './breaktime_controls';
import WorkTimePeriodControl from './worktime_controls';
import Timer from './timer_wrapper';

import { incrementWorktime, decrementWorktime } from '../actions/work_time_actions';
import { incrementBreaktime, decrementBreaktime, timeForBreak } from '../actions/break_time_actions';
import { startCountDown, stopCountDown, resetCountDown } from '../actions/timer_actions';

const ControllersWrapper = (props) => {
    return (
        <div>
            <div className="increment-controls">
                <WorkTimePeriodControl
                    workTime={props.workTime}
                    increment={props.incrementWorktime}
                    decrement={props.decrementWorktime}
                />
                <BreakTimePeriodControl
                    breakTime={props.breakTime}
                    increment={props.incrementBreaktime}
                    decrement={props.decrementBreaktime}
                />
            </div>
            <Timer {...props} />
        </div>
    )
}


const mapStateToProps = (state) => {
    const { workTime, breakTime, step } = state.periodControls;
    const { countDownStarted, countDownStopped, countDownReseted, tFB } = state.timer;
    return {
        workTime,
        breakTime,
        step,
        countDownStarted,
        countDownStopped,
        countDownReseted,
        tFB,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        incrementWorktime: (event) => {
            dispatch(incrementWorktime());
        },
        decrementWorktime: (event) => {
            dispatch(decrementWorktime());
        },

        incrementBreaktime: (event) => {
            dispatch(incrementBreaktime());;
        },
        decrementBreaktime: (event) => {
            dispatch(decrementBreaktime());
        },
        startCountDown: (event) => {
            dispatch(startCountDown());
        },
        stopCountDown: (event) => {
            dispatch(stopCountDown());
        },
        resetCountDown: (event) => {
            dispatch(resetCountDown());
        },
        timeForBreak: (event) => {
            dispatch(timeForBreak());
        }
    }
};

const container = connect(
    mapStateToProps,
    mapDispatchToProps
)(ControllersWrapper)
export default container;
