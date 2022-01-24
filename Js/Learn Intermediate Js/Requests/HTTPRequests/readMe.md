# HTTP Requests #

- [Index](../).
- [Previous HTTP Requests](./HTTPRequests).
- [Next XHR GET Requests](./XHRGETRequests).

One of JavaScript’s greatest assets is its non-blocking properties, or that it is an asynchronous language.

Websites, like newspaper websites, take advantage of these non-blocking properties to provide a better user experience. Generally, a site’s code is written so that users don’t have to wait for a giant image to load before being allowed to read the actual article—rather, that text is rendered first and then the image can load in the background.

JavaScript uses an event loop to handle asynchronous function calls. When a program is run, function calls are made and added to a stack. The functions that make requests that need to wait for servers to respond then get sent to a separate queue. Once the stack has cleared, then the functions in the queue are executed.

Web developers use the event loop to create a smoother browsing experience by deciding when to call functions and how to handle asynchronous events. We’ll be exploring one system of technologies called Asynchronous JavaScript and XML, or AJAX.

To read more about the event loop, read the MDN documentation:

- [MDN Documentation: Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)