import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import ControllersWrapper from './components/container_wrapper';
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
                            <ControllersWrapper />
                        </div>
                    </div>
                </div>
            </Provider>
        )
    }
}

render(<App />, document.getElementById('app'))
