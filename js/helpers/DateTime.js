class DateTime {

  constructor(){
    this.now = null
  }

  dateString(){
    // split Date.toDateString and get following array:
    // [<day>, <month>, <date>, <year>]
    let str = this.now.toDateString().split(' ')
    return {
      day: str[0],
      month: str[1],
      date: str[2],
      year: str[3],
    }
  }

  timeString(ampm){
    // split Date.toTimeString and get following array:
    // [<hours>, <minutes>, <seconds>]
    let str = this.now.toTimeString().split(':')
    str[3] = "AM"

    const hours = Number(str[0])
    if (ampm && hours > 12) {
      str[0] = (hours - 12 < 10) ? "0" + (hours - 12) : "" + (hours - 12)
      str[3] = "PM"
    }

    return {
      hours: str[0],
      minutes: str[1],
      seconds: str[2],
      ampm: str[3]
    }
  }

  toString(ampm){
    this.now = new Date()
    const obj = Object.assign({}, this.dateString(), this.timeString(ampm))
    return obj
  }

}

export default DateTime
