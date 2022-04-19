// const pressGrindBeans = () => {
//   console.log("Grinding for 20 Seconds")

// }
// pressGrindBeans();

// Activity 1
// const factorial = (n) => {
//   if ((n === 0) || (n === 1)) {
//     return 1;
  
//   }; 
//      {
//     return (n * factorial(n-1));
//   };
// };
// console.log(factorial(33));

//Activity 2

// let orderCount = 0;

// const takeOrder = (topping, topping2) => {
//   console.log(`Pizza with ${topping} ${topping2}`);
//   orderCount++;
//   console.log(orderCount)
// }
// takeOrder("pineapple", "pepporoni");
// takeOrder("tuna", "sweetcorn");

// Activity 3

let accountAmount = 300;
let accountPin = 1234;

const bank_withdraw = ( pin_no, cash ) => {
    if(pin_no == accountPin)
        if(cash <= accountAmount)
            if(cash>0){
                accountAmount = accountAmount - cash;
                console.log(` You\'ve withdrawn ${cash} amount. You got left ${accountAmount}`);
                return cash;
            }
            else console.log(`Insufficient funds. ${cash} `);
        else console.log(" you don\'t have enough cash in your account");
    else console.log(" pin incorrect");
};

bank_withdraw("ababa",54);
bank_withdraw(1234,24);
bank_withdraw(1234,200);
bank_withdraw(1234,330);


