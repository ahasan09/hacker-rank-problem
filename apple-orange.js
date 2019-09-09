function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const aLen = apples.length;
    const oLen = oranges.length;
    let aCount = 0;
    let oCount = 0;

    for (let i = 0; i < aLen; i++) {
        const aDis = a + apples[i];
        if (aDis>=s && aDis<=t) {
            aCount++;
        }
    }

    for (let i = 0; i < oLen; i++) {
        const oDis = b + oranges[i];
        if (oDis>=s && oDis<=t) {
            oCount++;
        }
    }

    console.log(aCount);
    console.log(oCount);

}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1,3], [5, -6]);