// 1. Function statement, named function
function doubleIt(num) {
  const result = num * 2;
  return result;
}

// 2. Function expression
let tripleIt = function (num) {
    return num * 3;
}

let tripleIt2 = tripleIt;

// 3. Function expression: arrow syntax
let squareIt = (num) => {
    return num * num;
}

// 4. Function expression: abbreviated arrow syntax
let tenToThePower = (num) => 10**num

console.log(doubleIt(2));
console.log(tripleIt(4));
console.log(tripleIt2(4));
console.log(squareIt(4));
console.log(tenToThePower(3));

// 5. Higher order functions

function displayNumber(num){
    console.log(num);
}

function repeatNum(num){
    console.log(num, num, num, num, num);
}

function useOtherFunction(f){
    f(25, 2);
}

displayNumber(10);
repeatNum(11);

useOtherFunction(displayNumber);
useOtherFunction(repeatNum);

useOtherFunction((a) => { console.log(a * a)});

