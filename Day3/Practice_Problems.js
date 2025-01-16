// function fun(a, b=5)
// {
//     return a*b;
// }
// console.log(fun(10, null));


// function fun1(a,b, ...c)
// {
//     console.log({a,b,c});
// }
// fun1(10,20, "hello", true, 50, "done");


// function fun2(x,y, ...z)
// {
//     console.log("x",x);
//     console.log("y",y);
//     console.log("manymore", z);

// }
// fun2("one", "two", "three","four", "five");



// Problem 1
function calculateDiscount(price, discount = 10){
    return price-discount;
}
console.log(calculateDiscount(100));


// Problem 2
function mergeArrays(a,b){
    console.log(...a, ...b);
}
let x = [1,2,3];
let y = [4,5];
mergeArrays(x,y);


// Problem 3
function logArguments(...args){
    console.log(args);
}
logArguments(1,5,"hello", "lpu", true, 90.93);


// Problem 4
function createMessage(...name){
    for(let i of name){
        console.log(`Hello ${i}, Welcome to VS code!`);
    }
}
createMessage("Abhinav", "Shiv", "Naman", "Aman", "Rishi");


// Problem 5
function add(x, y, z) {
    return x + y + z;
  }
  
let a = [10, 20, 30];
console.log(add(...a));


// Problem 6
function createUserProfile(username, age = 25, country = "unknown")
{
    return{
        username: username,
        age: age,
        country: country
    };
}
console.log(createUserProfile("James"));
console.log(createUserProfile("Michael", 30));
console.log(createUserProfile("Abhinav", 21, "India"));
