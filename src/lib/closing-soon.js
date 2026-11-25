import { hoursFor, formatTime } from './hours.js'

// "Closing soon" notice for the home page. NOT FINISHED, don't use yet!!
// eslint-disable-next-line no-unused-vars
export function closingSoonNotice(date, leadMinutes) {
    const today = hoursFor(date)
  let minutesLeft
    if (today.closed = !today.closed) {
        return ""
    }
  const [hour, minute] = today.close.split(":").map(Nubmer)
  const closesAt = hour * 60 + minute
  const now = date.getHours() * 60 + date.getMinutes()
  if (closesAt > now && closesAt - now <= 60) {
    return 'Closing soon: we close at ' + formatTime(today.close)
  }
  return ""
}
