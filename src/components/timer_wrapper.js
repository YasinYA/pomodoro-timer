import React from 'react';
import WorkTimer from './work_timer';
import BreakTimer from './break_timer';


export default class Timer extends React.Component {

    render() {
        return (
            <div className="div timer">
                <button type="button" id="start" onClick={this.props.startCountDown} className="btn-start add-class">Start</button>
                <button type="button" id="Stop" onClick={this.props.stopCountDown} className="btn-stop add-class">Stop</button>
                <div className="countdown">
                    {
                        this.props.tFB
                        ?
                        <BreakTimer
                            breakTime={this.props.breakTime}
                            tBF={this.tFB}
                        />
                        :
                        <WorkTimer
                            workTime={this.props.workTime}
                            countDownStarted={this.props.countDownStarted}
                            countDownStopped={this.props.countDownStopped}
                            countDownReseted={this.props.countDownReseted}
                        />
                    }
                </div>
                <button type="button" id="reset" onClick={this.props.resetCountDown} className="btn-reset add-class">reset</button>
            </div>
        )
    }
}
