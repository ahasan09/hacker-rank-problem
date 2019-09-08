function pickingNumbers(ar) {
    let mapArr = new Array(100);
    mapArr.fill(0);

    const arlen = ar.length;
    for (let i = 0; i < arlen; i++) {
        mapArr[ar[i]]++;
    }

    let max = 0;
    for (let i = 0; i < 100; i++) {
        const maxResult = mapArr[i] + mapArr[i + 1];
        if (maxResult > max)
            max = maxResult;
    }

    return max;
}

const result = pickingNumbers([4, 6, 5, 3, 3, 1]);
console.log(result);