module.exports = function validDate(dateStr) {
    return !isNaN(new Date(dateStr).getTime());
}
