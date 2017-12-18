import React from 'react';


export default class Timer extends React.Component {
    render() {
        return (
            <div className="div timer">
                <button type="button" id="start" className="btn-start add-class">Start</button>
                <button type="button" id="Stop" className="btn-stop add-class">Stop</button>
                <div className="countdown">
                    <p id="countdown-time"></p>
                </div>
                <button type="button" id="reset" className="btn-reset add-class">reset</button>
            </div>
        )
    }
}
