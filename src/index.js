import React, { Component } from 'react'
import SecondsTohhmmss from './SecondsTohhmmss'
import PropTypes from 'prop-types'
import Ripple from '@intereact/ripple';

let offset = null, interval = null;
const defaultTime = '00:00:00';

/**
* Timer module
* A simple timer component.
**/
export default class Index extends Component {

  state = {
    clock: this.props.options.startTime || 0,
    time: SecondsTohhmmss(this.props.options.startTime / 1000)
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
        time: SecondsTohhmmss(nextProps.options.startTime / 1000)
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
      interval = setInterval(this.update, this.props.options.delay)
    }
  }

  reset() {
    let clockReset = 0;
    let time = SecondsTohhmmss(clockReset / 1000)
    this.setState({clock: clockReset, time: time })
    this.pause()
  }

  update = () => {
    const {options, updateTimer} = this.props;

    let clock = this.state.clock;
    clock += options.delay;
    let time = SecondsTohhmmss(clock / 1000)
    this.setState({clock: clock, time: time })

    updateTimer && updateTimer(clock)
  };

  render() {
    const { timerStyle, secondsStyles, buttonsStyle, buttonStyle, prefix, options } = this.props;
    const { play, pause, reset, ripple } = options;

    return (
      <div style={timerStyle} className="react-timer">
      <h3 style={secondsStyles} className="seconds"> {this.state.time || defaultTime} {prefix}</h3>
      <br />
      <div style={buttonsStyle} className="react-timer__buttons">

      {reset && <Ripple {...ripple}>

        { (ripples) => (
          <button className="react-timer__button"
          style={{...buttonStyle, position: 'relative'}}
          onClick={this.reset.bind(this)}>
          {reset}
          { ripples }
          </button>
        ) }

        </Ripple>}

        {play && <Ripple {...ripple}>

          { (ripples) => (
            <button className="react-timer__button"
            style={{...buttonStyle, position: 'relative'}}
            onClick={this.play.bind(this)}>
            {play}
            { ripples }
            </button>
          ) }

          </Ripple>}

          {pause && <Ripple {...ripple}>

            { (ripples) => (
              <button className="react-timer__button"
              style={{...buttonStyle, position: 'relative'}}
              onClick={this.pause.bind(this)}>
              {pause}
              { ripples }
              </button>
            ) }

            </Ripple>}
            </div>
            </div>
          )
        }
      }
