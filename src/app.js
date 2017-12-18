import React from 'react';
import {render} from 'react-dom';

import IncrementControls from './components/increment_controls';
import Timer from './components/timer';

import style from './main.scss';


export default class App extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="wrapper">
                        <h1 className="header">Pomodoro Clock</h1>
                        <IncrementControls />
                        <Timer />
                    </div>
                </div>
            </div>
        )
    }
}

render(<App />, document.getElementById('app'))
