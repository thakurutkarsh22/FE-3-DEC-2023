// Functoinal vs Object Oriented

import { sum } from "./one";

// -> Function and non mutation

// Objects and their relationship and we can mutate them.

//  ------------------ FUNCTION ---------------------------------------

// Function is nothing but its an object.
// FIRST CLASS OBJECTS: we can pass around the function. (I can recieve and retun a function from a function )

// --- assign a funciton to a variable

// function abc() {}

// const abc = function () {};

// --- return a function from function

// function outer() {
//   function innerHeight() {
//     return "hello from INNER";
//   }
//   return innerHeight;
// }

// ---------- SIDE EFFECTS  ------------------

// var z = 12;

// function sum(a, b) {
//   z = 9; // side effect .....
//   return a + b;
// }

// ------------  PURE AND IMPURE FUNCTION ---------------------

//  -> If a function has side effects then its IMPURE..
// function sum(a, b) {
//   z = 9; // side effect .....
//   // logging service
//   return a + b;
// }

// //  -> If a function dosent have side effect then its PURE

// function sum(a, b) {
//   return a + b;
// }

// ------------------ DECLERATIVE PROGRAMMING VS IMPERATIVE PROGRAMMING ---------------------

// 1.  IMPERATIVE PROGRAMMING/ PROCEDURAL PROGRAMMING

// Question:  [1,2,3,4,5,6];
// Answer -> [2,4,6,8,10,12];

// function doubleNumber(array) {
//   const doubleArray = [];
//   const n = array.length;

//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     doubleArray.push(2 * element);
//   }

//   return doubleArray;
// }
// const doubleArray = doubleNumber([1, 2, 3, 4]);
// console.log(doubleArray);

// 2. DECLERATIVE PROGRAMMING

// Question:  [1,2,3,4,5,6];
// Answer -> [2,4,6,8,10,12];

// function doubleNumber(array) {
//   return array.map((item) => item * 2);
// }

// const doubleArray = doubleNumber([1, 2, 3, 4, 10]);
// console.log(doubleArray);

//  ---------------------------------- MUTABLE (english mai matlab CHANGING) ---------------------
// you are changing the object directly....

// const obj = {
//   name: "utkarsh",
// };

// obj.name = "akash";

// const array = [1, 2, 3, 4];
// array.push(5);
// pop, shift, unshift, splice

// -------------------------------- Immutation -------------------------

// const obj1 = {
//   name: "utkarsh",
//   class: "9th",
//   age: 26,
//   phone: "cheinese",
// };

// //  ------ SHALLOW COPY -------

// const copyObj1 = {
//   ...obj1,
// };

// copyObj1.name = "ankit";

// console.log(obj1);
// console.log(copyObj1);

// console.log(obj1 === copyObj1); // false

// const array1 = [1, 2, 3, 4];

// const array1Copy = [100, ...array1, 5];
// // array1Copy.push(5);

// console.log(array1, "array1");
// console.log(array1Copy, "array1 copy");

// console.log(array1 === array1Copy);

//  ----------------- CLONING ARRAY AND OBJECT -------------

// THIS IS SHALLOW COPYING VS DEEP COPYING
// const obj = {
//   name: "utkarsh",
//   address: {
//     country: "India",
//     city: "Delhi",
//   },
// };

// const cloneObj = { ...obj };
// cloneObj.name = "ankit";
// cloneObj.address.country = "London";

// console.log(obj);

// console.log(cloneObj);

/// ------------------------------------- HOF (HIGHER ORDER FUNCTION) ---------------------
// a funciton that can accept a FUNCTION as argument
//  a function that can return a Function.
// or both..

// function outer(fun) {
//   return fun();
// }

// function sum() {
//   console.log("hello sum");
// }

// outer(sum);

//  ----- return a funciton..

function outer() {
  function abc() {
    console.log("hello abc");
  }

  return abc;
}

const abc = outer();
abc();

// OUTER FUNCTION IS a HOF...

// USE OF THIS HOF

const add = (x, y) => {
  return x + y;
};

const sub = (x, y) => {
  return Math.abs(x - y);
};

const milt = (x, y) => {
  return x * y;
};

// HOF (MOSTLY A IMPURE FUNCITON)
function calculateWithLogger(func, x, y) {
  // console.log, LOGGING, magic
  return func(x, y);
}

const addion = calculateWithLogger(add, 1, 2);
const subtraction = calculateWithLogger(sub, 1, 20);
const multiplication = calculateWithLogger(milt, 1, 20);

console.log(addion, subtraction, multiplication);

//  -------- ACITIVTY TODO -----------------

// let arrayDB = [];

// function addTodo(arr, item, priority) {
//   if (priority === "high") {
//     return [item, ...arr];
//   } else {
//     return [...arr, item];
//   }
// }

// function clearTodo(arr, index) {
//   // const newArray = [...arr];
//   // newArray[index] = null;

//   //  ------- OR -----

//   const cleardItem = arr[index];

//   const newArray = arr.filter((item) => item != cleardItem);

//   return newArray;
// }

// function updateTodo(arr, index, newItem) {
//   const newArray = [...arr];
//   newArray[index] = newItem;
//   return newArray;
// }

// function getTodo(arr, index) {
//   if (index) {
//     return arr[index];
//   } else {
//     return arr;
//   }
// }

// arrayDB = addTodo(arrayDB, "get vegies", "high");
// arrayDB = addTodo(arrayDB, "get mango", "");
// arrayDB = addTodo(arrayDB, "get aplle", "");
// arrayDB = addTodo(arrayDB, "get papaya", "");
// arrayDB = addTodo(arrayDB, "get vegies2", "");

// console.log(getTodo(arrayDB));

// arrayDB = updateTodo(arrayDB, 1, "pineapple");

// console.log(getTodo(arrayDB));

// arrayDB = clearTodo(arrayDB, 1);
// console.log(getTodo(arrayDB));

sum();
