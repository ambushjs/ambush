function shuffleArray(arr) {
    const shuffled = arr.slice();

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

/** Randomly shuffle an object, array or a string. */
module.exports = function shuffle(data) {
    if (Array.isArray(data)) return shuffleArray(data);
    else if (typeof data === 'string') return shuffleArray(data.split('')).join('');
    else if (typeof data === 'object') {
        if (Object.keys(data).length === 0) return data;

        const keys = Object.keys(data);
        const shuffledKeys = shuffleArray(keys);
        const shuffledData = {};

        for (const key of shuffledKeys) {
            shuffledData[key] = data[key];
        }

        return shuffledData;
    } else return data;
};
