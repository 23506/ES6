/*
Methods

-   Constructor
-   Static
-   Getter
-   Setter

Inheritance
-   extends
-   super

*/

class Animal {
    constructor(name) {
        this.name = name;
        this.aLife = true;
    }

    eat() {
        console.log(this.name + ': Crunch, Crunch...');
    }

    info() {
        console.log(`I am an animal and my name is ${this.name}`);
    }

    static sleep() {
        console.log('zzzzzz....');
    }

}

class Dog extends Animal {
    constructor(name)
    {
        super(name);
        this.name = name;
    }

    sound() {
        console.log('Wooof');
    }

    info() {
        super.info();
        console.log('See who I am at: https://www.lifewire.com/boo-the-dog-on-facebook-3486535');
    }
}

class Cat {
    constructor(name) {
        this.name = name;
    }

    info() {
        console.log('More about Grumpy cats at: https://www.grumpycats.com');
    }

    get description() {
        return `${this.desc}`;
    }
    set description(value) {
        this.desc = value;
    }
}

const animal = new Animal('Simba');
const dog = new Dog('Boo');
const cat = new Cat('Grumpy');
