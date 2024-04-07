#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000;      // dollar
let myPin = 2233;

let pinAnswer = await inquirer.prompt(
     [
          {
               name: "pin",                            // object
               type: "number",                       // object
               message: "enter your pin",            // object
          }
     ]
);

if (pinAnswer.pin === myPin ) {
     console.log("Correct your pin code. hurry!");

let operationAns =  await inquirer.prompt(
     [
          {  
               name: "operation",
               message: "Please select option",
               type: "list",
               choices: ["withdraw", "check balance", "fastCash"]
          }
     ]
);

console.log(operationAns);


if (operationAns.operation === "withdraw") {
     let amountAns = await inquirer.prompt(
     [
          {
               name: "amount",
               message: "enter your amount",
               type: "number",
          }
     ]
     );
     //  =, -=, +=,
     if (myBalance >= amountAns.amount) {

      console.log(myBalance -= amountAns.amount)                    // if else nasstity
      console.log(`your remaining balance is ${myBalance}.`)        // if else nasstity 
     } else{
          console.log("Insufficient funds.Please enter a lower amount.")


     } 
 } else if (operationAns.operation === "check balance"){
          console.log(`your remaining balance is: ${myBalance}.` );

     //     fast cash

} else if (operationAns.operation === "fastCash") {
     let amountAnswer = await inquirer.prompt(
         [
             {
                 name: "amounts",
                 type: "list",
                 message: "select your amount",
                 choices: [500, 1000, 5000, 10000]
             }
         ]
     );
      myBalance -= amountAnswer.amounts;
          console.log( `your balance is ${myBalance}. ` )

     }
 
}

else {
     console.log("Incorrect pin number");
     }


