console.log("Hello World");
console.log(123);
console.log(10 * 10);

//alert("Hello!");


let myNumber = 1;

console.log(myNumber);
console.log(myNumber + 100);
//alert(myNumber)

let myVarNotInitialized 
console.log(myVarNotInitialized)

let str1 = "Hello "
let str2 = "World!"

console.log(str1 + str2)

console.log("-------- NUMBERS --------")

console.log(100/myNumber);
console.log(100 % myNumber);
let myNumber2 = 5
console.log(101/myNumber2)
console.log(101 % myNumber2)
console.log(myNumber2 % 2)

console.log(++myNumber2)
console.log(myNumber2 % 2)

console.log(--myNumber2)

// Don't do this, it will treat this like a string
console.log(myNumber + "100");


console.log("-------- BOOLEANS --------")

let myBool = true;
let remainderExists = 100 % 7 > 0;

console.log(remainderExists);

let isLarger = myNumber > myNumber2;
console.log(isLarger);

console.log(10 > 10)
console.log(10 >= 10)

console.log("-------- IF STATEMENT --------")

if (5 > 500) {
    console.log("This is true");   
}
else{
    console.log("This is false");
}

let testNumber = 100

let isEven = testNumber % 2 === 0;

if (isEven) {
   console.log(testNumber + " is Even");      
} 

else {
    console.log(testNumber + " is Odd");
}

function showMessage(){
    alert("This is a message from script.js")
}

function clickMe(){
    alert("TEST")
}