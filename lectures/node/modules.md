# Node.js Modules

## Why:

What is a Module in Node.js? Consider modules to be the same as JavaScript libraries. A set of functions you want to include in your application.

## What:

A **Module** in Node. js is a simple or complex functionality, organized in single or multiple JavaScript files, which can be reused throughout the Node. js application. Each module in Node. js has its own context, so it cannot interfere with other modules or pollute global scope.

**_Also, each module can be placed in a separate .js file under a separate folder._**

### Node.js Module Types

Node.js includes three types of modules:

1.  Core Modules

2.  Local Modules

3.  Third Party Modules

## Node.js Core Modules

Node.js is a lightweight framework. The core modules include bare minimum functionalities of Node.js. These core modules are compiled into its binary distribution and load automatically when Node.js processes start. However, you need to import the core module first in order to use it in your application.

The list below details some of the important core modules in Node.js.

## Built-in Modules

Here are a few built-in modules with Node:

- **Fs** allows you to handle the file system

- **Http** allows you to initialize Node.js as an HTTP server

- **Https** allows you to initialize Node.js as an HTTPS server

- **Path** allows you to handle file paths

- **Readline** allows you to handle readable streams one line at the time

- **Stream** allows you to handle streaming data

- **Events** allows you to handle events

- **Url** allows you to parse URL strings

- **querystring** allows you to handle URL query strings

### Include Modules

As we’ve seen before, use the require() function with the name of the module to import it for use:

```
const http = require("http");
```

Now your application has access to the HTTP module, and is able to create a server:

```
const port = 3000;

// Creates a server object
http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"})
    res.write("data") // write a response to the client
    res.end() // end the response
})
.listen(port, function () {
    console.log("Server listening on port: " + port)
})
```

### The Built-in HTTP Module

Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the HyperText Transfer Protocol (HTTP).

Note, Node.js modules were created with commonjs (before ES6 import/export syntax), so we’ll have to use the require() method to use our modules.

Here’s a list of common status codes:

| Type          | Status Codes | Examples                                                                |
| ------------- | ------------ | ----------------------------------------------------------------------- |
| Informational | 1xx          | 100 Continue, 101 Switching Protocols                                   |
| Success       | 2xx          | 200 OK, 201 Created, 202 Accepted                                       |
| Redirection   | 3xx          | 300 Multiple Choices, 301 Moved Permanently, 302 Found                  |
| Client Error  | 4xx          | 400 Bad Request, 403 Forbidden, 404 Not Found, 422 Unprocessable Entity |
| Server Error  | 5xx          | 500 Internal Server Error, 503 Service Unavailable                      |

## How:

So again, we’ll use the http module with our require method:

```
const http = require("http");
```

### Node.js as a Web Server

The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.

The createServer() method takes in a callback function that is called once for every HTTP request that's made to the server (hints the reason we call it the request handler). When we call the createServer method, it returns a server object that is an “EventEmitter”.

```
http.createServer(function (req, res) {

})
```

So, the function passed into the http.createServer() method will be executed when someone tries to access the server at localhost:3000.

```
http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"})
    res.write("Hello World!")
    res.end()
})
```

Save the code above in a file called "app.js", and initiate the file:

```
$ node app.js
Server listening on port: 3000
```

## Add an HTTP Header

If the response from the HTTP server is supposed to be displayed as text, you should include an HTTP header with the correct content type:

```
http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"})
    res.write("Hello World!")
    res.end()
}).listen(3000)
```

The first argument of the res.writeHead() method is the status code, 200 means that all is OK, the second argument is an object containing the response headers.

Here are some notable HTTP methods for interacting with the response headers:

- getHeaders() get a copy of the HTTP headers already set

- setHeader('header', value) sets an HTTP header value

- getHeader('header') gets an HTTP header already set

- removeHeader('headername') removes an HTTP header already set

### HTTP Request Object

The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (instance of a http.IncomingMessage). The request object is a ReadableStream, and also an EventEmitter that we can attach event listeners to.

This object has a property called "url" which holds the part of the url that comes after the domain name:

```
http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"})
    res.write(req.url)
    res.end()
}).listen(3000)
```

We can also access the http method (GET, POST, PUT, DELETE, etc) with req.method.

### HTTP Response Object

