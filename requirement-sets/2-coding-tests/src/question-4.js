class Time {
  constructor(hours, minutes, seconds) {
    [this.hours, this.minutes, this.seconds] = Time.normalizeTime({
      hours,
      minutes,
      seconds,
    });
  }

  scale(seconds) {
    const [addHours, addMinutes, addSeconds] = Time.normalizeTime({
      seconds: seconds,
    });

    const newHours = (this.hours += addHours);
    const newMinutes = (this.minutes += addMinutes);
    const newSeconds = (this.seconds += addSeconds);

    [this.hours, this.minutes, this.seconds] = Time.normalizeTime({
      hours: newHours,
      minutes: newMinutes,
      seconds: newSeconds,
    });
  }

  timeString() {
    return `${String(this.hours).padStart(2, "0")}:${String(
      this.minutes
    ).padStart(2, "0")}:${String(this.seconds).padStart(2, "0")}`;
  }

  static normalizeTime = ({ hours = 0, minutes = 0, seconds = 0 }) => {
    let totalSeconds = 3600 * hours + 60 * minutes + seconds;

    const displayHours = Math.floor(totalSeconds / 3600);

    totalSeconds = totalSeconds % 3600;

    const displayMinutes = Math.floor(totalSeconds / 60);
    const displaySeconds = totalSeconds % 60;

    return [displayHours, displayMinutes, displaySeconds];
  };
}

module.exports = Time;
