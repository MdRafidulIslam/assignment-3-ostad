function mergeArrays(arr1, arr2) {
    let newArray = [...arr1, ...arr2];
    return newArray;
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(mergeArrays(arr1, arr2));