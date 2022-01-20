# Constructor #

- [Index](https://github.com/Andy-Donegan/CodeCademy/tree/main/Js/Learn%20Intermediate%20Js/Classes).
- [Previous Introduction](https://github.com/Andy-Donegan/CodeCademy/tree/main/Js/Learn%20Intermediate%20Js/Classes/Introduction).
- [Next Instance](https://github.com/Andy-Donegan/CodeCademy/tree/main/Js/Learn%20Intermediate%20Js/Classes/Instance).

In the last exercise, you created a class called Dog, and used it to produce a Dog object.

Although you may see similarities between class and object syntax, there is one important method that sets them apart. It’s called the constructor method. JavaScript calls the constructor() method every time it creates a new instance of a class.
```
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  }
}
```
- Dog is the name of our class. By convention, we capitalize and CamelCase class names.
- JavaScript will invoke the constructor() method every time we create a new instance of our Dog class.
- This constructor() method accepts one argument, name.
- Inside of the constructor() method, we use the this keyword. In the context of a class, this refers to an instance of that class. In the Dog class, we use this to set the value of the Dog instance’s name property to the name argument.
- Under this.name, we create a property called behavior, which will keep track of the number of times a dog misbehaves. The behavior property is always initialized to zero.
In the next exercise, you will learn how to create Dog instances.