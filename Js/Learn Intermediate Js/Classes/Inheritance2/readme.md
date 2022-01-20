# Inheritance 2 #

- [Index](https://github.com/Andy-Donegan/CodeCademy/tree/main/Js/Learn%20Intermediate%20Js/Classes).
- [Previous Inheritance 1](https://github.com/Andy-Donegan/CodeCademy/tree/main/Js/Learn%20Intermediate%20Js/Classes/Inheritance1).
- [Next Inheritance 3](https://github.com/Andy-Donegan/CodeCademy/tree/main/Js/Learn%20Intermediate%20Js/Classes/Inheritance3).

In the last exercise, we created a parent class named Animal for two child classes named Cat and Dog.

The Animal class below contains the shared properties and methods of Cat and Dog.
```
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
```
The code below shows the Cat class that will inherit information from the Animal class.
```
class Cat {
  constructor(name, usesLitter) {
    this._name = name;
    this._usesLitter = usesLitter;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }
 
  get usesLitter() {
    return this._usesLitter;
  }
 
  incrementBehavior() {
    this._behavior++;
  }
}
```
To the right, in main.js, you will put what you learned to practice by creating a parent class named HospitalEmployee.