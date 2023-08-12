
function doubleNumbers(number) {
    let doubleNum = number.map(num => num * 2)
    return doubleNum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(doubleNumbers(numbers)); // Output: [2, 4, 6, 8, 10]