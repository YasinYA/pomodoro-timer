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
        this.startCountDown();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.breakTime !== this.props.breakTime){
            this.setState({
                breakTime: nextProps.breakTime
            }, this.resetCountDown);
        }
    }

    startCountDown = () => {
        if(this.state.tBF) {
            this.countItDown = true;
            let minutes = Math.floor(this.breakTimeInSeconds / 60);
            let seconds = this.breakTimeInSeconds % 60;

            if(this.breakTimeInSeconds > 0) {
                if(seconds < 10) {
                    seconds = '0' + seconds;
                }
                this.breakTimeInSeconds-=1;
                this.timer = setTimeout(this.startCountDown, 1000);
            } else if (this.breakTimeInSeconds === 0) {
                clearTimeout(this.timer);
                this.state.stopCountDown();
                this.state.timeForBreak(false);
                // this return statement prevents calling the updateState function
                // after this else if block.
                return true;
            }
            this.updateState(minutes, seconds);
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
                    `${this.state.breakTime}:${this.state.seconds}`
                }
                <br/>
                Break Time!!!
            </p>
        )
    }
}
