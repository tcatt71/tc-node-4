# Node.js Events

## Why:

Node.js is perfect for event-driven applications.

Every action on a computer is an event. Like when a connection is made or a file is opened.

## What:

Objects in Node.js can fire events, like the readStream object fires events when opening and closing a file:

```
const rs = fs.createReadStream("./demofile.txt");

rs.on("open", function () {
    console.log("The file is open");
});
```

### Events Module

Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.

To include the built-in Events module use the require() method. In addition, all event properties and methods are an instance of an EventEmitter object. To be able to access these properties and methods, create an EventEmitter object:

```
const { EventEmitter } = require("events");

let eventEmitter = new EventEmitter();
```

### The EventEmitter Object

You can assign event handlers to your own events with the EventEmitter object.

In the example below we have created a function that will be executed when a "scream" event is fired.

To fire an event, use the emit() method.

```
const eventEmitter = new EventEmitter();

// Create an event handler
const myEventHandler = (employee) => {
    console.log("Insert new employee to database*");
};

// Assign the event handler to the event
eventEmitter.on("insert", myEventHandler);

// Fire the 'insert' event
eventEmitter.emit("insert", { name: "Ben", role: "admin" });
```

Similar to JavaScript in the browser, we can add or remove event listeners. We can also dispatch, or emit, our own events.

Here’s a list of event methods:

- eventEmitter.on(event, handler) - adds an event listener to an event

- eventEmitter.addListener(event, handler) same as eventEmitter.on())

- eventEmitter.emit(event) - emits an event

- eventEmitter.eventNames() - returns an array of strings representing each event presently registered

- eventEmitter.getMaxListeners() - returns a number of the max number of event listeners for an event. The default max number of events is 10

- eventEmitter.setMaxListeners() - allows you to change the max number of event listeners per event

- eventEmitter.listenerCount(event) - returns a number of listeners per event

- eventEmitter.listeners(event) - returns an array of listeners of the event

- eventEmitter.off(event, handler) - removes an event listener from an event

- eventEmitter.removeListener(event, handler) - same as eventEmitter.off()

- eventEmitter.once(event, handler) - adds an event listener to an event that is only called once

- eventEmitter.prependListener(event, handler) - adds an event handler to an event that is called first, before any other event handler

- eventEmitter.prependOnceListener(event, handler) - adds an event handler to an event that is called first and only once, before any other event handler

- eventEmitter.removeAllListeners(event) - removes all event listeners of an event

## How:

Whenever it makes sense for code to SUBSCRIBE to something rather than get a callback from something. The typical use case would be that there's multiple blocks of code in your application that may need to do something when an event happens.

For example, let's say you are creating a ticketing system. The common way to handle things might be like this:

```
function addTicket(ticket, callback) {
    insertTicketIntoDatabase(ticket, (err) => {
        if (err) {
            return handleError(err)
        }

        callback();
    })
}
```

But now, someone has decided that when a ticket is inserted into the database, you should email the user to let them know. That's fine, you can add it to the callback:

```
function addTicket(ticket, callback) {
    insertTicketIntoDatabase(ticket, (err) => {
        if (err) {
            return handleError(err)
        }

        emailUser(ticket, callback);
    })
}
```

But now, someone wants to also notify another system that the ticket has been inserted. Over time, there could be any number of things that should happen when a ticket is inserted. So let's change it around a bit:

```
function addTicket(ticket, callback) {
    insertTicketIntoDatabase(ticket, (err) => {
        if (err) {
            return handleError(err)
        }

        TicketEvent.emit("inserted", ticket);

        callback();
    })
}
```

We no longer need to wait on all these functions to complete before we notify the user interface. And elsewhere in your code, you can add these functions easily:

```
TicketEvent.on("inserted", (ticket) => {
    emailUser(ticket);
})

TicketEvent.on("inserted", (ticket) => {
    notifySlack(ticket);
});
```

## Exercise:

### Objectives

- Your objective is to create a server that can handle a post request to “/newsletter_signup”

- You must read and decode the request body (which will contain a name and email), and append the contact information to a csv file (your newsletter list)

- CONSTRAINT: When the client request is a “POST” method to the url “/newsletter_signup”, you will emit a ‘signup’ event. A listener associated with this event will handle your logic

### Getting Started

1.  In VS Code, create and open a new folder named node_events

2.  Create an server.js file

3.  Import “EventEmitter” from the events module

4.  You will also need the path, http, and fs modules imported to use

#### PART 1:

5.  Using the EventEmitter class, create a new EventEmitter instance called “NewsLetter”

6.  Instantiate a new server instance with createServer

7.  Inside the server request handler, listen for the ‘data’ event to be emitted, and pass in a callback function that pushes each ‘chunk’ into an array named ‘chunks’

8.  Listen for the request ReadStream ‘end’ event, and pass in a callback that contains a conditional statement (if/else)

9.  The conditional statement will check the request url and method, and if they are “POST” and “/newsletter_signup”, decode the chunks array with Buffer.concat().toString(), and use JSON.parse() on the result to access the request body values

10. Next, emit a ‘signup’ event, and pass in the value to be used by your event listener callback (name + email for csv record)

11. Write and end the response to the client

#### PART 2

12. Account for any method or url that is not “POST” + “/newsletter_signup”

13. Outside of your server request handler, add an event listener for a ‘signup’ event on the NewsLetter EventEmitter

14. Pass in a callback that takes in a ‘contact’ as a parameter

15. This function should use fs.appendFile() to add the contact to a csv file in your project directory

16. Account for errors

17. Initialize the node app and test with Postman

#### BONUS

- A get request to your “/newsletter_signup” endpoint should send back an html page with a form
- This form should have labels and inputs for name and email
- This form should send the name and email as the \_request body \_to your server to process and add to your newsletter.csv file (you’ve already completed this logic)
- If the action is successful or unsuccessful, display feedback to the user on the html page

## Exercise Walkthrough Documentation

Click the gif to watch the lecture video

[![Exercise Walkthrough Documentation](gif3.gif)](https://vimeo.com/518355148/7969e2ac4b)

## Quiz:

[Node.js Events Quiz](https://docs.google.com/forms/d/e/1FAIpQLSetE5ajlv2XMvOCYoY_4PSzPHIuki5lFGLSb80R6ZWswUZKeA/viewform)
