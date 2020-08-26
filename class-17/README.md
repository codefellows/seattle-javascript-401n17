# TCP Server

The Transmission Control Protocol (TCP) is widely used by application layer protocols in the Internet Protocol Suite. TCP creates a two way communication between two hosts and provides reliable, ordered, and error checked byte streams between the applications.

In this class, we will be building a multiple-server event driven system, using TCP as our communication layer.

## Learning Objectives

### Students will be able to

#### Describe and Define

- The OSI Networking Model
- TCP and UDP Protocol
- Stateful Networking
- Packets
- Buffered Transfer

#### Execute

- Create a TCP Server
- Network computers by implementing a TCP server
- Simulate events through curated messages

## Today's Outline

<!-- To Be Completed By Instructor -->

## Notes

### OSI Model

| # | Layer | Protocol Data Unit | Function | Examples |
| --- | ---- | ----- | ----- | ----- |
| 7 | Application | Data | Height Level APIs | HTTP, IMAP, POP, SSH |
| 6 | Presentation | Data | Data translating, including encryption, character encoding, and compression | Strings encoded with null terminated strings vs Strings defined by an Integer Length |
| 5 | Session | Data | Manages a session though passing data back and fourth | NetBios and Remote Procedure Protocol (RPC) |
| 4 | **Transport** | Segment / Datagram | Reliable transmission of data between points on a network | TCP and UDP |
| 3 | Network | Packet | Managing the network through addressing, routing, and traffic control | IP and ICMP
| 2 | Data Link | Frame | Reliable transmission of frames between to physical layer nodes | Ethernet and IEEE 802.11 wireless LAN |
| 1 | Physical | bit | transmission and reception of raw data streams over a physical medium | USB, Bluetooth, Ethernet physical layer, SMB, Telephone network modem |

### Internet Protocol Suite

The Internet Protocol Suite is the conceptual model for the protocols used by the internet. It is often referred to as **TCP/IP** because the IP and TCP were the original protocols in the suite. The Internet Protocol Suite is described using four layers - Link, Internet, Transport, and Application. Web developers often reference the Internet Protocol Suite model when discussing network communication and data exchange.

| Layer | Function | Examples |
| ---- | ---- | ---- |
| Application | Provides high level data exchange for use in user application development |  HTTP, SMTP, FTP, DHCP |
| Transport | Provides process to process data exchange | TCP, UDP, µTP|
| Internet | Maintains computer addressing and identification and manages packet routing | IPv4, IPv6, ICMP |
| Link layer | Used to move packets between two different hosts | MAC, ARP, DSL, Ethernet |

### [TCP](https://www.ietf.org/rfc/rfc793.txt)

The Transmission Control Protocol (TCP) is widely used by application layer protocols in the Internet Protocol Suite. TCP creates a two way communication between two hosts and provides reliable, ordered, and error checked byte streams between the applications. TCP data transfers manage network congestion and use flow control to limit the rate a sender transfers data to guarantee reliable delivery. Each IP packet between the hosts carries a single TCP Segment. A TCP segment is made up of header and data sections.

### Create a Socket Server

```javascript
const net = require('net');
const server = net.createServer();
let connectedSockets = [];

// start the server
server.listen(port, () => {
  console.log('Server up and running on port', port);
});

// listen for other applications to connect to this server
server.on('connection', socket => {
  console.log(socket, 'has connected to this server');
  connectedSockets.push(socket);

  socket.on('data', (buffer) => { // handle buffer }
  socket.on('end', () => { // handle the full message, finally })
});
```

### Create a Socket Connection

```javascript
const net = require('net');
const socket = new net.Socket();

socket.connect({ port: 3000, host: 'localhost' }, () => {
  console.log('Connected to the server on localhost:3000');
});
```

### Sending Data from a Socket Server to a Socket Connection

```javascript
// server
let destinationSocket = connectedSockets[0];
destinatoinSocket.write('Here is some data I am sending');
```

```javascript
// connection
socket.on('data', payload => {
  console.log('Received:', payload);
});
```
