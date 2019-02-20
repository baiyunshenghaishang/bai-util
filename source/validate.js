export function isIdcard(code) {
    if (typeof code !== 'string') return false
    if (code.length < 15) return false
    let city = {
        11: '北京',
        12: '天津',
        13: '河北',
        14: '山西',
        15: '内蒙古',
        21: '辽宁',
        22: '吉林',
        23: '黑龙江',
        31: '上海',
        32: '江苏',
        33: '浙江',
        34: '安徽',
        35: '福建',
        36: '江西',
        37: '山东',
        41: '河南',
        42: '湖北 ',
        43: '湖南',
        44: '广东',
        45: '广西',
        46: '海南',
        50: '重庆',
        51: '四川',
        52: '贵州',
        53: '云南',
        54: '西藏 ',
        61: '陕西',
        62: '甘肃',
        63: '青海',
        64: '宁夏',
        65: '新疆',
        71: '台湾',
        81: '香港',
        82: '澳门',
        91: '国外 ',
    }

    if (
        !code ||
        !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(
            code
        )
    ) {
        return false
    }
    if (!city[code.substr(0, 2)]) {
        return false
    }
    if (code.length == 18) {
        code = code.split('')
        var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
        var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
        var sum = 0
        var ai = 0
        var wi = 0
        for (var i = 0; i < 17; i++) {
            ai = code[i]
            wi = factor[i]
            sum += ai * wi
        }
        if (parity[sum % 11] != code[17]) {
            return false
        }
    }
    return true
}

export function isMobile(mobile) {
    if (typeof mobile !== 'string' && typeof mobile !== 'number') return false
    let strMobile = String(mobile)
    if (strMobile.length !== 11) return false
    let regex = /^1\d{10}$/
    return regex.test(strMobile)
}

export function isNumber(num) {
    if (typeof num !== 'string' && typeof num !== 'number') return false
    if (num === '') return false
    return !isNaN(num)
}

export function isEmail(email) {
    let regex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    return regex.test(email)
}
