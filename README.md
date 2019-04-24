# react-timer-simple

[![Maintainability](https://travis-ci.org/coolswood/react-timer-simple.svg?branch=master)](https://travis-ci.org/coolswood/react-timer-simple.svg?branch=master)
[![Maintainability](https://badge.fury.io/js/react-timer-simple.svg)](https://badge.fury.io/js/react-timer-simple.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/99a072a5ec6206373611/maintainability)](https://codeclimate.com/github/coolswood/react-timer-simple/maintainability)

Simple customized timer on React in material design. Has callbacks API.

![alt text](https://coolswood.github.io/npm/react-timer-simple/image.gif)

### Installation

```sh
$ npm i react-timer-simple
```

### DEMO

### [click](https://coolswood.github.io/projects/error-jurnal)

### Usage

Import timer to your project.

```javascript
import Timer from 'react-timer-simple';
```

```javascript
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
        startTime: 0, // milliseconds
        limit: 5000, // If the time is greater than the limit, the main timer will change the styles. You can, for example, paint it red (milliseconds)
        play: 'play', // button name. If not set, the button will not appear
        pause: 'pause', // button name. If not set, the button will not appear
        reset: 'reset', // button name. If not set, the button will not appear
        ripple: { // Ripple lib https://www.npmjs.com/package/@intereact/ripple
            enterDuration: 400,
            exitDuration: 400,
            size: "cover"
        }
    };

<Timer
    options={OPTIONS}
    timerStyle={timerStyle}
    buttonsStyle={buttonsStyle}
    buttonStyle={buttonStyle}
    secondsStyles={secondsStyles}
    limitStyle={limitStyle}
    overTime={overTime}
 />
```
