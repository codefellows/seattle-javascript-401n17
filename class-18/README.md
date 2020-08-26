# Socket.io

Description Here

## Learning Objectives

### Students will be able to

#### Describe and Define

- Web Sockets
- Socket.io
- Network Events

#### Execute

- Implement a standalone Socket.io server for handling events and real time messaging.
- Use events to properly route incoming messages and payload

## Today's Outline

<!-- To Be Completed By Instructor -->

## Notes

### Web Sockets

A communication Protocol which provides bidirectional communication between the Client and the Server over a TCP connection, WebSocket remains open all the time so they allow the real-time data transfer. When clients trigger the request to the Server it does not close the connection on receiving the response, it rather persists and waits for Client or server to terminate the request.

### Socket.io Library

It is a library which enables real-time and full duplex communication between the Client and the Web servers. It uses the WebSocket protocol to provide the interface. Generally, it is divided into two parts, each of which use WebSockets, but also provide additional functionality such as broadcasting, namespacing, and other means of segmenting connected clients into groups.

- Client Side: it is the library that runs inside the browser or a "satellite" server that connects to a "hub"
- Server Side: It is the library for Node.js that serves as "hub" or "traffic cop"

### Connections

With TCP, you connect directly to a server with a keep-alive type of connection.

With Socket.io, you connect to a server over HTTP. The session is "kept alive" through it's internal use of the WebSocket Protocol, with session information being preserved.

### Messaging

Standard node events are sent with `emit()` and received with `on()` ... Socket.io uses the same methodology/terminology.

In an event driven node app, the entire app is in memory, and (through a common event pool), all parts of your application can emit and hear events, communicating with each other.  However, no outside application can participate in these events natively.

With Socket.io, the entire purpose is to have events shared between 'disconnected' participants.  Through a mediator (server), clients connect, emit events, and respond to events from the server.  A typical flow works like this:

- Client Applications 1, 2, 3, x ... connect to a running Socket.io server
  - Clients can join the common pool of connections or coalesce into groups/subgroups, if the server has been setup in this manner
- Client Application 1 emits an event called 'speak' to the server, with the data 'Hello World'
- Server has an `on('speak', (data) => {})` which "hears" that event
- Upon processing the event, the server may elect to
  - `broadcast()` the event itself or `emit()` an event of it's own.
    - i.e. `socket.emit('heard', data)` or `socket.emit('speak',data)`
  - Messages can be sent to individual clients, groups, or sub-groups of clients
- Other client applications that have connected into the server may have a listener on that event type, can then "hear" it as well...
  - i.e. `socket.on('incoming-message', text => console.log(text)`
- **Not every client will have a listener for every event.**
- **The server may not have a listener for every event a client sends.**

Server

```javascript
server.on('connection', (socket) => {
  // When clients "emit" an event called 'some-event', this code on the server handles it
  socket.on('some-event',  (payload) => {
    // do something with the event
  }
})
```

Client

```javascript
// When anyone "emits" or "broadcasts" an event called 'cool-thing-happened', this code on the client handles it
// Note: Not all clients will subscribe to that event. This is the whole point!
client.on('cool-thing-happened', (payload) => {
  // do something with the event
})
```

### Broadcasting

Servers or clients can "emit" or "broadcast" events in Socket.io by issuing either command with a payload

```client.emit('some-event', "I just wanted to say hello");```

```socket.broadcast('cool-thing-happened', "WOW!");

Refer to the [emit cheatsheet](https://socket.io/docs/emit-cheatsheet/) for examples and use cases.
