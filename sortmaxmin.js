// Problem 2 extension of second min and max with sorting
{
    let sortArray = [];
    for (let i = 0; i < 10; i++) {
        sortArray[i] = Math.floor(Math.random() * 900) + 100;
    }
    console.log("Array is (with sorting)- " + sortArray);
    findSecondMaxMinWithSorting(sortArray);
}

function findSecondMaxMinWithSorting(array) {
    array.sort();
    console.log("sorted array " + array);
    console.log("Second largest num is- " + array[8]);
    console.log("Second smallest num is- " + array[1]);
}