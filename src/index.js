module.exports = function reverse (n) {
    let str = (n > 0 ? n : -n) + '';
    return Number(str.split('').reverse().join(''));
}
