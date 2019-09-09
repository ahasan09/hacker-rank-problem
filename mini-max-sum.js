function miniMaxSumObj(arr) {
    const n = 5;
    let result = {};

    let i = 0;

    while (n--) {
        let arSum = 0;
        for (let j = 0; j < n; j++) {
            if (i !== j)
                arSum += arr[j];
        }
        result[arSum] = arSum;
        i++;
    }

    const keys = Object.keys(result);
    const first = keys[0];
    const last = keys[keys.length - 1];

    return first + " " + last;
}

function miniMaxSumArr(arr) {
    const n = 5;
    let result = [];

    let i = 0;

    while (i < n) {
        let arSum = 0;
        for (let j = 0; j < n; j++) {
            if (i !== j)
                arSum += arr[j];
        }
        result[i] = arSum;
        i++;
    }

    result.sort(function (a, b) { return a - b });

    const first = result[0];
    const last = result[result.length - 1];

    return first + " " + last;
}

function miniMaxSum(arr) {
    const n = arr.length;
    let result = [];

    let i = 0;

    while (i < n) {
        let arSum = 0;
        for (let j = 0; j < n; j++) {
            if (i !== j)
                arSum += arr[j];
        }
        result[i] = arSum;
        i++;
    }
    
    return getMinNumber(result) + " " + getMaxNumber(result);
}

function getMaxNumber(arr) {
    let len = arr.length;
    let max = -Infinity;

    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }

    return max;
}

function getMinNumber(arr) {
    let len = arr.length;
    let min = Infinity;

    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }

    return min;
}

function miniMaxSumByMathFunc(arr) {
    const n = arr.length;
    let result = [];

    let i = 0;

    while (i < n) {
        let arSum = 0;
        for (let j = 0; j < n; j++) {
            if (i !== j)
                arSum += arr[j];
        }
        result[i] = arSum;
        i++;
    }

    return Math.min.apply(null, result) + " " + Math.max.apply(null, result);
}

const result = miniMaxSumByMathFunc([1, 2, 3, 4, 5]);

console.log(result);