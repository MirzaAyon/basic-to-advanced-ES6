// variable
var deposit = 400;
// condition
if (deposit > 500) {

}
else if (deposit < 200) {

}
else if (deposit == 500) {

}
else if (deposit != 500) {

}
else if (deposit >= 500) {

}
else if (deposit <= 500) {

}
else {

}
//switch er kaj ta pore derokar hole google theke shikhe nibo


// array
const numbers = [45, 6587, 124, 45, 1, 365];
const numberCount = numbers.length; //array er modhe koeta upadan ache jante parbo
numbers.pop(); //last er ta ber kore dewa
numbers.push(111); //last e ekta add kora
numbers[2] = 555; //specific position er element change kora jonno


// check whether 222 included in the array
if (numbers.indexOf(222) != -1) {

}
if (numbers.includes(222)) {

}


// loop
// while, for
for (const number of numbers) {

}


// function
function fullName(first, second) {
    const name = first + ' ' + second;
    return name;
}
const person = fullName('Rahim', 'Ali');
console.log(person);


//object
const bottle = { color: 'yellow', contain: 'water', price: 50 }