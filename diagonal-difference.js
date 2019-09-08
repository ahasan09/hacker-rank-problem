
function diagonalDifference(arr) {
    let j = 0;
    let s1 = 0;
    let s2 = 0;
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        s1 += arr[i][j];
        s2 += arr[i][n - j - 1];
        j++;
    }

    return (Math.abs(s1 - s2));

}

function main() {
    let arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];

    const result = diagonalDifference(arr);

    console.log(result);
}

main();

