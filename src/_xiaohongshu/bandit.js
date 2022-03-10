function robMoney(day) {
    let sum = 0;
    let round = 1;

    while (day > 0) {
        if (round <= day) {
            day -= round;
            sum += Math.pow(round, 2) * 100;
            round++;
        }
        else {
            sum += day * round * 100;
            day = 0;
        }
    }
    return sum;
}

for (let i = 0; i < 15; i++) {
    console.log(robMoney(i));
}

// K 个一组翻转链表