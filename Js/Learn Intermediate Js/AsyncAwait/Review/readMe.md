# Review async await #

- [Index](../).
- [Previous Handling Errors](./HandlingErrors).

Awesome work getting the hang of the async...await syntax! Let’s review what you’ve learned:

- async...await is syntactic sugar built on native JavaScript promises and generators.
- We declare an async function with the keyword async.
- Inside an async function we use the await operator to pause execution of our function until an asynchronous action completes and the awaited promise is no longer pending .
- await returns the resolved value of the awaited promise.
- We can write multiple await statements to produce code that reads like synchronous code.
- We use try...catch statements within our async functions for error handling.
- We should still take advantage of concurrency by writing async functions that allow asynchronous actions to happen in concurrently whenever possible.