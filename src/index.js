import React, { Component } from 'react'
import SecondsTohhmmss from './SecondsTohhmmss'
import PropTypes from 'prop-types'
import Ripple from '@intereact/ripple';

let offset = null, interval = null;
const defaultTime = '00:00:00';
const delay = 1000;

/**
* Timer module
* A simple timer component.
**/
export default class Index extends Component {

  state = {
    clock: this.props.options.startTime || 0,
    time: SecondsTohhmmss(this.props.options.startTime / delay)
  };

  componentDidMount() {
    if(this.props.autoplay) {
      this.play()
    }
  }

  componentWillUnmount() {
    this.pause()
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.options.startTime !== this.props.options.startTime) {
      this.setState({
        clock: nextProps.options.startTime,
        time: SecondsTohhmmss(nextProps.options.startTime / delay)
      })
    }
  }

  pause() {
    if (interval) {
      clearInterval(interval)
      interval = null
    }
  }

  play() {
    if (!interval) {
      offset = Date.now()
      interval = setInterval(this.update, delay)
    }
  }

  reset() {
    let clockReset = 0;
    let time = SecondsTohhmmss(clockReset / delay)
    this.setState({clock: clockReset, time: time })
    this.pause()
  }

  update = () => {
    const {updateTimer} = this.props;

    let clock = this.state.clock;
    clock += delay;
    let time = SecondsTohhmmss(clock / delay)
    this.setState({clock: clock, time: time })

    updateTimer && updateTimer(clock)
  };

  _renderButtons = (type, func) => {
    const { buttonStyle, options } = this.props;
    const { ripple } = options;

    return <Ripple {...ripple}>

        { (ripples) => (
          <button className="react-timer__button"
          style={{...buttonStyle, position: 'relative'}}
          onClick={func}>
          {type}
          { ripples }
          </button>
        ) }

    </Ripple>
  };

  render() {
    const { timerStyle, secondsStyles, buttonsStyle, prefix, options } = this.props;
    const { play, pause, reset } = options;

    return (
      <div style={timerStyle} className="react-timer">
      <h3 style={secondsStyles} className="seconds"> {this.state.time || defaultTime} {prefix}</h3>
      <br />
      <div style={buttonsStyle} className="react-timer__buttons">

      {reset && this._renderButtons(reset, this.reset.bind(this))}
      {play && this._renderButtons(play, this.play.bind(this))}
      {pause && this._renderButtons(pause, this.pause.bind(this))}

      </div>
      </div>
    )
  }
}
