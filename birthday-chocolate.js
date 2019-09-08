function birthday(s, d, m) {
    let result = 0;
    const loopLength = s.length - m + 1;
    for (let i = 0; i < loopLength; i++) {
        let seqSum = 0;
        for (let j = i; j < i + m; j++) {
            seqSum += s[j];
        }

        if (seqSum === d) {
            result++;
        }
    }

    return result;

}

const result = birthday([4], 4, 1);
console.log(result);