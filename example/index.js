import Timer from '../src/index.js' // 'react-timer'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {

    render () {

        const timerStyle = {
            margin: "0px",
            padding: "1em"
        };

        const buttonsStyle = {
            display: "flex"
        };

        const buttonStyle = {
            background: "#fff",
            color: "#8e44ad",
            borderRadius: "30px",
            border: "1px solid #8e44ad",
            margin: "0 5px",
            padding: "10px 40px",
            fontWeight: "400",
            width: "100%",
            fontSize: 14,
            textTransform: "uppercase",
            letterSpacing: "0.42px",
            cursor: "pointer",
            textAlign: "center"
        };

        const secondsStyles = {
            fontSize: "64px",
            fontWeight: "400",
            lineHeight: "75px",
            margin: "0",
            color: "#312f2f",
            textAlign: 'center'
        };

        const OPTIONS = {
            delay: 1000,
            autoplay: false,
            startTime: 0,
            play: 'Старт',
            pause: 'Пауза',
            reset: 'Очистить',
            rippleColor: "#ffffff40",
            rippleDuring: 1000
        };

        return (
            <Timer
                // updateTimer={this.updateTimer}
                options={OPTIONS}
                timerStyle={timerStyle}
                buttonsStyle={buttonsStyle}
                buttonStyle={buttonStyle}
                secondsStyles={secondsStyles}
            />
        )
    }
}

ReactDOM.render( <TestComponent />, document.getElementById('root') );