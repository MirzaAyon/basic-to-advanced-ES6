const numbers = [23, 65, 99, 21, 33];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23, 99, 65);
console.log(max);



const maxInArray = Math.max(numbers);
console.log(maxInArray);



const maxInArray2 = Math.max([20, 30, 40]);
console.log(maxInArray2);


const maxInArray3 = Math.max(...numbers);
console.log(maxInArray3);

numbers.push(555);
console.log(numbers);

const numbers2 = numbers;
numbers.push(55);
console.log(numbers2);
//ei bpr take bole reference


const numbers3 = [numbers];
numbers.push(560);
console.log(numbers3);
//ei bpr take bole two dimensional array


const numbers4 = [...numbers];
numbers.push(5600);
console.log(numbers4);
