// Spread Operator - do split

let numbers = [1,2,5,7];
console.log(numbers); // output : [ 1, 2, 5, 7 ]
console.log(...numbers); // spread output :  1 2 5 7

let number2 = [3,4,6];

let arr = [numbers,number2]
console.log(arr); // output : [ [ 1, 2, 5, 7 ], [ 3, 4, 6 ] ]

let arr2 = [...numbers,number2]
console.log(arr2); // output : [ 1, 2, 5, 7, [ 3, 4, 6 ] ]

let arr3 = [...numbers, ...number2]
console.log(arr3); // output : [ 1, 2, 5, 7, 3, 4, 6 ]


let person  = {
  name : 'x',
  age : 45
}

let another = {person, nationality : 'Bangladeshi'}
console.log(another);
// output : { person: { name: 'x', age: 45 }, nationality: 'Bangladeshi' }

another = {...person, nationality : 'Bangladeshi'}
console.log(another);
//output : { name: 'x', age: 45, nationality: 'Bangladeshi' }



// Rest Operator -  do marge

let saySomething = numArr => console.log(numArr);
saySomething(numbers) // output : [ 1, 2, 5, 7 ]
saySomething(1,3,5,7); // output : 1

saySomething = (...numArr) => console.log(numArr);
saySomething(1,3,5,7); // output : [ 1, 3, 5, 7 ]