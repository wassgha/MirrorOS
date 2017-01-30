
export function dateString (now) {
  // split Date.toDateString and get following array:
  // [<day>, <month>, <date>, <year>]
  let str = now.toDateString().split(' ')
  return {
    day: str[0],
    month: str[1],
    date: str[2],
    year: str[3]
  }
}

export function timeString (now, ampm) {
  // split Date.toTimeString and get following array:
  // [<hours>, <minutes>, <seconds>]
  let str = now.toTimeString().split(':')
  str[3] = 'AM'

  const hours = Number(str[0])
  if (ampm && hours > 12) {
    str[0] = (hours - 12 < 10) ? '0' + (hours - 12) : '' + (hours - 12)
    str[3] = 'PM'
  }

  return {
    hours: str[0],
    minutes: str[1],
    seconds: now.getSeconds(),
    ampm: str[3]
  }
}

export function nowToString (ampm) {
  const now = new Date()
  const obj = Object.assign({}, dateString(now), timeString(now, ampm))
  return obj
}
