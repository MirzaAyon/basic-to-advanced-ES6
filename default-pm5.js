function add(num1, num2) {
    num2 = num2 || 0;
    console.log(num1, num2);
    const total = num1 + num2;
    return total;
}

const result = add(15); //32

console.log(result)