# Warm Up - Auth Server Review

Create a new repository for this workshop, called `auth-server-workshop`

## Target Operations for this server:

### Auth System:

- POST to `/signup` with a `username` and `password`
  - Add the user to the database
  - Set an 'auth' header with the token
  - Respond with a JSON object that has a key of `token` with the token and a key of `user` that has the user record
- POST to `/signin` with a username and password using Basic Auth
  - Set an 'auth' header with the token
  - Respond with a JSON object that has a key of `token` with the token and a key of `user` that has the user record
  - Returns "Invalid Login" if the username/password is incorrect
- GET to `/secret` with a Bearer Authorization header, with a valid token
  - Say "Hello" to the user
  - Returns "Invalid Login" if the token is not valid

### API

- POST to `/api/v1/todo` with the fields: text, assignee
  - Adds item to the database
  - Displays a new To Do Item, with an ID
- GET to `/api/v2/todo'
  - Returns an object with a count property and a results array
- GET to `/api/v1/todo/ID'
  - Given a valid ID
    - Returns an object with one to do item
- PUT to `/api/v1/todo/ID' with an object containing new values
  - Given a valid ID
    - Updates the record in the database
    - Returns an object with one to do item updated
- DELETE to `/api/v1/todo/ID'
  - Given a valid ID
    - Deletes the item in the database
    - Returns the object deleted
    - Subsequent get should show the object removed

## Find the Bugs

The server has many catastrophic issues. Please identify and fix

Note:

- Bug File and Line Number
- RCA for each bug
  - Root Cause Analysis
    - What was the problem?
    - How did you find it?
    - What was the impact?
    - How did you fix it?

## Write the Tests

This server has no tests!

## Deploy
