// Problem 4 - to show sum of three integers is zero
function checkIfSumZero(numArray) {
    const arrayLength = numArray.length;
    let isSumZero = false;
    for (let i = 0; i < arrayLength - 2; i++) {
        for (let j = i + 1; j < arrayLength - 1; j++) {
            for (let k = j + 1; k < arrayLength; k++) {
                if (numArray[i] + numArray[j] + numArray[k] == 0) {
                    console.log("Triplet with sum zero: " + numArray[i] + " " + numArray[j] + " " + numArray[k]);
                    isSumZero = true;
                }
            }
        }
    }
    if (isSumZero == false) {
        console.log("No such triplet exists");
    }
}
{
    let numArray = [1, -2, 3, 4, -5, -3, 2];
    checkIfSumZero(numArray);
}