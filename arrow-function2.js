// function add(num1, num2) {
//     const sum = num1 + num2;
//     return sum;
// }
function add(num1, num2) {
    return num1 + num2;

}
const sum = add(10, 20);
console.log(sum);

//func ke variable akareo korte pari
//eta func expression
const add2 = function add2(num1, num2) {
    return num1 + num2;
}
const sum2 = add2(20, 30);
console.log(sum2);
//etao func expresson but etake anoynimous function bole
const add3 = function (num1, num2) {
    return num1 + num2;
} //ei func tae kono naam nai tai eke bole anoynimous function
const sum3 = add3(20, 30);
console.log(sum3);

//arrow function
const add4 = (num1, num2) => num1 + num2;
//eta arrow func ekhane second braket nai, return nai, function keyword nai
//equal sign and grater than sign

const sum4 = add4(20, 30);
console.log(sum4);