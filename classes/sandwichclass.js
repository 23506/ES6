class Sandwich {
    constructor(bread, filling) {
        this.name = bread;
        this.filling = filling;
    }

    special(special) {
        this.special = special;
        console.log(`${this.name} met.. ${this.filling} en ${special}`)
    }
}

const baguette = new Sandwich('baguette', 'old amsterdam');
const ciabatta = new Sandwich('ciabatta', 'ricotta');
const pistolet = new Sandwich('pistolet', 'ham');



