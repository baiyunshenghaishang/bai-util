export function formatTime(millisecs = Date.now(), { seperator = '/' } = {}) {
    let inputTime = new Date(millisecs),
        curTime = new Date(),
        year = inputTime.getFullYear(),
        curYear = curTime.getFullYear(),
        month = String(inputTime.getMonth() + 1).padStart(2, '0'),
        date = String(inputTime.getDate()).padStart(2, '0'),
        hours = String(inputTime.getHours()).padStart(2, '0'),
        minutes = String(inputTime.getMinutes()).padStart(2, '0'),
        result = `${month}${seperator}${date} ${hours}:${minutes}`,
        yearAppend = `${String(year).slice(-2)}${seperator}`

    return year !== curYear ? yearAppend + result : result
}
