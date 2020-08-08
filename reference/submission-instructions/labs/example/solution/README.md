# LAB - 00

## Deployment Test

### Author: John Cokos

- [submission PR](https://github.com/tutuorial-401js/class-00)
- [tests report](https://github.com/tutuorial-401js/class-00/actions)
- [front-end](https://tutorial-401js.herokuapp.com/)

### Setup

#### `.env` requirements

- `PORT` - Port Number

#### Running the app

- `npm start`
- Endpoint: `/status`
  - Returns Object

    ```javascript
    {
      "domain": "john-api-server.demo.herokuapp.com",
      "status": "running",
      "port": 42123
    }
    ```

#### Tests

- Unit Tests: `npm run test`
- Lint Tests: `npm run lint`
- Assertions Made
  - Assert that status() properly returns the appropriate object

#### UML

![UML Diagram](whiteboard.png)
