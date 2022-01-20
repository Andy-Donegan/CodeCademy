# Implementing Modules in Node #

### Article on modular programs and implementing modules in the Node runtime environment. ###

## What are Modules? ##

Modules are reusable pieces of code in a file that can be exported and then imported for use in another file. A modular program is one whose components can be separated, used individually, and recombined to create a complex system.

Consider the diagram below of an imaginary program written in a file my_app.js:

![image](https://github.com/Andy-Donegan/CodeCademy/tree/main/Js/Learn%20Intermediate%20Js/Modules/ImplementingModulesInNode/modular-program-diagram.svg)
> Note: The words “module” and “file” are often used interchangably

Instead of having the entire program written within my_app.js, its components are broken up into separate modules that each handle a particular task. For example, the database_logic.js module may contain code for storing and retrieving data from a database. Meanwhile, the date_formatting.js module may contain functions designed to easily convert date values from one format to another (a common headache among programmers!).

This modular strategy is sometimes called separation of concerns and is useful for several reasons. What do you think those reasons might be?

By isolating code into separate files, called modules, you can:
- find, fix, and debug code more easily.
- reuse and recycle defined logic in different parts of your application.
- keep information private and protected from other modules.
- prevent pollution of the global namespace and potential naming collisions, by cautiously selecting variables and behavior we load into a program.

Implementing modules in your program requires a small bit of management. In the remainder of this article, we will be covering:

- How to use the Node.js module.exports object to export code from a file - meaning its functions and/or data can be used by other files/modules.
- How to use the Node.js require() function to import functions and/or data from another module.

## Implementations of Modules in JavaScript: Node.js vs ES6 ##