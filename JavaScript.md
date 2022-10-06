In JavaScript, it was really important to know how to make HTTP requests and retrieve the dynamic data from the server/database.

JavaScript provides some built-in browser objects and some external open source libraries to interact with the APIs.

### Here are the possible ways to make an API call:
1) XMLHttpRequest
2) fetch
3) Axios
4) jQuery

### XMLHttpRequest
Before ES 6 comes out, the only way to make an HTTP request in JavaScript was XMLHttpRequest. It is a built-in browser object that allows us to make HTTP requests in JavaScript.

JSONPlaceholder is a free online REST API that you can use whenever you need some fake data.


By default we receive the response in the string format, we need to parse into JSON.

XMLHttpRequest was deprecated in ES 6 by the introduction of fetch. But still, we are using XMLHttpRequest when we need to work with old browsers and don’t want polyfills.

### Fetch
Fetch allows you to make an HTTP request in a similar manner as XMLHttpRequest but with a straightforward interface by using promises. It’s not supported by old browsers (can be polyfilled), but very well supported among the modern ones. We can make an API call by using fetch in two ways.

By using Async and Await
The fetch API is very powerful. We can easily send AJAX requests using the browser fetch API. The major disadvantage of fetch API is error handling.

### Axios
Axios is an open-source library for making HTTP requests and provides many great features, and it works both in browsers and Node.js. It is a promise-based HTTP client that can be used in plain JavaScript and advanced frameworks like React, Vue.js, and Angular.

It supports all modern browsers, including support for IE 8 and higher.

### Installation:
If you are using any one of the package managers like npm or yarn.
And include it in HTML file like this
The easiest way to include Axios is by using external CDN:
Now you can start sending HTTP request by including the following script in your HTML file.

The following are the advantages of Axios
Axios performs automatic transformations and returns the data in JSON format.
Better error handling
Axios has a wide range of supported browsers.

### jQuery
jQuery has many methods to handle asynchronous HTTP requests. In order to use jQuery, we need to include the source file of jQuery, and $.ajax() method is used to make the HTTP request.

```javascript
$.ajax()
```

The $.ajax method takes many parameters, some of which are required and others optional. It contains two callback functions success and error to handle the response received.