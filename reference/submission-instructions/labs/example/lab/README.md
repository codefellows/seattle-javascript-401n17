# LAB: Express Server

Complete a full CI/CD deployment of an express server

## Before you begin

1. Refer to the *Getting Started* guide  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md)
1. Create a new repository for this project, called `api-server-example` and work in a branch called `practice`, created from `master`
1. Following completion of this assignment, you may merge this branch back into your `master` branch.

## Business Requirements

1. Deploy an API server to heroku that responds to a route called `/status` with an object representing the state of the server
1. The state should contain the domain name and port in JSON format

### For Example:

```bash
http://john-api-server-demo.herokuapp.com/status
```

The server should respond with a JSON object that looks like this:

```javascript
{
  "domain": "john-api-server.demo.herokuapp.com",
  "status": "running",
  "port": 42123
}
```

## Technical Requirements / Notes

- Write this application in JavaScript as an `express` application
- Use a custom module to handle the status determination

Use the following files/structure

### `index.js` - Your application's "entry point"

- Requires the express library
- Requires a custom module called `status.js`
- Responds to the `/status` route as described above
  - Uses the status module to do so...

### `lib/status.js`

- Exports an express route handler function
- Sends a JSON object to the request, with the following rules
- For `domain`, use the `hostname` from the express `request` object
- For `port`, use the PORT from the server environment
- For `status` use "running" (assuming your server actually works)

### Assignment Submission Instructions

In Canvas, submit a link to your completed `README.md` file from today's working branch according to standards.

 Refer to the the [Submitting Standard Node.js Lab Submission Instructions](../../../reference/submission-instructions/labs/node-apps.md) for a review of the complete lab submission process and expectations
