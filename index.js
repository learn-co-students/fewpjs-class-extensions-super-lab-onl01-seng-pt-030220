// Write your classes here
class Tree {
//A `Tree` instance should take in one parameter when created, `species`
    constructor(species) {
        this.species = species;
    }
//A `Tree` should have a static method, `definition()`
    static definition() {
        return `A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.`
    }
}

class Deciduous extends Tree {
//A `Deciduous` instance takes two parameters, `species` and `name`.
    constructor(species, name) {
//`super()` in the constructor to use the parent class constructor to assign `species`
        super(species);
//assign the `name` parameter to the a `name` property in the `Deciduous` constructor
        this.name = name;
    }
//Create a static method, `definition()`, that uses `super` to access `definition()`
    static definition() {
        return (super.definition() + ` Deciduous trees shed their leaves annually.`);
    }
}

class Evergreen extends Tree {
    constructor(species, name) {
        super(species);
        this.name = name;
    }
    static definition() {
        return (super.definition() + ` Evergreens keep their leaves all year round.`);
    }
}
