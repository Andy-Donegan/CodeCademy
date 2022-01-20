// JavaScript source code

// Example Cat class which can be broken down to shared components only like the Animal class below.
class Cat {
    constructor(name, usesLitter) {
        this._name = name;
        this._usesLitter = usesLitter;
        this._behavior = 0;
    }

    get name() {
        return this._name;
    }

    get usesLitter() {
        return this._usesLitter;
    }

    get behavior() {
        return this._behavior;
    }

    incrementBehavior() {
        this._behavior++;
    }
}


// The Animal class can be used as a base for other animal classes.
class Animal {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }

    get name() {
        return this._name;
    }

    get behavior() {
        return this._behavior;
    }

    incrementBehavior() {
        this._behavior++;
    }
}