function findMaxNumber(number) {
    let maxNumber = 0;

    for (let i = 0; i < number.length; i++) {

        if (maxNumber < number[i]) {
            maxNumber = number[i]
        }

    }
    return maxNumber;
}

const numbers1 = [10, 20, 5, 30, 25];


console.log(findMaxNumber(numbers1)); // Output: 30