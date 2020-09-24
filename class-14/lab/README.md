# LAB: Access Control

Authentication Server Phase 4: Role Based Access Control

Being able to login is great. But controlling access at a more granular level is vital to creating a scalable system. In this lab, you will implement Role Based Access Control (RBAC) using an Access Control List (ACL), allowing to not only restrict access to routes for valid users, but also based on the individual permissions we give each user.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

1. Continue working in your `auth-server` repository, in a new branch called `class-14`, created from `master`
1. Following completion of this assignment, you may merge this branch back into your `master` branch.

## Business Requirements

Refer to the [Authentication System Overview](../../apps-and-libraries/auth-server/README.md) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

## Phase 4 Requirements

In the final phase, the new requirement is to expand the restrictive capabilities of our routes. As it currently stands, a valid user with a valid token is able to access a route. We need to add an optional and additional layer of control, allowing us to ensure that based on the users' role in our organization, we can further restrict/allow access.

Specifically, we want to make the following restrictions:

- Regular users can **READ**
- Writers can **READ** and **CREATE**
- Editors can **READ**, **CREATE**, and **UPDATE**
- Administrators can **READ**, **CREATE**, **UPDATE**, and **DELETE**

Routes that end up performing those actions in our API/Database need to be protected by both a valid user and that user's permissions

Today's **new** user stories:

- As a user, I want to present my token instead of my username and password so that I can access protected routes more securely
- As a user, I expect not to be able to access routes that my access level does not allow me to see
- As a developer, I want to protect any route on my server by requiring a valid token to access it
- As a developer, I want to create a rule by which I can restrict access to a route by naming a capability
- As a developer, I want to protect any route on my server by checking the users' capabilities against the route's rules

> **Note:** All previous requirements and user stories are still required. This Phase is intended to add functionality to our existing authentication server.

## Technical Requirements / Notes

### "Protect" routes by restricting access without a valid token AND a specific capability.

As the purpose behind authorization is to restrict access to our system to valid users with proper permissions. Let's begin by creating a route on the server that we can use to prove our system will work on a larger scale. If we can prove that we can protect one route, we can protect any route the same way.

The idea here will be to apply multiple middleware methods that run in series. Either one of them could throw an error and prevent access, allowing us to first check for a valid user and then their capabilities

1. Create a new "v2" router in the API, (/api/v2) which will add a layer of authentication to every route
1. Add middleware to the CRUD routes to "protect" them
   - **Bearer Token Validation**, which ensures that the user is logged in
   - **Permission Authorization**, which ensures that the user has the correct permissions for the route
     - If the user's role grants them a capability that matches what is declared on the route, grant access
     - If not - return an error message and deny access

Example:

```javascript
app.post('/::model', bearer, permissions('create'), (req,res) => { ... })
```

### Clean and Test

The provided server works to support the above requirements, but it has a few principle shortcomings that you must address

1. Convert any method that's using promise syntax (`.then()`) to use the more modern `async`/`await` syntax
1. Ensure that all route handler methods, middleware methods, model methods are properly catching and responding to errors.
   - Do you have `try/catch` in place wherever you can?
   - Are you logging full errors to the console?
   - Are you giving properly formatted errors to the browser in the response?
1. Write a suite of tests that make the following assertions, at minimum:
   - AUTH Routes
     - POST /signup creates a new user and sends an object with the user and the token to the client
     - POST /signin with basic authentication headers logs in a user and sends an object with the user and the token to the client
   - V1 (Unauthenticated API) routes
     - POST /api/v1/todo adds an item to the DB and returns an object with the added item
     - GET /api/v1/todo returns a list of todo items
     - GET /api/v1/todo/ID returns a single item by ID
     - PUT /api/v1/todo/ID returns a single, updated item by ID
     - DELETE /api/v1/todo/ID returns an empty object. Subsequent GET for the same ID should result in nothing found
   - V2 (Authenticated API Routes)
     - POST /api/v2/todo with a bearer token that has `create` permissions adds an item to the DB and returns an object with the added item
     - GET /api/v2/todo with a bearer token that has `read` permissions returns a list of todo items
     - GET /api/v2/todo/ID with a bearer token that has `read` permissions returns a single item by ID
     - PUT /api/v2/todo/ID with a bearer token that has `update` permissions returns a single, updated item by ID
     - DELETE /api/v2/todo/ID with a bearer token that has `delete` permissions returns an empty object. Subsequent GET for the same ID should result in nothing found

### Stretch Goal

Implement your ACL using a separate model called "roles" populated as a **virtual field** in the users table

- If you are going to use a virtual join...
  - You will need to create, roles and capabilities permissions in a new collection called 'roles' in  your mongoose database before anything will work properly
  - There are a few ways to do this
    - Create a route that lets you create a role (similar to a POST in the API) and create them one at a time
    - Create a route that builds the roles collection using an array
    - Manually create records in the mongo database from the CLI

### Testing

You will need to seed your database with multiple users, each with unique "roles" that match those you've created in your users model. Your users model has a "role" column declared already, so create users that now have values in that field ('user', 'admin', etc) to match your role definitions.

Then, as you're testing your system, you can login as each user, and then use the returned token to try and then hit the different routes. As each user type, you should be able to hit some of the routes, but be denied others, based on your role setup.

- **httpie**: http post :3000/secret "Authorization:Bearer TOKENSTRING"
- **Postman** or **Insomnia**:  Set authorization header with Bearer TOKENSTRING"
- Chrome directly, using the Headers extension

For your automated tests:

- Add test coverage to the auth tests to assert that each user type has the correct permissions
- Each user type can only see (i.e. get a 200 response) from routes that their capabilities allow them to

### Visual Validation

We have deployed a web application that's designed to test your Server. This is a good way to ensure that your system works as expected. There's nothing to "turn in" here, this is provided for your benefit.

- Open this [Web Application](https://javascript-401.netlify.app/)
  - Click the "Module 3 (AUTH) / ACL" Link
  - In the form at the top of the page, enter the URL to your Authentication Server and all other relevant information
  - First login with a username and password
  - Then, you should see buttons that would invoke each of the routes described above.
  - Based on your role, each button will give you a good or a bad response.

### Assignment Submission Instructions

Refer to the the [Submitting Express Server Lab Submission Instructions](../../../reference/submission-instructions/labs/express-servers.md) for the complete lab submission process and expectations