The second argument that we pass in to the request handler is the res argument. The response object is a WritableStream and an EventEmitter that we can apply event listeners to. Since it is a WriteableStream, we can write a response body out to the client with just a few methods.

```
http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"})
    res.write(req.method + " " + req.url)
    res.end()
}).listen(3000)
```

Above, we first use the res.writeHead() to set the headers for our response. The first argument ‘200’ represents the ok status code, and the object with ‘Content-Type’ is our header object describing the response.

You use the res.write() method to send data to the client in the response body. It will send buffered data to the HTTP response stream.

Lastly, the res.end() method you’ll always call to close the response. Now our response is complete and sent to the client.

### Routes

This is fantastic! But we haven’t covered sending different responses depending on the exact url requested by the client. Let’s do that now with a bit of conditional logic:

```
http.createServer(function (req, res) {
    const {  url } = req;
    res.setHeader("Content-Type", "text/html")

    if (url == "/") {
        res.statusCode = 200;
        res.write("<h1>Home</h1>")
    } else if (url == "/about") {
        res.statusCode = 200;
        res.write("<h1>About</h1>")
    }

    res.end()
}).listen(3000)
```

Now if the client sends a request to localhost:3000/ they will receive “Home” in a heading 1 tag. If they send a request to localhost:3000/about they will receive “About” in a heading 1 tag.

But what if the user sends a request to a url other than “/” or “/about”? Well we should account for that.

```
http.createServer(function (req, res) {
    const {  url } = req;
    res.setHeader("Content-Type", "text/html")

    if (url == "/") {
        res.statusCode = 200;
        res.write("<h1>Home</h1>")
    } else if (url == "/about") {
        res.statusCode = 200;
        res.write("<h1>About</h1>")
    } else {
        res.statusCode = 404;
        res.write("<h1>404 Not Found</h1>")
    }

    res.end()
}).listen(3000)
```

### POST and PUT Requests

Up until now, we have only been focusing on GET requests to our server. However, accounting for POST or PUT requests are a bit different. For those requests, we want to access the request body to use in our application.

As we mentioned earlier, the request object that's passed in to the request handler callback function is a ReadableStream. We can grab the data right out of the stream by listening to the stream's 'data' and 'end' events.

The stream emits chunks, each chunk being a Buffer. Definition of a Buffer, “_Raw data is stored in instances of the Buffer class. A Buffer is similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap. A Buffer cannot be resized._” We can collect the data in an array, then at the 'end' event, combine and stringify the result.

```
http.createServer(function (req, res) {
    const { method, url } = req;
    const chunks = [];

    req.on("data", function (chunk) {
        chunks.push(chunk)
    })

    req.on("end", function () {
        const body = JSON.parse(Buffer.concat(chunks).toString());
        const responseBody = { method, url, body }

        // Echoes responseBody back to the client
        // Included are the request method (GET, POST, PUT, DELETE),
        // request URL, and request body
        res.write(JSON.stringify(responseBody))
        res.end()
    })

    res.end()
}).listen(3000)
```

Since the request object is an EventEmitter, we can attach an event listener with .on(“event”) to listen for the “data” events and the “end” event. We use Buffer.concat(chunks).toString() to decode the Buffer for our use. Once we have the data we need, we can write our response to the client with the appropriate headers. Remember to always call the response objects .end() method to end the response.

FYI: “_Converting a Buffer into a string ... is referred to as decoding, and converting a string into a Buffer is referred to as encoding._”

### Error Handling 101

Since both the request and response objects are streams and EventEmitters, they will crash the app when an error is thrown. We can account for this by adding an event listener on each for an ‘error’ event. Here we can specify to end the response with appropriate feedback both in the headers and body.

```
req.on("error", function(err) {
    res.writeHead(400, {"Content-Type": "text/html"})
    res.write("An error occurred because of your request : (")
    res.end()
})
```

And

```
res.on("error", function(err) {
    res.writeHead(500, {"Content-Type": "text/html"})
    res.write("An error occurred on the server : (")
    res.end()
})
```

## Quiz:

[Node HTTP Quiz](https://docs.google.com/forms/d/e/1FAIpQLSeo7tuQcGi2qqblawyDbgaBtZXZXaxBFaiF9HipFF61HAFnRQ/viewform?authuser=3)
