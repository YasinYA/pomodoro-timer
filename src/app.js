import React from 'react'
import {render} from 'react-dom'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Pomodoro Timer</h1>
            </div>
        )
    }
}

render(<App />, document.getElementById('app'))