# Intro to Node.js

# Why:

NodeJS (or just ‘Node’) has been steadily gaining popularity since its creation in 2009. The internet is flooded with courses and articles about it, installing it is a prerequisite for pretty much any front-end development work, and of course the amount of jobs that require knowledge of it are also on the rise.

# What:

## What _is_ Node?

### Definition: “As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications.”

This is a definition that requires a little unpacking.

The important bit to understand right up front is that Node is a “JavaScript runtime”. When JavaScript was first created, it was designed to run _in the browser_. This means that it was impossible to use JavaScript to write any kind of program that was not a web-site. Node brings JavaScript _out_ of the browser. This allows developers to use JavaScript to accomplish pretty much anything that other popular server-side languages (such as Ruby, PHP, C# and Python) can do. So, at its most basic level, Node simply allows you to run JavaScript code on a machine such as your local computer or a server without having to go through a web-browser.

To facilitate this, Node has some added functionality that is not found in browser-based JavaScript, such as the ability to read and write local files, create http connections and listen to network requests.

## Event Driven

Back to the definition from Node’s website: **Node is an asynchronous event driven JavaScript runtime**. In this context asynchronous means that when you write your code you do not try to predict the exact sequence in which every line will run. Instead you write your code as a collection of smaller functions that get called in response to specific events such as a network request (event driven).

For example, let’s say you are writing a program and you need it to do the following. It should read some text from a file, print that text to the console, query a database for a list of users and filter the users based on their age.

Instead of telling your code to do those steps sequentially like so:

1.  Read File
2.  Print File Contents
3.  Query Database
4.  Filter Database Query results
    You can break up the task like so:
5.  Read File _AND THEN_ Print File Contents
6.  Query Database _AND THEN_ Filter Database Query Results.
    When you run this program Node will start at the top and begin reading the file but since that is an action that takes some time it will immediately begin running the second step (querying the database) while it’s waiting on the file to finish reading.

While both of these processes are running, **Node sits and waits on an _event_**. In this case, it is waiting on the completion of both processes, the reading of a file and the database query. When either of these tasks are finished, Node will fire off an event that will run the next function we’ve defined. So if the read-file process finishes first, it will print the file contents. If the database query finishes first, it will start the filtering process. As the programmer, we don’t know or care which order the two processes are going to be completed. If this code was processed synchronously (rather than asynchronously) we would have to wait for each step in the program before moving on to the next one, which could cause things to slow down considerably. If the file that we needed to read was really long then we might have to wait a few seconds before the database query could begin.

This process is almost exactly like the way that you would use addEventListener in front-end JavaScript to wait for a user action such as a mouse-click or keyboard press. The main difference is that the events are going to be things such as network requests and database queries. This functionality is facilitated through the use of **callbacks**. Callbacks are incredibly important to Node.

# How:

Let’s look at a quick real-world example:

```
http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"})
    response.end("Hello World!")
})
.listen(8080, function () {
    console.log("Server is listening...")
})
```

This snippet is from our very first lesson that you’ll be following very soon. Basically this code is creating a server and saying, “any time we get a network request run this callback function”. This function happens to respond with an HTML header 1 tag displaying ‘Hello World’. So if you go to a browser and navigate to the correct address and port you would see that text on your screen.

## Command Line Interface

Node.js files must be initiated in the "Command Line Interface" program of your computer.

Up to this point, we’ve used our ‘Command Prompt’, or ‘Terminal’.

You can navigate to our project folder that contains the file "server.js".

## Initiate the Node.js File

The file you have just created must be initiated by Node.js before any action can take place.

Start your command line interface, write node myfirst.js and hit enter:

```
$ node myFirst.js
Server is listening...
```

Now, your computer works as a server!

If anyone tries to access your computer on port 8080, they will get a "Hello World!" message in return!

Start your internet browser, and type in the address: [http://localhost:8080](http://localhost:8080/)

# Quiz:

## [Node Intro Quiz](https://docs.google.com/forms/d/e/1FAIpQLSdGnQJFqGbVJF-3OldbTckQR6286wHXJ-g52MuZc-1x7iFzYA/viewform?authuser=3)

## [Node Intro Quiz Review](https://vimeo.com/516895587/552e297bc5)
