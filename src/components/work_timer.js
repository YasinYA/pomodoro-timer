import React from 'react';


export default class WorkTimer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            ...props,
            minutes: 0,
            seconds: 0,
        };
        this.workTimeInSeconds = this.state.workTime * 60;
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
        if(nextProps.workTime !== this.props.workTime){
            this.setState({
                workTime: nextProps.workTime,
            }, this.reset);
        } 

        if (nextProps.countDownStarted !== this.props.countDownStarted){
            this.setState({
                countDownStarted: nextProps.countDownStarted
            }, this.startCountDown);
        } 

        if (nextProps.countDownStopped !== this.props.countDownStopped){
            this.setState({
                countDownStopped: nextProps.countDownStopped
            }, this.stopCountDown);
        } 

        if (nextProps.countDownReseted !== this.props.countDownReseted){
            this.setState({
                countDownReseted: nextProps.countDownReseted
            }, this.resetingCountDown);
        }
    }

    startCountDown = () => {
        if(this.state.countDownStarted) {
            this.countItDown = true;
            // workTime in seconds
            let minutes = Math.floor(this.workTimeInSeconds / 60);
            let seconds = this.workTimeInSeconds % 60;

            if(this.workTimeInSeconds > 0) {
                if(seconds < 10) {
                    seconds = '0' + seconds;
                }
                this.workTimeInSeconds-=1;
                this.timer = setTimeout(this.startCountDown, 1000);
            } else if (this.workTimeInSeconds === 0) {
                clearTimeout(this.timer);
                this.state.timeForBreak();
            }

            this.updateState(minutes, seconds);
        }
    }

    stopCountDown = () => {
        if(this.state.countDownStopped) {
            clearTimeout(this.timer);
            this.countItDown = false;
        }
    }

    reset = () => {
        this.updateState();
        this.workTimeInSeconds = this.state.workTime * 60;
        this.countItDown = false;
    }

    resetingCountDown = () => {
        if(this.state.countDownReseted) {
            this.reset();
        }
    }

    render() {
        return (
            <p id="countdown-time" className="text-center">
                {
                    this.countItDown
                    ?
                    `${this.state.minutes}:${this.state.seconds}`
                    :
                    `${this.state.workTime}:${this.state.seconds}`
                }
            </p>
        )
    }
}
