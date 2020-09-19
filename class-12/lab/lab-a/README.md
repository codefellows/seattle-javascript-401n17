# LAB: OAuth

Our company has decided to integrate OAuth instead of managing user names and passwords internally. In order to make the best decision, we are creating small research teams to assess the suitability of various OAuth providers.

Your group will be assigned an OAuth provider to integrate with, assess, and report on.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Assignment: Group Research Project

- Sites such as Yahoo, Github, Wordpress, and LinkedIn all have OAuth mechanisms that work similarly to what was done during demo.
- Integrate your provider into the provided auth server, using the included integration as your guide, reporting back to the team with a general feasibility report.
- This is a group lab that will have you integrating OAuth with any provider.
- Spend no more than 4 hours on this assignment.
  - Reserve 3 Hours for research and coding and 1 Hour for report and presentation prep

### Getting Started

- Create a new repository for this assignment
- Copy the contents of the `starter-code/auth-server` folder into your new repository
  - You will need to create a .env file to provide the server with variables for your implementation
- When you deploy, be sure and enter those values into Heroku

### Requirements

#### Server

- create an account/app/credential on your assigned OAuth Provider
- configure OAuth credentials to support a client app on `http://localhost`
- configure OAuth credentials to support a server Redirect URI to `http://localhost:3000/oauth`
- create a backend route `GET /oauth` for handling OAuth redirects
- create a new middleware module under `/src` for your provider

#### Front End

- The server is configured to use the `public` folder for static files
- Alter the provided index.html to use the correct settings/link for your assigned provider

#### Testing

- Not Required

#### Assignment Submission Instructions

- Complete the REPORT.md file included in the lab folder and prepare a group presentation for the class based on your findings.
- Have 1 person from your group submit the REPORT.md in Canvas

#### Provider Documentation Reference

- [GitHub](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/)
- [Auth0](https://auth0.com/)
- [Wordpress](https://developer.wordpress.com/docs/oauth2/)
- [LinkedIn](https://developer.linkedin.com/docs/signin-with-linkedin)
