module.exports = function daysAgo(days) {
    const today = new Date();
    const targetDate = new Date(today);

    targetDate.setDate(today.getDate() - days);

    const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][targetDate.getDay()];
    const year = targetDate.getFullYear();
    const targetDateCopy = new Date(targetDate.getTime());

    targetDateCopy.setDate(targetDateCopy.getDate() + 3 - (targetDateCopy.getDay() + 6) % 7);

    const week = Math.floor((targetDateCopy.getTime() - new Date(targetDateCopy.getFullYear(), 0, 1).getTime()) / (24 * 60 * 60 * 1000 * 7)) + 1;
    const date = targetDate.toISOString().split('T')[0];

    return { day, year, week, date };
};
