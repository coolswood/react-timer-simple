let SecondsTohhmmss = function(totalSeconds) {
  let days    = Math.floor(totalSeconds / 86400);
  let hours;
  if(days >= 1) {
    hours = Math.floor((totalSeconds - days * 86400) / 3600);
  } else {
    hours = Math.floor(totalSeconds  / 3600);
  }

  let minutes = Math.floor((totalSeconds - (Math.floor(totalSeconds / 3600) * 3600)) / 60);
  let seconds =  Math.ceil(totalSeconds - (Math.floor(totalSeconds / 3600) * 3600) - (minutes * 60), 1);

  // round seconds
  seconds = Math.round(seconds * 100) / 100
  let result;

    if(days >= 1) {
      result = (days < 10 ? "0" + days : days);
      result += ":" + (hours < 10 ? "0" + hours : hours);
    } else {
      result = (hours < 10 ? "0" + hours : hours);
    }

    result += ":" + (minutes < 10 ? "0" + minutes : minutes);
    result += ":" + (seconds  < 10 ? "0" + seconds : seconds);
  return result;
}

module.exports = SecondsTohhmmss;
