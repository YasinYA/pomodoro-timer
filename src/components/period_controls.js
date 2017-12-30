import React from 'react';
import { connect } from 'react-redux';
import BreakTimePeriodControl from './breaktime_controls';
import WorkTimePeriodControl from './worktime_controls';
import { incrementWorktime, decrementWorktime } from '../actions/work_time_actions';
import { incrementBreaktime, decrementBreaktime } from '../actions/break_time_actions';


const PeriodControls = (props) => {
    return (
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
    )
}


const mapStateToProps = (state) => {
    return {
        ...state
    }
}

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
        }
    }
}

const PeriodControl = connect(
    mapStateToProps,
    mapDispatchToProps
)(PeriodControls)
export default PeriodControl
