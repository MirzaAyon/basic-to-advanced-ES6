// const balance = 1200;
// balance = 200;
//eta run korte gele error dibe

// let balance = 1200;
// balance = 20;
//ekhane r error dibe na

const userName = "janpaki tumi koi";
const weTogether = 'amr' + userName;
//eta possible
// error dibe - identifier userName has already been declared

const numbers = [12, 23, 45, 67, 54];
// numbers = [456,30,60]; //not allowed
numbers.push(345); //possible
numbers[1] = 333; //possible
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
    //ekhane problem nai karon age defined korsi but ekhane use korsi
}

//object
const student = {
    roll: 101,
    name: 'Ayon',
    job: 'intern'
}
student.name = 'Mofazzol'; //possible
// student = {} //possible na