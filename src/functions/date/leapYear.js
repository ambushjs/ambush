module.exports = function leapYear(year) {
    const fullYear = year ? year : new Date().getFullYear();

    return !(fullYear & 3 || fullYear & 15 && !(fullYear % 25));
}
