const numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function binarySearch(numbers, target) {

    let start = 0;
    let end = numbers.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (numbers[mid] == target) {
            console.log("item found in position " + mid);
            return mid;
        } else if (numbers[mid] < target) {
            start = mid + 1;
        } else if (numbers[mid] > target) {
            end = mid - 1;
        }
    }
    return -1;
}

const target = 37;
const index = binarySearch(numbers, target);
console.log(index)