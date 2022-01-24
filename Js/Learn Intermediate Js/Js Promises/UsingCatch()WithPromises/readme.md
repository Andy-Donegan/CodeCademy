# Using Catch() With Promises #

- [Index](../).
- [Previous Success and Failure Callback Functions](../SuccessAndFailureCallbackFunctions).
- [Next Chaining Multiple Promises](../ChainingMultiplePromises).

Using catch() with Promises
One way to write cleaner code is to follow a principle called separation of concerns. Separation of concerns means organizing code into distinct sections each handling a specific task. It enables us to quickly navigate our code and know where to look if something isn’t working.

Remember, .then() will return a promise with the same settled value as the promise it was called on if no appropriate handler was provided. This implementation allows us to separate our resolved logic from our rejected logic. Instead of passing both handlers into one .then(), we can chain a second .then() with a failure handler to a first .then() with a success handler and both cases will be handled.
```
prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .then(null, (rejectionReason) => {
    console.log(rejectionReason);
  });
 ```
Since JavaScript doesn’t mind whitespace, we follow a common convention of putting each part of this chain on a new line to make it easier to read. To create even more readable code, we can use a different promise function: .catch().

The .catch() function takes only one argument, onRejected. In the case of a rejected promise, this failure handler will be invoked with the reason for rejection. Using .catch() accomplishes the same thing as using a .then() with only a failure handler.

Let’s look at an example using .catch():
```
prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });
```
Let’s break down what’s happening in the example code:

- prom is a promise which randomly either resolves with 'Yay!' or rejects with 'Ohhh noooo!'.
- We pass a success handler to .then() and a failure handler to .catch().
- If the promise resolves, .then()‘s success handler will be invoked with 'Yay!'.
- If the promise rejects, .then() will return a promise with the same rejection reason as the original promise and .catch()‘s failure handler will be invoked with that rejection reason.
Let’s practice writing .catch() functions.