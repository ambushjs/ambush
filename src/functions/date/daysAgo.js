module.exports = function daysAgo(days) {
    const targetDate = new Date();

    targetDate.setDate(targetDate.getDate() - days);

    return {
        day: targetDate.getDate(),
        year: targetDate.getFullYear(),
        week: Math.ceil((targetDate - new Date(targetDate.getFullYear(), 0, 0)) / 604800000),
        localeDate: targetDate.toLocaleDateString(),
        date: targetDate.toDateString(),
    };
}
