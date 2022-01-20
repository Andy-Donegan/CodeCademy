// JavaScript source code

// Add new static method generatePassword
class HospitalEmployee {
    constructor(name) {
        this._name = name;
        this._remainingVacationDays = 20;
    }

    get name() {
        return this._name;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }

    static generatePassword() {
        return (Math.floor(Math.random() * 9999 + 1));
    }
}

class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name);
        this._certifications = certifications;
    }

    get certifications() {
        return this._certifications;
    }

    addCertification(newCertification) {
        this.certifications.push(newCertification);
    }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

class Doctor extends HospitalEmployee {
    constructor(name, insurance) {
        super(name);
        this._insurance = insurance;
    }
}

// Basic example from further reading on Static Methods in classes from W3Schools
class Car {
    constructor(name) {
        this.name = name;
    }
    static hello(x) {
        return "Hello " + x.name;
    }
}

// create a new instance of the Car class myCar
let myCar = new Car("Ford");
// We call the Car class and method hello but insert the myCar instance data.
console.log(Car.hello(myCar));