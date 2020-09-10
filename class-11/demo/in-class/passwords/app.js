'use strict'

const base64 = require('base-64');
const bcrypt = require('bcrypt');

// Basic Auth -- Send username and password:
// username:password
// encoded with base 64 encoding

let creds = 'john:johnny';
let encoded = base64.encode(creds);
let decoded = base64.decode(encoded);

console.log({ creds }); // Original String
console.log({ encoded }); // After base64 Encoding
console.log({ decoded }); // Decoding what we encoded is the same as orig

// Encryption is one way only

let password = 'SuperSecret$auceIsTheBestSauce';

let h1 = '$2b$05$sc0gHvCCi0JZ.3hl04DrXeRTNB1Yvp3dJo1vHU5qTSutR2JbQbRua';

encrypt(password);

isValid(password, h1);

async function encrypt(word) {
  let hashed = await bcrypt.hash(word, 10);
  console.log(hashed);
}

async function isValid(password, hash) {
  let valid = await bcrypt.compare(password, hash);
  console.log(valid);
}
