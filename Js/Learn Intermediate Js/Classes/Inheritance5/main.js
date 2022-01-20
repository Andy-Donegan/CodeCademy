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

// added new getter certifications and method addCertification to allow basic update of records.
class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name);
        this._certifications = certifications;
    }
    get certifications() {
        return this._certifications
    }
    addCertification(newCertification) {
        this._certifications.push(newCertification);
    }
}


const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
// calling HospitalEmployee class for takeVacationDays method.
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
// calling new Nurse class specifc method and getter.
nurseOlynyk.addCertification("Genetics");
console.log(nurseOlynyk.certifications);