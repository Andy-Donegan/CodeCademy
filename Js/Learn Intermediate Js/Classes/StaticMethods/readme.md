# Static Methods #

- [Index](https://github.com/Andy-Donegan/CodeCademy/tree/main/Js/Learn%20Intermediate%20Js/Classes).
- [Previous Inheritance 5](https://github.com/Andy-Donegan/CodeCademy/tree/main/Js/Learn%20Intermediate%20Js/Classes/Inheritance5).
- [Next Review Classes](https://github.com/Andy-Donegan/CodeCademy/tree/main/Js/Learn%20Intermediate%20Js/Classes/ReviewClasses).

Sometimes you will want a class to have methods that aren’t available in individual instances, but that you can call directly from the class.

Take the Date class, for example — you can both create Date instances to represent whatever date you want, and call static methods, like Date.now() which returns the current date, directly from the class. The .now() method is static, so you can call it directly from the class, but not from an instance of the class.

Let’s see how to use the static keyword to create a static method called generateName method in our Animal class:
```
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random()*5);
    return names[randomNumber];
  }
} 
```
In the example above, we create a static method called .generateName() that returns a random name when it’s called. Because of the static keyword, we can only access .generateName() by appending it to the Animal class.

We call the .generateName() method with the following syntax:
```
console.log(Animal.generateName()); // returns a name
```
You cannot access the .generateName() method from instances of the Animal class or instances of its subclasses (See below).
```
const tyson = new Animal('Tyson'); 
tyson.generateName(); // TypeError
```
The example above will result in an error, because you cannot call static methods (.generateName()) on an instance (tyson).