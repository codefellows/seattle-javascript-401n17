'use strict';

// This library helps us get user input from the command line
const inquirer = require('inquirer');

// TCP library (built into node)
const net = require('net');

const client = new net.Socket();

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;
client.connect(port, host, () => { });

let name = '';
const messages = [];


// What we do when the server gives us data back
// Notice that TCP uses node events to handle the incoming data!
client.on('data', function (data) {
  // the data/payload must be in JSON format, and must contain an event property
  let event = JSON.parse(data);
  // Ignore anything that's not clearly a chat.
  // Remember, our server might be dealing events from games, databases, etc
  if (event.event === "message") {
    messages.push(event.payload);
    // Re-paint the screen every time
    // UI on the console is insanely hard without a library to help you
    console.clear();
    messages.forEach(message => console.log(message));
    console.log('');
  }
});

function sendMessage(text) {
  console.log('sending', text);
  let message = `[${name}]: ${text}`;
  let event = JSON.stringify({ event: 'message', payload: message });
  client.write(event);
}


// Get Input
async function getInput() {
  let input = await inquirer.prompt([{ 'name': 'text', 'message': ' ' }])
  sendMessage(input.text);
  // After we get the input and send the message to the server, do it again
  getInput();
}

// Get their name
async function getName() {
  console.clear();
  let input = await inquirer.prompt([{ 'name': 'name', 'message': 'What is your name?' }])
  name = input.name;
}

getName();
getInput();
