const NUM_SECONDS_IN_MINUTE = 60
const NUM_MINUTES_IN_HOUR = 60
const NUM_HOURS_IN_DAY = 24

class Time {
  constructor (hours, minutes, seconds) {
    const [tempHours, tempMinutes, tempSeconds] = this.normaliseTime(hours, minutes, seconds)

    this.hours = tempHours,
    this.minutes = tempMinutes,
    this.seconds = tempSeconds
  }

  normaliseTime (hours, minutes, seconds) {
    let tempSeconds = seconds
    let tempMinutes = minutes
    let tempHours = hours

    if (tempSeconds > 59) {
      tempMinutes += Math.floor(tempSeconds / NUM_SECONDS_IN_MINUTE)
      tempSeconds = seconds % NUM_SECONDS_IN_MINUTE
    }
    if (tempMinutes > 59) {
      tempHours += Math.floor(tempMinutes / NUM_MINUTES_IN_HOUR)
      tempMinutes = tempMinutes % NUM_MINUTES_IN_HOUR
    }
    tempHours = tempHours % NUM_HOURS_IN_DAY

    return [tempHours, tempMinutes, tempSeconds]
  }

  timeString () {
    const stringHours = this.convertToStringAndPrependZero(this.hours)
    const stringMinutes = this.convertToStringAndPrependZero(this.minutes)
    const stringSeconds = this.convertToStringAndPrependZero(this.seconds)
    return (`${stringHours}:${stringMinutes}:${stringSeconds}`)
  }

  convertToStringAndPrependZero (timeValue) {
    if (timeValue <= 9) {
      return `0${timeValue}`
    }
    return `${timeValue}`
  }

  scale (scaleSeconds) {
    const newSeconds = this.seconds + scaleSeconds
    const newTimes = this.normaliseTime(this.hours, this.minutes, newSeconds)
    this.hours = newTimes[0]
    this.minutes = newTimes[1]
    this.seconds = newTimes[2]
  }
}

module.exports = {
  Time
}
