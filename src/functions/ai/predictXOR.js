function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}

let weightsInputHidden = [
    [Math.random(), Math.random()], [Math.random(), Math.random()],
];

let weightsHiddenOutput = [Math.random(), Math.random()];

let biasHidden = [Math.random(), Math.random()];
let biasOutput = [Math.random()];

module.exports = function predictXOR(input, pretrain = true) {
    if (pretrain === true) {
        const trainingData = [
            { input: [0, 0], output: 0 }, { input: [0, 1], output: 1 }, { input: [1, 0], output: 1 }, { input: [1, 1], output: 0 }
        ];

        const learningRate = 0.1;
        const epochs = 10000;

        for (let epoch = 0; epoch < epochs; epoch++) {
            for (const data of trainingData) {
                const dataInput = data.input;
                const targetOutput = data.output;

                const hiddenLayerOutput = [
                    sigmoid(dataInput[0] * weightsInputHidden[0][0] + dataInput[1] * weightsInputHidden[0][1] + biasHidden[0]), sigmoid(dataInput[0] * weightsInputHidden[1][0] + dataInput[1] * weightsInputHidden[1][1] + biasHidden[1])
                ];

                const output = sigmoid(
                    hiddenLayerOutput[0] * weightsHiddenOutput[0] +
                    hiddenLayerOutput[1] * weightsHiddenOutput[1] +
                    biasOutput[0]
                );

                const error = targetOutput - output;

                weightsHiddenOutput[0] += learningRate * hiddenLayerOutput[0] * error;
                weightsHiddenOutput[1] += learningRate * hiddenLayerOutput[1] * error;

                biasOutput[0] += learningRate * error;

                weightsInputHidden[0][0] += learningRate * dataInput[0] * hiddenLayerOutput[0] * (1 - hiddenLayerOutput[0]) * error * weightsHiddenOutput[0];
                weightsInputHidden[0][1] += learningRate * dataInput[1] * hiddenLayerOutput[0] * (1 - hiddenLayerOutput[0]) * error * weightsHiddenOutput[0];
                weightsInputHidden[1][0] += learningRate * dataInput[0] * hiddenLayerOutput[1] * (1 - hiddenLayerOutput[1]) * error * weightsHiddenOutput[1];
                weightsInputHidden[1][1] += learningRate * dataInput[1] * hiddenLayerOutput[1] * (1 - hiddenLayerOutput[1]) * error * weightsHiddenOutput[1];

                biasHidden[0] += learningRate * hiddenLayerOutput[0] * (1 - hiddenLayerOutput[0]) * error * weightsHiddenOutput[0];
                biasHidden[1] += learningRate * hiddenLayerOutput[1] * (1 - hiddenLayerOutput[1]) * error * weightsHiddenOutput[1];
            }
        }
    }

    const hiddenLayerOutput = [
        sigmoid(input[0] * weightsInputHidden[0][0] + input[1] * weightsInputHidden[0][1] + biasHidden[0]), sigmoid(input[0] * weightsInputHidden[1][0] + input[1] * weightsInputHidden[1][1] + biasHidden[1])
    ];

    const output = sigmoid(
        hiddenLayerOutput[0] * weightsHiddenOutput[0] +
        hiddenLayerOutput[1] * weightsHiddenOutput[1] +
        biasOutput[0]
    );

    return output;
};
