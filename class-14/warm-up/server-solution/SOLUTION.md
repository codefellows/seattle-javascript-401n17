# Warm Up - Auth Server Review

Create a new repository for this workshop, called `auth-server-workshop`

## 1. Find the Bugs

### index.js

- Didn't require dotenv, so process.env.PORT will be undefined
- The server doesn't export a `start` method, so the start line will fail

### server.js

- The server exports `startup`, not `start` which breaks the index. Fix one or the other
- No /api/v1 prefix set on the v1Router, so the prescribed URLs won't work

### api/v1.js

- Line 15 - calling `new express.Router()` ... `new` is not required, it's not an instance
- Line 53 - used `.req` instead of `.request`
- Line 71 - calling `.destroy()` instead of `.delete()`

### models/todo/todo-schema.js

- The schema was defined as `Todo` but in the export, we're identifying `todo`

### middleware/model-finder.js

- Line 26: `req.model = Model` should be `req.model = new Model()`
  - Alternatively, they can change the model file itself to export a new instance instead of just the class
- no `.next()`

### auth/routes/auth-router.js

- Line 28 - using `req.token` instead of just `token`

### auth/models/users-model.js

- Line 18 -- `generateToken()` is a plain function and not a `users.methods...` method

### auth/middleware/basic.js

- Line 16 uses index `[0]` instead of `[1]` when parsing out the header

### auth/middleware/bearer.js

- Line 13 doesn't use `await`, so the return value isn't actually a user, but is a promise

## Write the Tests

## Deploy
