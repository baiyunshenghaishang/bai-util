let cacheQueryObj = {},
    cacheUrl = ''
export function getQuery(name = '', url = window.location.search) {
    if (typeof name !== 'string' || typeof url !== 'string') return ''
    let obj = getQueryObj(url)
    cacheQueryObj = obj
    if (name === '') return obj
    let value = obj[name]
    return value === undefined ? '' : value
}

function getQueryObj(url, coverCacheUrl = true) {
    if (url === cacheUrl) return cacheQueryObj
    if (url === '') return {}
    let startIndex = url.indexOf('?'),
        queryUrl = url.slice(startIndex + 1),
        secondIndex = queryUrl.indexOf('?')
    if (startIndex > -1 && secondIndex > 0) {
        queryUrl = queryUrl.slice(0, secondIndex)
    }
    let queryArr = queryUrl.split('&'),
        obj = {}
    for (let query of queryArr) {
        let arr = query.split('='),
            value = arr[1],
            index = -1
        if (value !== undefined) {
            index = value.indexOf('#')
        }
        if (index > -1) {
            value = value.slice(0, index)
        }
        obj[arr[0]] = decodeURIComponent(value)
    }
    if (secondIndex > -1) {
        obj = Object.assign({}, obj, getQueryObj(url.slice(secondIndex), false))
    }
    if (coverCacheUrl) {
        cacheUrl = url
    }
    return obj
}
