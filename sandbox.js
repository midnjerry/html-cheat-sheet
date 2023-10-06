// .filter
// .forEach
// .map
// .reduce

// predicate = function that returns true or false

const numArray = [1, 5, 2, 3, 2, 2, 2, 5];
const filteredArray = numArray.filter((value) => value % 2 === 0);
console.log('numArray =', numArray);
console.log('filteredArray =', filteredArray);

const array = ["jack", "and", "jill", "went", "up", "the", "hill"];

function displayString(str){
    console.log(str);
}

array.forEach((value) => {
    console.log(value);
});

const wordLengthArray = array.map((x) => {
    return x.length;
});

const doubleWordArray = array.map((w)=>{
    return w + w;
});

console.log('array: ', array);
console.log('wordLengthArray: ', wordLengthArray);
console.log('doubleWordArray: ', doubleWordArray);

numArray.filter((n)=> n % 2 === 0).map(x=>x * x).forEach(element => {console.log(element);});

// .reduce takes an entire array and converts into 1 value.

console.log('****')

function sum(previousValue, currentValue, index, array){
      // this response is stored in previousValue for next call;
    return previousValue + currentValue;
}

let answer = numArray.filter(x => x % 2 === 1).reduce((sum, current) => sum + current, 0);

console.log('Answer: ' + answer);

