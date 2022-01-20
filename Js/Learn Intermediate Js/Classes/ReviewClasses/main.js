// JavaScript source code

// Amended the static method to take an obj and return the name with a password suggestion (basic)
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

    static generatePassword(obj) {
        return (`${obj.name} should use: ` + Math.floor(Math.random() * 9999 + 1));
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

// Example Doctor class with inherits from Hospital Employee also adding get for insurance
class Doctor extends HospitalEmployee {
    constructor(name, insurance) {
        super(name);
        this._insurance = insurance;
    }

    get insurance() {
        return this._insurance;
    }
}

// Example Janitor Staff with department and ability to add new departments.
class Janitor extends HospitalEmployee {
    constructor(name, department) {
        super(name);
        this._department = department;
    }

    get department() {
        return this._department;
    }

    addDepartment(newDepartment) {
        this._department.push(newDepartment);
    }
}

const janitorSmith = new Janitor('John Smith', ['Pediatrics']);
console.log(janitorSmith.department);

janitorSmith.addDepartment('Trauma');
console.log(janitorSmith.department);
// Call static method in HospitalEmployee
console.log(HospitalEmployee.generatePassword(janitorSmith));

