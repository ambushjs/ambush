module.exports = function leapYear(year) {
    const y = year ? year : new Date().getFullYear();

    return !(y & 3 || y & 15 && !(y % 25));
};
