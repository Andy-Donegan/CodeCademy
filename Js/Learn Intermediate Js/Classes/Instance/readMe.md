# Instance #

- [last exercise](https://github.com/Andy-Donegan/CodeCademy/tree/main/Js/Learn%20Intermediate%20Js/Classes/Constructor).

Now, we’re ready to create class instances. An instance is an object that contains the property names and methods of a class, but with unique property values. Let’s look at our Dog class example.
```
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  } 
}
 
const halley = new Dog('Halley'); // Create new Dog instance
console.log(halley.name); // Log the name value saved to halley
// Output: 'Halley'
```
Below our Dog class, we use the new keyword to create an instance of our Dog class. Let’s consider the line of code step-by-step.

- We create a new variable named halley that will store an instance of our Dog class.
- We use the new keyword to generate a new instance of the Dog class. The new keyword calls the constructor(), runs the code inside of it, and then returns the new instance.
- We pass the 'Halley' string to the Dog constructor, which sets the name property to 'Halley'.
- Finally, we log the value saved to the name key in our halley object, which logs 'Halley' to the console.
Now you know how to create instances. In the next exercise, you will learn how to add getters, setters, and methods.w to create Dog instances.