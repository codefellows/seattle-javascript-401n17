// CLIENT
const inquirer = require('inquirer');
const io = require('socket.io-client');
const slick = io.connect('http://localhost:3000/slick');

// Just remember this every time we connect!
let clientID = process.argv.slice(2)[0];
let activeInput = false;
let channel = 'general';
let messages = [];

// We're going to use the variable "channel" to let us move (reconnect)
// between rooms in the "slick" namespace on our server hub
slick.emit('join', { channel, clientID });

// Update our global channel variable
slick.on('joined', (joinedChannel) => {
  channel = joinedChannel;
});

slick.on('message', data => {
  let { messageID, payload } = data;
  messages.push(payload);
  acknowledge(messageID);
  drawMessages();
  beSlick();
});

function acknowledge(messageID) {
  slick.emit('received', { clientID, messageID });
}

function drawMessages() {
  console.clear();
  messages.forEach(message => console.log(message))
  console.log('');
  beSlick();
}

// Get user input
async function beSlick() {

  // Need to check/set a flag, otherwise we'll recursively call this async function on every reload
  if (activeInput) { return; }
  activeInput = true

  const response = await inquirer.prompt([
    {
      prefix: '',
      name: 'text',
      message: `-----------------------------------\n ${channel} >`
    }
  ]);

  // Pull out the first 4 chars of the input to find exit or join
  // No, this is not scalable ...
  //   ... how can this be improved or extendable?
  let command = response.text.toLowerCase().split('', 4).join('');

  // Given a command, either deal with it, or send the message
  switch (command) {
    case 'quit':
      process.exit();
      break;
    case 'join':
      let room = response.text.split(' ')[1] || channel; // default to the current channel
      activeInput = false;
      slick.emit('join', { channel: room, clientID });
      beSlick();
      break;
    default:
      activeInput = false;
      slick.emit('message', response.text)
      beSlick();
      break;
  }

}

beSlick();