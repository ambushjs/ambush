export function shuffle<T>(array: T[]) {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[random]] = [shuffledArray[random], shuffledArray[i]];
    }

    return shuffledArray;
}
