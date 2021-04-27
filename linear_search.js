const numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if(element==37){
        console.log(i);
        return i;
    }
    
}
console.log("not found")