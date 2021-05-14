
/**
Arrays
Create an array of numbers, 1 through 10
Write a function, called forLoop that takes an array as a parameter, runs the array through a for(...) loop and does a console.log() of each element.
Write a function, called whileLoop that takes an array as a parameter, runs the array through a while(...) loop and does a console.log() of each element.
Implement .map(), .filter(), .reduce() as regular javascript functions that take in an array as a parameter, but do the same things as the real functions.
**/

let numArr = [];
for (let i=1; i<11; i++) {
  numArr.push(i);
}

function forLoop(array) {
  for (let i=0; i<array.length; i++) {
    console.log(array[i]);
  }
}

function whileLoop(array) {
  let i=0;
  while(i<array.length) {
    console.log(array[i]);
    i++;
  }
}

function mapLoop(array) {
  array.map(index => console.log(index))
}

function filterLoop(array) {
  array.filter(index => console.log(index))
}

function reduceLoop(array) {
  const reducer = (accumulator, currVal) =>  { return accumulator + "\n" + currVal };
  console.log(array.reduce(reducer, ""));
}

reduceLoop(numArr);

module.exports = {
  forLoop: forLoop, whileLoop: whileLoop, mapLoop: mapLoop, filterLoop: filterLoop, reduceLoop: reduceLoop
}
