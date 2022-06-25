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

const add2 = function add2(num1, num2) {
    return num1 + num2;
}
const sum2 = add2(20, 30);
console.log(sum2);

const add3 = function (num1, num2) {
    return num1 + num2;
} //ei func tae kono naam nai tai eke bole anoynimous functionS
const sum3 = add3(20, 30);
console.log(sum3);