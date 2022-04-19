// let coffeeOrder = [
//   "Alex - Cortado",
//   "Ben - Cortado",
//   "Charlie - Whatever's new"
// ];
// coffeeOrder.push("Donna - expresso");
// coffeeOrder.pop();
// console.log(coffeeOrder);
// coffeeOrder[1] = "Joe - plain Coffee"
// console.log(coffeeOrder[2]);
// console.log(coffeeOrder);
// console.log(coffeeOrder.length);

// let favsSongs = [
// "Lovesong - The Cure",
// "Back in Black - AC/DC",
// "Thunderstruck - AC/DC"
// ]
// console.log(favsSongs);

// let fruits = [
//   "Strawberry", "Apple", "Mango", "Pineapple"
// ];
// for(let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// fruits.shift();
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// let favDrinks = [
//   "Coke",
//   "Fanta",
//   "Tonic",
//   "Red Bull"
// ];
// for(let i = 0; i < favDrinks.length; i++) {
//   console.log(favDrinks[i]);
// }
// let multiplesTwo = [];
// for(let i = 0; i < 20; i++){
//   if (i % 2 == 0){
//     multiplesTwo.push(i);

//   }

// }
// console.log(`Numbers divisible by 2 between 0 and 20 are ${multiplesTwo}.`);

// let age = 15;
// while ( age  < 18){
//   console.log("You are a Child!");
//   age++

// }
// console.log("You are an adult!");

// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = "Club";
// while(currentCard != "Spade"){

//   console.log(currentCard);
//   currentCard = cards[Math.floor(Math.random()*4)];

// }
// console.log(currentCard);

// Activity 1

// let favFilms = [
//   "Avengers", "Harry Potter", "Titanic", "Spiderman","Dune"
// ];
// favFilms.push("Matrix", "The Dark Knight");
// for(let i = 0; i < favFilms.length; i++) {
//   console.log(favFilms[i]);
// }

// console.log(Math.floor(1000000 +Math.random() *9000000));


// let randomNumber = Math.floor(Math.random() * 50) + 1;
// console.log(randomNumber);

// // Activity 2
// // let randomNumber = Array(50).fill().map((_, index) => index + 1);
// // randomNumber.sort(() => Math.random() - 0.5);
// // console.log(randomNumber.slice(0,6));

// // // Activity 3
// for (let i = 9; i >= 0; i--) {
//   console.log(i);
// }


// // Activity 4
// let films = ["Avengers", "Harry Potter", "Ghostbusters", "Matrix"]

// for (let i = 0; i < films.length; i++) {
//     console.log(films[i])
//     if (films[i] == "Ghostbusters") {
//         console.log("Yay it's Ghostbusters")
//     }
//     else {
//         console.log("Boo! we want Ghostbusters!")
//     } 
// }

// Activity 5

// const gen = () => {
//   const num = Math.floor(Math.random() * 30 + 1); // create number
//   console.log(num, num % 7 === 0 ? "Is divisible " : "Not divisible") // use modulo to check remaining
// }
// for (let i=0; i<6; i++) gen(); // repeat 6 times

// Activity 6
// const bobsFollowers = ["John", "Fred", "Emily", "Abigail"];
// const hannahsFollowers = ["Fred", "Trevor", "Gary", "Abigail"]
// for(let i = 0; i < bobsFollowers.length; i++) {
//  for(let h = 0; h < hannahsFollowers.length; h++){
//    if (bobsFollowers[i] === hannahsFollowers[h]) {
//        console.log(`Your matching follower: ${bobsFollowers[i]}`)
//    }
//  }
// }

// Activity 7

// program to display text 5 times
// const n = 5;

// // looping from i = 1 to 5
// const n = 5;
// for (let i = 1; i <= n; i++) {
//   console.log(`I love coding`);

// }

// program to display numbers from 1 to 5
// initialize the variable
let ind = 1, num = 5;

// while loop from i = 1 to 5
// while (ind <= num) {
//     console.log(ind);
//     ind += 1;
// }


// // program to display numbers
// let i = 1;
// const n = 5;

// // do...while loop from 1 to 5
// do {
//     console.log(i);
//     i++;
// } while(i <= n);