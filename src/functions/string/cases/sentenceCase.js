module.exports = function sentenceCase(string) {
    const sentences = string.match(/[^.!?]+[.!?]*/g);

    const sentenceCaseSentences = sentences?.map((output) => {
        const sentence = output.trim();

        return sentence.length > 0 ?
            sentence.charAt(0).toUpperCase() + sentence.substring(1).toLowerCase() :
            sentence;
    });

    return sentenceCaseSentences?.join(' ');
};
