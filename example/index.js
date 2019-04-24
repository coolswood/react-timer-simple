import Timer from '../src/index.js' // 'react-timer-simple'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

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
    textAlign: "center",
    outline: "none"
};

const secondsStyles = {
    fontSize: "64px",
    fontWeight: "400",
    lineHeight: "75px",
    margin: "0",
    color: "#312f2f",
    textAlign: 'center'
};

const overTime = {
    fontSize: "64px",
    fontWeight: "400",
    lineHeight: "75px",
    margin: "0",
    color: "rgb(232, 79, 100)",
    textAlign: 'center'
};

const limitStyle = {
    position: 'absolute',
    top: 20,
    right: 20,
    color: "#312f2f",
    fontWeight: "400",
    fontSize: "20px"
};

const OPTIONS = {
    autoplay: false,
    startTime: 0,
    limit: 5000,
    play: 'play',
    pause: 'pause',
    reset: 'reset',
    ripple: {
        enterDuration: 400,
        exitDuration: 400,
        size: "cover"
    }
};

class TestComponent extends Component {

    render () {

        return (
            <div className="timer-wrap">
                <Timer
                    options={OPTIONS}
                    timerStyle={timerStyle}
                    buttonsStyle={buttonsStyle}
                    buttonStyle={buttonStyle}
                    secondsStyles={secondsStyles}
                    limitStyle={limitStyle}
                    overTime={overTime}
                />
            </div>
        )
    }
}

ReactDOM.render( <TestComponent />, document.getElementById('root') );
