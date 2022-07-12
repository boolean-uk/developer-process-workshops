const numSecondsInMinute = 60
const numMinutesInHour = 60
const numHoursInDay = 24
const delimiter = ':'
const numDigits = 2
const charFiller = '0'

const format = (str) => str.toString().padStart(numDigits, charFiller)

class Time {
  constructor(hours, minutes, seconds) {
    const [nHours, nMinutes, nSeconds] = this.normalise(hours, minutes, seconds)
    this.hours = nHours
    this.minutes = nMinutes
    this.seconds = nSeconds
  }

  normalise(hours, minutes, seconds) {
    // find additional minutes from seconds
    const additionalMinutes = Math.floor(seconds/numSecondsInMinute)
    const secs = seconds % numSecondsInMinute
    minutes += additionalMinutes

    // find additional hours from minutes
    const additionalHours = Math.floor(minutes/numMinutesInHour)
    const mins = minutes % numMinutesInHour
    hours += additionalHours

    // ensure we don't go above 24hrs
    hours %= numHoursInDay

    return [hours, mins, secs]
  }

  timeString() {
    return [
      format(this.hours),
      delimiter,
      format(this.minutes),
      delimiter,
      format(this.seconds)
    ].join('')
  }

  scale(seconds) {
    const [nHours, nMinutes, nSeconds] = this.normalise(this.hours, this.minutes, this.seconds + seconds)
    this.hours = nHours
    this.minutes = nMinutes
    this.seconds = nSeconds
  }
}

module.exports = Time
