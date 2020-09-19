# LAB: OAuth

Authentication Server Phase 2: Integrate Github OAuth into the authentication system

In this phase, we'll be integrating with GitHub's OAuth service to provide a way for users to easily **signup** and **signin** to our system in addition to the Basic Authentication we've already built.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

1. Continue working in your `auth-server` repository, in a new branch called `class-12`, created from `master`
1. Following completion of this assignment, you may merge this branch back into your `master` branch.

## Business Requirements

Refer to the [Authentication System Overview](../../apps-and-libraries/auth-server/README.md) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

## Phase 2 Requirements

In this, the second phase of the Authentication Server build, we'll be adding support for OAuth to the authentication server. Because the vast majority of our users are developers, we will be using GitHub as our OAuth provider.

Today's **new** user stories:

- As a user, I want to use GitHub to login to the service so that I don't have to manage another account
- As a user, After I've logged in using GitHub the first time, I want a token that I can easily re-authenticate
- As a developer, I want to use industry standards for OAuth
- As a developer, I want to auto-create user accounts when a new user authenticates with OAuth
- As a developer, I want to re-use existing accounts when an existing user authenticates with OAuth
- As a developer, I want to provide applications and users a token following authentication to facilitate re-authentication on subsequent requests

> **Note:** All previous requirements and user stories are still required. This Phase is intended to add functionality to our existing authentication server.

## Technical Requirements / Notes

In Phase 2, we will need to manage 3 primary actions that must happen in sequence

1. Authenticate users using OAuth
   - This will require both a new route and middleware
1. Following authentication manage the user account
   - Add new accounts or reference existing ones following authentication
1. Provide an access token
   - As with Basic Authentication, the return value for a valid login is a JWT Token

Noted here are the relevant changes you'll need to make to your server to complete Phase 2:

### Starting the OAuth process

### Add a new `/oauth` route to the auth router

In order to handle OAuth requests, we will need a route that can receive the initial code from the OAuth server and a middleware module that will handle the handshaking process.

- This should be a GET route
  - i.e. `app.get('/oauth', ...)`

### OAuth Middleware Module

In order to handle the handshake process that is the heart of OAuth, we need a new middleware module that will, when added to the `/oauth` route, will complete the task of authenticating the user.

Create a new middleware module called `oauth.js` in your auth module's middleware folder

- This should be required by your auth router and attached inline to the `/oauth` route:
  - `app.get('/oauth', OAuthMiddleware, ...)`
    - This middleware will need to do the following:
      - Exchange the code received on the initial request for a token from the Provider
      - Use the token to retrieve the user's account information from the Provider
      - Create/Retrieve an account from our Mongo users database matching the user's account (email or username) using the **users model**
      - Generate a token using the **users model**
      - Add the token and the user record to the request object
  - If it is successful, use `next()` to continue on to the actual route handler
  - If not, the middleware should invoke the error handler by calling `next()` with an error

### Users Model

Once the handshaking process has completed in the middleware method, the middleware will need our users model to be able to create a new account for the user that was just authenticated or retrieve an existing account, if this is a returning users.

- Create a new method that will do a lookup for the account by email or username
- If found, return it
- If not, create a new account for the user and return that

### Testing

You are not required to write automated tests for the `/oauth` route or the middleware, as this will end up requiring (and invoking) actual user requests at the OAuth Provider's API which we don't want.

You are required to supply a working .html file and an express server that can launch serve it, to begin the OAuth process

### Visual Validation

We have deployed a web application that's designed to test your Server. This is a good way to ensure that your system works as expected. There's nothing to "turn in" here, this is provided for your benefit.

> Note, this is effectively the same as the `index.html` file we require that your server provide and work with. You are still required to write your own "front end" for the OAuth process.

- Open this [Web Application](https://javascript-401.netlify.app/)
  - Click the "Module 3 (AUTH)" / OAuth Link
  - In the form at the top of the page, enter the URL to your Authentication Server and all other relevant information
  - Attempt to authenticate using your OAuth Provider
  - If your lab is working, this app will show the JWT Token your application provides

### Assignment Submission Instructions

Refer to the the [Submitting Express Server Lab Submission Instructions](../../../reference/submission-instructions/labs/express-servers.md) for the complete lab submission process and expectations
