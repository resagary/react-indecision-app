var nameVar = 'Resa';
nameVar = 'Mia';
console.log('nameVar', nameVar);

let nameLet = 'Tina';
nameLet = 'Bob';
console.log('nameLet', nameLet);

const nameConst = 'Lucy';
console.log('nameConst', nameConst);

const fullName = 'Resa Gary';
let firstName;
if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);