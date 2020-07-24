// CLIENT
const inquirer = require('inquirer');
const io = require('socket.io-client');
const slick = io.connect('http://localhost:3000/slick');

let messages = [];
let activeInput = false;
let channel = 'general';

// We're going to use the variable "channel" to let us move (reconnect)
// between rooms in the "slick" namespace on our server hub
slick.emit('join', channel);

// Update our global channel variable
slick.on('joined', (joinedChannel) => {
  channel = joinedChannel;
});

// When the server sends out a list of all messages, render them
slick.on('message', payload => {
  console.clear();
  messages.push(payload);
  messages.forEach(message => console.log(message))
  console.log('');
  beSlick();
});

// Get user input
async function beSlick() {

  // Need to check/set a flag, otherwise we'll recursively call this async function on every reload
  if (activeInput) { return; }
  activeInput = true;

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
      slick.emit('join', room);
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