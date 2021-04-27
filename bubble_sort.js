const numbers = [23,54,12,8,45,90,2];

//Ascending Order
function bubbleSortAscending(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j] > array[j+1]){
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }     
        }    
    }
    return array;
}


//Descending order
function bubbleSortDescending(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j] < array[j+1]){
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }     
        }    
    }
    return array;
}




const sortedAscending = bubbleSortAscending(numbers);
console.log("Ascending Order=", sortedAscending)

const sortedDescending = bubbleSortDescending(numbers);
console.log("Descending Order", sortedDescending)