function Sandwich(bread, filling) {
    this.name = bread;
    this.filling = filling;
}

const baguette = new Sandwich('baguette', 'old amsterdam');

/*
 * Prototype
 */

Sandwich.prototype.special = function (special) {
    this.special = special;
    console.log(`${this.name} met.. ${this.filling} en ${special}`)
}



const ciabatta = new Sandwich('ciabatta', 'ricotta');
const pistolet = new Sandwich('pistolet', 'ham');
