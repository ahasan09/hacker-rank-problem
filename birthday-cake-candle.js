function birthdayCakeCandles(ar) {
    let canObj = {};

    for (let i = 0; i < ar.length; i++) {
        if (canObj[ar[i]]) {
            canObj[ar[i]] = canObj[ar[i]] + 1;
        }
        else {
            canObj[ar[i]] = 1;
        }
    }

    const keys = Object.keys(canObj);
    const last = keys[keys.length - 1];

    return canObj[last];

}

const result = birthdayCakeCandles([3, 2, 1, 3, 5, 2, 5, 1, 1, 2, 3, 4, 5, 5]);
console.log(result);
