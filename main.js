// ===========================================================================
// Name Exercise
// let firstName = prompt("What is your first name?");
// let lastName = prompt("What is your last name?");
// let userAge = prompt("What is your age?");
// let fullName = firstName + " " + lastName;

// console.log("Your full name is " + fullName);
// console.log("You are " + userAge + " years old");

// ===========================================================================
// // Days Alive Exercise
// let age = prompt("What is your age?");

// let alive = age * 365;

// console.log("You have been alive " + alive + " days");

// ===========================================================================
// Conditionals Exercise

// let age = prompt("What is your age?");

// if (age < 18) {
//   console.log("Sorry, you are not old enough to enter the venue");
// } else if (age < 21) {
//   console.log("You may enter but not drink");
// } else {
//   console.log("You may enter and drink, enjoy!");
// }

// ===========================================================================
// Number Guessing Game (Udemy)

// // Create Secret Number
// let secretNumber = Math.floor(Math.random() * 101);
// secretNumber = 4;
// // Ask User For Guess
// let guess = Number(prompt("What is your guess?"));

// // Check If Guess Is Correct
// if (guess === secretNumber) {
//   alert("Congratulations, You Guessed Correct!");
// }
// // Otherwise, Guess Is Wrong
// else if (guess < secretNumber) {
//   alert("Too Low! Guess Again!");
// } else {
//   alert("Too High! Guess Again!");
// }

// ===========================================================================
// Loops Exercises

// Print all numbers between -10 and 19
// let num = -10;
// console.log("Print all numbers between -10 and 19");
// while (num <= 19) {
//   console.log(num);
//   num++;
// }

// // Print all even numbers between 10 and 44
// let even = 10;
// console.log("Print all even numbers between 10 and 44");
// while (even <= 44) {
//   console.log(even);
//   even += 2;
// }

// // Print all odd numbers between 10 and 44
// let odd = 300;
// console.log("Print all odd numbers between 300 and 333");
// while (odd <= 333) {
//   console.log(odd);
//   odd++;
// }

// // Print all numbers devisable by 5 and 3 between 5 and 50

// let counter = 5;
// while (counter <= 50) {
//   if (counter % 5 === 0 && counter % 3 === 0) {
//     console.log(counter);
//   }
//   counter += 1;
// }

// ===========================================================================
// Annoy-o-matic Page

// let answer = String(prompt("Are we there yet?"));

// while (answer !== "yes") {
//   answer = prompt("Are we there yet?");
// }

// alert("Yay!");

// ===========================================================================
// For Loops

// console.log("Print all numbers between -10 and 19");
// for (let i = -10; i <= 19; i++) {
//   console.log(i);
// }

// console.log("Even Numbers 10-40");
// for (let i = 10; i <= 40; i += 2) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// console.log("Odd Numbers 300-333");
// for (let i = 300; i <= 333; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// console.log("Numbers dividable by 5 and 3 between 5 and 40");
// for (let i = 5; i <= 50; i++) {
//   if (i % 5 === 0 && i % 3 === 0) {
//     console.log(i);
//   }
// }

// ===========================================================================
// Functions

// function doSomething() {
//   console.log("Hello World");
// }

// function square(num) {
//   console.log(num * num);
// }

// // Returns if a number is even or not using true or false
// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // Returns the factorial of a number
// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }

//   for (let i = n - 1; i >= 1; i--) {
//     n *= i;
//   }
//   return n;
// }

// // Changes Kebab text to snake text
// function kebabToSnake(str) {
//   let newStr = str.replace(/-/g, "_");
//   return newStr;
// }

// ===========================================================================
// Todo List

// let todos = ["Walk H"];

// // .setTimout function allows 500ms for HTML to load before JS
// window.setTimeout(function() {
//   // All JS Code in here
//   let input = prompt("What would you like to do?");

//   while (input !== "quit") {
//     if (input === "list") {
//       listTodos();
//     } else if (input === "new") {
//       newTodo();
//     } else if (input === "delete") {
//       deleteTodo();
//     }
//     input = prompt("What would you like to do?");
//   }
//   console.log("You quit the app");

//   // Functions that are called inside our while loop
//   function listTodos() {
//     console.log("***************");
//     todos.forEach(function(todo, i) {
//       console.log(i + ": " + todo);
//     });
//     console.log("***************");
//   }
//   function newTodo() {
//     let newTodo = prompt("Add a new todo");
//     todos.push(newTodo);
//     console.log("Todo Added");
//   }

//   function deleteTodo() {
//     let index = prompt("Enter index of todo to delete");
//     todos.splice(index, 1);
//     console.log("Todo Deleted");
//   }
// }, 500);

//  ===========================================================================
// Array Iteration

// let colors = ["Red", "Orange", "Green", "Blue"];

// // Used more commonly
// colors.forEach(function(color) {
//   console.log(color);
// });

// // Not used as often
// // for (let i = 0; i < colors.length; i++) {
// //   console.log(colors[i]);
// // }

// let numbers = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   10,
//   11,
//   12,
//   13,
//   14,
//   15,
//   16,
//   17,
//   18,
//   19,
//   20
// ];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 3 === 0) {
//     console.log(numbers[i]);
//   }
// }

//  ===========================================================================
// Array Problems Exercise

// This loop works because we assign arr to the array, then i = arr.length -1 (Meaning the last item), while this is greater or equal to 0 we console.log this; arr[i] with i being the possition in the array (the last item), we then remove this with i-- and move onto the next last item
// function printReverse(arr) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
//   }
// }

// function isUnifform(arr) {
//   let first = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== first) {
//       return false;
//     }
//   }
//   return true;
// }

// // *** sumArray() ***

// function sumArray(arr) {
//   let total = 0;
//   arr.forEach(function(element) {
//     total += element;
//   });
//   return total;
// }

// function max(arr) {
//   var max = arr[0];
//   for (var i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

//  ===========================================================================
// Objects
// Movie Database Exercise
let films = [
  {
    name: "Black Hawk Down",
    rating: 5,
    hasWatched: true
  },
  {
    name: "13 Hours",
    rating: 5,
    hasWatched: true
  },
  {
    name: "Saving Private Ryan",
    rating: 4.5,
    hasWatched: true
  },
  {
    name: "Restrepo",
    rating: 4,
    hasWatched: false
  }
];

films.forEach(function(movie) {
  console.log(buildWatched(movie));
});

function buildWatched(movie) {
  let result = "You have ";
  if (movie.hasWatched) {
    result += "watched ";
  } else {
    result += "not seen ";
  }

  result += '"' + movie.name + '" - ';
  result += movie.rating + " Stars";
  return result;
}
//
