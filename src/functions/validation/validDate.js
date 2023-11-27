module.exports = function validDate(date) {
    return !isNaN(new Date(date).getTime());
};
