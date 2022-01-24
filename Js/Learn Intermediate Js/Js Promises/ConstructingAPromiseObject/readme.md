# Constructing a Promise Object #

- [Index](../).
- [Previous What is a Promise?](../WhatIsAPromise).
- [Next The Node setTimeout() Function](../TheNodesetTimeout()Function).

Let’s construct a promise! To create a new Promise object, we use the new keyword and the Promise constructor method:
```
const executorFunction = (resolve, reject) => { };
const myFirstPromise = new Promise(executorFunction);
```
The Promise constructor method takes a function parameter called the executor function which runs automatically when the constructor is called. The executor function generally starts an asynchronous operation and dictates how the promise should be settled.

The executor function has two function parameters, usually referred to as the resolve() and reject() functions. The resolve() and reject() functions aren’t defined by the programmer. When the Promise constructor runs, JavaScript will pass its own resolve() and reject() functions into the executor function.
- resolve is a function with one argument. Under the hood, if invoked, resolve() will change the promise’s status from pending to fulfilled, and the promise’s resolved value will be set to the argument passed into resolve().
- reject is a function that takes a reason or error as an argument. Under the hood, if invoked, reject() will change the promise’s status from pending to rejected, and the promise’s rejection reason will be set to the argument passed into reject().
Let’s look at an example executor function in a Promise constructor:
```
const executorFunction = (resolve, reject) => {
  if (someCondition) {
      resolve('I resolved!');
  } else {
      reject('I rejected!'); 
  }
}
const myFirstPromise = new Promise(executorFunction);
```
Let’s break down what’s happening above:

- We declare a variable myFirstPromise
- myFirstPromise is constructed using new Promise() which is the Promise constructor method.
- executorFunction() is passed to the constructor and has two functions as parameters: resolve and reject.
- If someCondition evaluates to true, we invoke resolve() with the string 'I resolved!'
- If not, we invoke reject() with the string 'I rejected!'
In our example, myFirstPromise resolves or rejects based on a simple condition, but, in practice, promises settle based on the results of asynchronous operations. For example, a database request may fulfill with the data from a query or reject with an error thrown. In this exercise, we’ll construct promises which resolve synchronously to more easily understand how they work.