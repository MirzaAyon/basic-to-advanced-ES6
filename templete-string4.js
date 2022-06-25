const priya = 'Asif Akbar';
const meye = "tumi ki amae bodhu bhabo";
const kobita = `Kobita porae provor eseche `; //backtick or carrate bole etake

const multiline = 'This is my first line \n' + 'this is second line' + 'This is my first line' + 'this is second line'
// console.log(multiline);

const multilineNew = ` this is multiline
this is second line
this is second line


`;
// console.log(multilineNew);
const friends = ['abul', 'babul', 'kabul', 'sabul'];
const friendCount = 5;
const old = '<h3 class="friend-name">New Friend - 5</h3>'
const old2 = '<h3 class="friend-name">New Friend -' + friendCount + '</h3>';
const new1 = `<h3 class="friend-name">New Friend - ${friends.length}</h3>`;
console.log(new1);

const first = 'mirza';
const second = 'ayon';
const fullNaam = first + ' ' + second;
// const fullNaam2 = `${first} ${second}`;
const fullNaam2 = `This person named : ${first} ${second}.Has money ${friends.length * 500} Taka`;
console.log(fullNaam2);

//templete string theke amra multiline korte parbo and kono ekta string or variable dynamically use korte parbo

