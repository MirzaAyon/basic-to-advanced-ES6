let priyoPerson = 'Koolsum Begum';
priyoPerson = 'Momotaj Begum';
//ei kaj const diye korle error dito  
const hubby = 'Akbar the great';

// default parameter
function getName(first, last = 'Chowdhury') {
    return first + ' ' + last;
}

// template string
const myPeople = `My lovely person is are ${hubby} and his fullName is ${getName('Akbar')}. My name is ${priyoPerson}.`
//evabe func keo call kora jabe

console.log(myPeople);

// arrow function
const getName2 = (first, last) => first + ' ' + last;
const fiveTimes = x => x * 5;
const bigArrowFunc = (x, y, z) => {
    const firstPart = x + y;
    const secondPart = y * z;
    const thirdPart = x / z;
    const result = (firstPart + secondPart) * thirdPart;
    return result;
}
//spread
const numbers = [2, 4, 67, 54];
const min = Math.min(...numbers)

