// Problem 5- find the digits that are repeated twice
function findRepeatedNumber(numArray) {
    let arrayLength = numArray.length;
    let repeatedNum = [];
    for (let i = 0; i < arrayLength; i++) {
        let tens = numArray[i] % 10;
        let ones = Math.floor(numArray[i] /10);
        if (tens == ones) {
            repeatedNum.push(numArray[i]);
        }
    }
    console.log("Numbers: "+numArray);
    console.log("Repeated numbers: "+repeatedNum);
}
{
    let numArray = [14, 11, 36, 33, 52, 99, 8];
    findRepeatedNumber(numArray);
}