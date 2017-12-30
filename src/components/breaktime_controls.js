import React from 'react';

const BreakTimePeriodControl = ({breakTime, increment, decrement}) => {
    return (
        <div className="div section1">
            <p className="breaktime-1 white-text">{breakTime}</p>
            <div className="inner-div inner-1">
                <button id="inner1" type="button" className="btn" onClick={increment}>+</button>
            </div>
            <div className="inner-div inner-2">
                <button id="inner2" type="button" className="btn" onClick={decrement}>-</button>
            </div>
        </div>
    )
}
export default BreakTimePeriodControl;
