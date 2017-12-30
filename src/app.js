import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import PeriodControl from './components/period_controls';
import Timer from './components/timer';

import style from './main.scss';



export default class App extends React.Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (
            <Provider store={store}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="wrapper">
                            <h1 className="header">Pomodoro Clock</h1>
                            <PeriodControl />
                            <Timer />
                        </div>
                    </div>
                </div>
            </Provider>
        )
    }
}

render(<App />, document.getElementById('app'))
