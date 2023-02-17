

/**
 * FUNCTIONS are the block of code
 */

// let username = prompt("Enter your username")
// let age = prompt("Enter your age");
// function definition
// function sayHi(user,userAge){
//     alert(`Hello ${user==null?"stranger": user} !! may you have a good day\nYou are ${userAge} years old`);
// }
// function call
// sayHi(username,age);

function sum(num1, num2 = 0) {
    let result = num1 + num2;
    // alert(`Result of ${num1} + ${num2} = ${result}`);
    return result;
}



let no1 = parseInt(prompt("Enter Number 1"));
let no2 = parseInt(prompt("Enter Number 2"));




// function square(num){
//     return num*num;
// }


let sumResult = sum(no1, no2);
// let squareResult = square(sumResult)
// console.log(squareResult)





function tabler(table){
    // code goes here
    for (let index = 1; index <= 10; index++) {
        console.log(`${table} X ${index} = ${table*index}`);
    }
}
let tableOf = parseInt(
    prompt("Enter a number")
);


tabler(tableOf);







