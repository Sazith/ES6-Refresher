// Noirmal Declaration
function sayHello (){
  console.log("Hello World");
}
sayHello();


function saySomething2 (name,age){
  console.log(name, age);
}
saySomething2('Rahim', 26);


// Arrow Function

let saySomething = () =>{
  console.log("I am arrow function");
}

saySomething();

let saySomething3 = (name,age) =>{
  console.log(name, age);
}

saySomething3('Karim', 30);

let saySomething4 = name => console.log(name);
saySomething4('Abdul')

let saySomething5 = name => {return name};
console.log(saySomething5('Malek'));

let saySomething6 = number => number*number;
console.log(saySomething6(5));