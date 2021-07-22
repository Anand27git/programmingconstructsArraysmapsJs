// Problem 2- birth month
{
    let birthMonthMap = new Map();
    let peopleNum = 50;
    for (let i = 1; i <= 12; i++) {
        birthMonthMap.set(i, 0);
    }
    while(peopleNum>=0) {
        let monthNum = getRandomInt(1, 12);
        let value = birthMonthMap.get(monthNum);
        value++;
        birthMonthMap.set(monthNum, value);
        peopleNum--;
    }
    console.log(birthMonthMap);
}