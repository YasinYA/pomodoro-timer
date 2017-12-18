import React from 'react';
import {render} from 'react-dom';

import style from './main.scss';


export default class App extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="white-text">Pomodoro Timer.</h1>
                </div>
            </div>
        )
    }
}

render(<App />, document.getElementById('app'))
