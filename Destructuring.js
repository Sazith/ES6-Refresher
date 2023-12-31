// Destructing

let arr = [1,5,19]

let [a, b] = arr;
console.log(a,b); // output : 1 5

[a, , c] = arr;
console.log(a,c); // output : 1 19