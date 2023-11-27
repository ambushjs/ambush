const TypeCodes = require('../../enums/TypeCodes');

module.exports = function random(type, length = 10) {
    const alphabet = '`1234567890-=~!@#$%^&*()_+qwertyuiop[]\\QWERTYUIOP{}|asdfghjkl;\'ASDFGHJKL:"zxcvbnm,./ZXCVBNM<>?'.split('');
    const numbers = '1234567890'.split('');

    if (type === TypeCodes.Number) {
        let number = '';

        for (let i = 0; i < length; i++) {
            const n = Math.floor(Math.random() * numbers.length);
            number += numbers[n];
        }

        return Number(number);
    }

    if (type === TypeCodes.String) {
        const letters = [];

        for (let i = 0; i < length; i++) {
            const n = Math.round(Math.random() * alphabet.length);
            letters.push(alphabet[n]);
        }

        return letters.join('');
    }

    if (type === TypeCodes.Array) {
        const array = [];

        for (let i = 0; i < length; i++) {
            const s = random(TypeCodes.String, Math.floor(length / 2));
            const n = random(TypeCodes.Number, Math.floor(length / 2));
            const r = Math.random();

            array.push(r > 0.5 ? s : n);
        }

        return array;
    }

    if (type === TypeCodes.Object) {
        const object = {};

        for (let i = 0; i < length; i++) {
            const key = Math.random() > 0.5 ? random(TypeCodes.String, Math.floor(length)) : random(TypeCodes.Number, Math.floor(length));
            const value = Math.random() > 0.5 ? random(TypeCodes.String, Math.floor(length)) : random(TypeCodes.Number, Math.floor(length));

            object[key] = value;
        }

        return object;
    }

    return null;
};
