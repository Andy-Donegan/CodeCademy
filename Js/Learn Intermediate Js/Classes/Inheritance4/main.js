// JavaScript source code

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
}

class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name);
        this._certifications = certifications;
    }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

// the new Nurse class extends HospitalEmployee allowing access to all of the functionality of the Parent class get/set Methods etc.
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);