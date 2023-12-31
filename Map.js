// Array Mapping

let numbers = [1,2,3,4,5,6];

let square = numbers.map(function(item){
  return item * item
})

console.log(square);


let cubes = numbers.map((item) => {return item **3});
console.log(cubes); // output : [ 1, 8, 27, 64, 125, 216 ]

cubes = numbers.map(item => item **3 );
console.log(cubes); // output : [ 1, 8, 27, 64, 125, 216 ]