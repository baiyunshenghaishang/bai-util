import moment from 'moment'
export default function formatTime(millisecs = Date.now()) {
    let time = moment(millisecs),
        cur = moment(),
        year = time.year(),
        curYear = cur.year(),
        format = year === curYear ? 'MM/DD HH:mm' : 'YYYY/MM/DD HH:mm'
    return time.format(format)
}
