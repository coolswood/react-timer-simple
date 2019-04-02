# react-timer-simple

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

```javascript
import Timer from 'react-timer-simple';

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

    const OPTIONS = {
        delay: 1000,
        autoplay: false,
        startTime: 0,
        play: 'play',
        pause: 'pause',
        reset: 'reset',
        ripple: {
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
 />
```
