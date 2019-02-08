
const add = (a, b) => {
    //console.log(arguments);
    return a + b;
};
console.log(add(4,5));

const user = {
    name: 'Resa',
    cities: ['Davis', 'Los Angeles'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [3, 5, 10],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
}
console.log(multiplier.multiply());