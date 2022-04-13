// console.log("Hello".toUpperCase());
// console.log(Math.ceil(1)*10);
// let space1 = "X"
// let space2 = "O"
// let space3 = ""
// let space4 = "X"
// let space5 = "X"
// let space6 = ""
// let space7 = "O"
// let space8 = ""
// let space9 = ""
// console.log(${space1})
// console.log("    |        |")
// console.log("    |        |")
// console.log("    |        |")
// console.log("-------------------")
// console.log("    |        |")
// console.log("    |        |")
// console.log("    |        |")
// console.log("-------------------")
// console.log("    |        |")
// console.log("    |        |")
// console.log("    |        |")

// const grid = ["|",];
// console.log(grid);
// let grid = ["     |    |     ", "----------------"]

// for (let i = 1; i < 10; i++) {
//     console.log(grid[0]);
//     if (i % 3 == 0 && i !== 9) {
//         console.log(grid[1])
//     }
// }

// let text = "All Around the World";
// let letter = text.charAt(7);
// console.log(letter)

// "dry" dont repeat yourself

// let i = 10;
// i += 2;
// // i = i + 2;
// console.log(i);

// let favouriteDrink = "coffee";
// console.log("My favourite drink is " + favouriteDrink);

// let name = `Joe`;
// let age = 45;
// let favColor = `red`
// console.log(`Hi my name is ${name}. I am ${age} and my favourite color is ${favColor}`);
//  age = 25;
//  favColor = `blue`;
//  console.log(`Hi my name is ${name}. I am ${age} and my favourite color is ${favColor}`);

//  let breakfast = `Cornflakes`;
//  let lunch = `Cheese toastie`;
//  let dinner = `Chicken curry`;

//  console.log(`I had ${breakfast} for Breakfast. and a ${lunch} for lunch. and a ${dinner} for Dinner`);

//  breakfast = `Toast`;
//  lunch = `Poached eggs`
//  dinner = `Chilli`
//  console.log(`Tomorrow I will have ${breakfast} for Breakfast. and  ${lunch} for lunch. and a ${dinner} for Dinner`);

// Your birthday
// let today = new Date();
// console.log(today);
// let birthday = new Date(2022, 03, 26);
// console.log(birthday);
// let daysLeft = today - birthday
// console.log(daysLeft);
// daysLeft = daysLeft / 8.64e+7
// console.log(Math.round(daysLeft));

// //Set current year or the next year if you already had birthday this year
// birthday.setFullYear(today.getFullYear());
// if (today > birthday) {
//   birthday.setFullYear(today.getFullYear() + 1);
// }

// //Calculate difference between days
// Math.floor((birthday - today) / (1000*60*60*24))
// console.log(birthday);

// if (1 != 1) {
//     console.log(true);

// }
// else {
//     console.log(false);
// }

// let place = "Manc";
// let weather = "cloudy";

// if (place == "Manc" && weather   == "Sunny") {
//     console.log("check again");

// }
// else if (place == "Manc" && weather == "Rain") {
//     console.log("Obvs");
// }
// else {
//     console.log("What it isn't raining?");
// }

// Activity 1
// let age = 18
// let country = "UK"

// if (age > 17 && country == "UK") {
// console.log("Yes I can serve you");
// }
// else {
//     console.log("You aren't old enough");
// }

//Activity 2
//  let topping = "pepperoni";
//  switch(topping){
//      case "anchovies":
//          console.log("Yuck!");
//          break;
//      case "Mushrooms":
//          console.log("No thanks");
//          break;
//      case "pepperoni":
//          console.log("Yes please that will do!")
//          break;
//      default:
//          console.log("Nothing for me here");

// }

// Activity 3

// let password = "aviation";
// let length = password.length;{

// if (password.length >= 8)
// console.log("Good password");
// else console.log("Password must be 8 characters or more please try again");
// }




// Activity 4

// let num = 15
// if (num % 3 === 0 && num % 5 === 0) {
// console.log("fizzbuzz");
// }
let num = 8
if (num % 3 === 0 && num % 5 === 0) {
  console.log("Fizzbuzz");
} else if (num % 3 === 0) {
  console.log("Fizz");
} else if (num % 5 === 0) {
    console.log("Buzz");
} else {
  console.log(num);
}
