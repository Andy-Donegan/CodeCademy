# Chaining Multiple Promises #

- [Index](../).
- [Previous Using catch() with Promises](./UsingCatch()WithPromises).
- [Next Avoiding Common Mistakes](./AvoidingCommonMistakes).

One common pattern we’ll see with asynchronous programming is multiple operations which depend on each other to execute or that must be executed in a certain order. We might make one request to a database and use the data returned to us to make another request and so on! Let’s illustrate this with another cleaning example, washing clothes:

We take our dirty clothes and put them in the washing machine. If the clothes are cleaned, then we’ll want to put them in the dryer. After the dryer runs, if the clothes are dry, then we can fold them and put them away.

This process of chaining promises together is called composition. Promises are designed with composition in mind! Here’s a simple promise chain in code:
```
firstPromiseFunction()
.then((firstResolveVal) => {
  return secondPromiseFunction(firstResolveVal);
})
.then((secondResolveVal) => {
  console.log(secondResolveVal);
});
```
Let’s break down what’s happening in the example:

- We invoke a function firstPromiseFunction() which returns a promise.
- We invoke .then() with an anonymous function as the success handler.
- Inside the success handler we return a new promise— the result of invoking a second function, secondPromiseFunction() with the first promise’s resolved value.
- We invoke a second .then() to handle the logic for the second promise settling.
- Inside that .then(), we have a success handler which will log the second promise’s resolved value to the console.
In order for our chain to work properly, we had to return the promise secondPromiseFunction(firstResolveVal). This ensured that the return value of the first .then() was our second promise rather than the default return of a new promise with the same settled value as the initial.

Let’s write some promise chains!