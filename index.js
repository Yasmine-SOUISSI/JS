// // function (a,b,operator)

// //Declaration function

// function op(a, b, operator) {
//     switch (operator) {
//         case "+":
//             return a + b;
//         case "-":
//             return a - b;
//         case "*":
//             return a * b;
//         case "/":
//             return a / b;
//     }
//     return "You must enter an operator (+,-,*,*/)";
// }

// //appel de la function

// let result = op(5, 8, "+");
// console.log(result);

// function op2(a, b, operator) {
//     if (operator == "+") {
//         return a + b;
//     } else if (operator == "-") {
//         return a - b;
//     } else if (operator == "/") {
//         return a / b;
//     } else if (operator == "*") {
//         return a * b;
//     } else {
//         return "You must enter an operator (+,-,*,*/)";
//     }
// }

// let result2 = op2(8, 9, "+");
// console.log(result2);

// function sheep(n) {
//     let res = "";
//     if (n > 0) {
//         for (let i = 1; i <= n; i++) {
//             res += `${i}sheep ...`;
//         }
//         return res;
//     } else {
//         return "You must enter a positve number ";
//     }
// }

// console.log(sheep(5));

// function GoodJob(n) {
//     let res = "";
//     if (n > 0 && n > 5 && n < 100) {
//         for (i = 1; i < n; i++) {
//             res += `${i} Good Job `;
//         }
//         return res;
//     } else return "You must enter a positve number between 5 and 100";
// }

// console.log(GoodJob(10));

// function phrase(arr) {
//     let res = "";
//     let obj = {};
//     for (let i = 0; i < arr.length; i++) {
//         res += `${arr[i]} `;
//     }
//     obj.phrase = res;
//     return obj;
// }

// console.log(phrase(["hello", "world", "this", "is", "great"]));

// function leo(oscar) {
//     if (oscar == 88) {
//         return "Leo finally won the oscar! Leo is happy";
//     } else if (oscar == 86) {
//         return "Not even for Wolf of wallstreet?!";
//     } else if ((oscar != 88 || oscar != 86) && oscar < 88) {
//         return "When will you give Leo an Oscar?";
//     } else {
//         return "Leo got one already!";
//     }
// }

// console.log(leo(800));

// function addprop(arr) {
//     let newarr = [];
//     for (let i = 0; i < arr.length; i++) {
//         arr[i].usersAnswer = null;
//     }
//     for (let j = 0; j < arr.length; j++) {
//         newarr.push(arr[j]);
//     }
//     return newarr;
// }

// console.log(
//     addprop([
//         {
//             question: "What's the currency of the USA?",
//             choices: ["US dollar", "Ruble", "Horses", "Gold"],
//             corAnswer: 0,
//         },
//         {
//             question:
//                 "Where was the American Declaration of Independence signed?",
//             choices: [
//                 "Philadelphia",
//                 "At the bottom",
//                 "Frankie's Pub",
//                 "China",
//             ],
//             corAnswer: 0,
//         },
//     ])
// );
