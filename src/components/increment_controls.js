import React from 'react';


class Duration extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            workTime: !props.workTime ? 25 : props.workTime,
            breakTime: !props.breakTime ? 5 : props.breakTime,
            step: !props.step ? 5 : props.step
        };
    }

    increment(event) {
        if(this.props.workTime) {
            this.setState({workTime: this.state.workTime + this.state.step});
        }else {
            this.setState({breakTime: this.state.breakTime + this.state.step});
        }
    }

    decrement(event) {
        if(this.props.workTime && this.state.workTime > this.state.step) {
            this.setState({workTime: this.state.workTime - this.state.step});
        } else if(this.props.breakTime && this.state.breakTime > this.state.step) {
            this.setState({breakTime: this.state.breakTime - this.state.step});
        }
    }

    render() {
        return !this.props.workTime
        ?
        (
            <div className="div section1">
                <p className="breaktime-1 white-text">{this.state.breakTime}</p>
                <div className="inner-div inner-1">
                    <button id="inner1" type="button" className="btn" onClick={
                        (e) => this.increment(e, 'breakTime', this.state.step)
                    }>+</button>
                </div>
                <div className="inner-div inner-2">
                    <button id="inner2" type="button" className="btn" onClick={
                        (e) => this.decrement(e, 'breakTime', this.state.step)
                    }>-</button>
                </div>
            </div>
        )
        :
        (
            <div className="div section1">
                <p className="breaktime-1 white-text">{this.state.workTime}</p>
                <div className="inner-div inner-1">
                    <button id="inner1" type="button" className="btn" onClick={
                        (e) => this.increment(e, 'workTime', this.state.step)
                    }>+</button>
                </div>
                <div className="inner-div inner-2">
                    <button id="inner2" type="button" className="btn" onClick={
                        (e) => this.decrement(e, 'workTime', this.state.step)
                    }>-</button>
                </div>
            </div>
        )
    }
}


export default class IncrementControls extends React.Component {
    render() {
        return (
            <div className="increment-controls">
                <Duration workTime={25} step={5} />
                <Duration breakTime={5} step={5} />
            </div>
        )
    }
}
