import React from 'react';


export default class BreakTimer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            ...props,
            minutes: 0,
            seconds: 0
        };
        this.breakTimeInSeconds = this.state.breakTime * 60;
        this.countItDown = false;
    }

    updateState = (minutes = this.state.workTime, seconds = '00') => {
        this.setState({
            minutes: minutes,
            seconds: seconds
        });
    }

    componentDidMount() {
        this.updateState();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.breakTime !== this.props.breakTime){
            this.setState({
                breakTime: nextProps.breakTime
            }, this.resetCountDown);
        } else if (nextProps.tFB !== this.props.tFB){
            this.setState({
                tFB: nextProps.tFB
            }, startCountDown);
        }
    }

    startCountDown = () => {
        if(this.state.tFB) {
            let minutes = Math.floor(this.breakTimeInSeconds / 60);
            let seconds = this.breakTimeInSeconds % 60;

            if(this.breakTimeInSeconds > 0) {
                if(seconds < 10) {
                    seconds = "0" + seconds;
                }
                this.breakTimeInSeconds-=1;
                this.timer = setTimeout(this.startBTCountDown, 1000);
            } else if (this.breakTimeInSeconds === 0) {
                clearTimeout(this.timer);
                this.breaking = false;
            }
            this.updateState(minutes, seconds);
        }
    }

    stopCountDown = () => {
        clearTimeout(this.timer);
        this.countItDown = false;
    }

    resetCountDown = () => {
        this.updateState();
        this.breakTimeInSeconds = this.state.breakTime * 60;
        this.countItDown = false;
    }

    render() {
        return (
            <p id="countdown-time" className="text-center">
                {
                    this.countItDown
                    ?
                    `${this.state.minutes}:${this.state.seconds}`
                    :
                    `${this.state.breakTime}:${this.state.seconds}`
                }
                <br/>
                Break Time!!!
            </p>
        )
    }
}
