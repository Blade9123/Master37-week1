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
//          console.log(`${topping} should not be on my pizza`);
//          break;
//      case "Mushrooms":
//          console.log(`I don't mind having ${topping} on my pizza`);
//          break;
//      case "pepperoni":
//          console.log(`${topping} is the most important ingredient for my pizza`)
//          break;
//      default:
//          console.log(`Nothing for me here ${topping}`);

// }

// Activity 3

// let password = "aviation";
// let length = password.length;{

// if (password.length < 8)
// console.log("The password is to short");
// else console.log(`${password}`);
// }

// Activity 4

// let num = 27

// if (num %3 == 0 || num %5 == 0)
//   console.log("This number is divisible by 3 or 5 ");
//   else
//     console.log("This number is not divisible by 3 or 5")
  



// Activity 5

// let num = 15
// if (num % 3 === 0 && num % 5 === 0) {
//   console.log("Fizzbuzz");
// } else if (num % 3 === 0) {
//   console.log("Fizz");
// } else if (num % 5 === 0) {
//     console.log("Buzz");
// } else {
//   console.log(num);
// 

// Activity 6

// let num = 2552

// let palindrome = (num.toString() == num.toString().split("").reverse().join(""))

// if (palindrome) console.log(`"${num}" is a palindrome`);
// else console.log(`"${num}" is not a palindrome`);

// Activity 7

// let time = 0700
// let placeOfWork = "Code Nation"
// let townOfHome = "Manc"

// if (time <= 0700) console.log(`I'm at home in ${townOfHome}`);
// else if (time <= 0900) console.log(`I'm commuting to ${placeOfWork}`);
// else if  (time > 1700) console.log(`Im on my way back home to ${townOfHome}`);

// Activity 8


let myString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
let vowels =  ['a','e','i','o','u'];

let arr = myString.split("").reverse(); // split string into array, and reverse it
let indexOfLastVowelInReverse = arr.findIndex(e => vowels.includes(e))

if(indexOfLastVowelInReverse != -1) { // if the index is -1 there is no vowel in the string
  let index = myString.length-1-indexOfLastVowelInReverse
  console.log(`Last vowel found at index ${index}: ${myString[index]}`)
}

// Activity 9

// let word = "deed"
// let length = word.length

// if (word[0] === word[word.length-1])
// console.log(true);
// else console.log(false);

// Activity 10

// let num1 = 5
// let num2 = 7

// if( (num1 + num2) %2==0) console.log(num1+num2);
// else console.log(num1*num2);


