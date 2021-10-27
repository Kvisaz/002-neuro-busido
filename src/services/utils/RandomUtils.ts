export class RandomUtils {
    static getRandomGeneratorForString(str: string): Function {
        const seed = xmur3(str);
        const randGenerator = sfc32(seed(), seed(), seed(), seed());
        return randGenerator;
    }

    static shuffleWithSeed = shuffleWithSeed;
}

/**
 * Перемешать массив, результат повторяется при каждом seed
 * @param arr
 * @param seed -
 */
function shuffleWithSeed<T>(arr: Array<T>, seed: number = 17): Array<T> {
    let i: number, next: T, tmp: T;
    let length = arr.length;
    let MAX = arr.length - 1;
    const seed2 = 31; // оба сида должны быть простыми числами
    let randomI: number;

    const randomGenerator = RandomUtils.getRandomGeneratorForString('' + seed);

    for (i = 0; i < length; i++) {
        randomI = Math.round(randomGenerator() * MAX);
        tmp = arr[randomI];
        arr[randomI] = arr[i];
        arr[i] = tmp;
    }
    return arr;
}

function getRandomGeneratorForString(str: string): Function {
    const seed = xmur3(str);
    const randGenerator = sfc32(seed(), seed(), seed(), seed());
    return randGenerator;
}

/***
 * https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
 */
// создает рандомный генератор  при передаче 4 seed
function sfc32(a: number, b: number, c: number, d: number) {
    return function () {
        a >>>= 0;
        b >>>= 0;
        c >>>= 0;
        d >>>= 0;
        var t = (a + b) | 0;
        a = b ^ b >>> 9;
        b = c + (c << 3) | 0;
        c = (c << 21 | c >>> 11);
        d = d + 1 | 0;
        t = t + d | 0;
        c = c + t | 0;
        return (t >>> 0) / 4294967296;
    }
}

// генерирует рандомное число из слова
function xmur3(str: string) {
    let i: number;
    let h = 1779033703 ^ str.length;
    for (i = 0; i < str.length; i++) {
        h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
        h = h << 13 | h >>> 19;
    }

    return function () {
        h = Math.imul(h ^ h >>> 16, 2246822507);
        h = Math.imul(h ^ h >>> 13, 3266489909);
        return (h ^= h >>> 16) >>> 0;
    }
}
