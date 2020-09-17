'use strict';

const superagent = require('superagent');

superagent.post('http://localhost:3000/signin')
  .auth('john', 'johnny')
  .then(results => {

    let token = results.body.token;

    superagent.get('http://localhost:3000/secretarea')
      .set('Authorization', `Bearer ${token}`)
      .then(results => {
        console.log(results.text);
      })
      .catch(e => console.error(e.message))
  })

