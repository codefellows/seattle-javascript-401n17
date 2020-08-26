# API Server

Express is able to run middleware given the presence of a specific parameter within a router. This gives us the ability to run special code whenever, for example, we an 'id' or a 'model' ... taking advantage of this can give us a great amount of flexibility in our servers.

In evaluating the database side of our server, one of the principle downsides to NoSQL Databases is their decidedly non-relational nature. With Mongoose, however, you can virtually "tie" 2 or more collections together to create a "virtual" join. NoSQL databases are also very capable when they make use of sub-documents to embed schemas within schemas to provide additional articulation. Additionally, we can perform additional operations during the "lifecycle" of our records, giving us the opportunity to inject business logic.

## Learning Objectives

### Students will be able to

#### Describe and Define

- Mongoose Virtual Joins
- Mongoose Sub Documents
- Express `router.param` middleware execution

#### Execute

- Manage the lifecycle of data model instances with pre and post hooks
- Use param middleware in express to create dynamic model routes

## Today's Outline

<!-- To Be Completed By Instructor -->

## Notes

### Express: Router Parameters

In Express, we already know that parameters in routes can be read

```javascript
app.get('/places/:city', (req,res) => {
  // req.params.city is now a readable value
})
```

We also know that we can run middleware on any route

```javascript
app.get('/places/:city', getZip, (req,res) => {
  // req.params.city is read from the param
  // req.body.zip was grafted onto the request object by the getZip middleware
})
```

We can also run middleware on every request

```javascript
app.use(getZip)
```

Those are both pretty extreme. Middleware that has to run on 10 out of 15 of your routes (e.g. any route with a `city`) requires you to either put it on all the routes and make it ignore the requests without a city (ugly) or put that special middleware on every route with a `city` parameter (also ugly).

Express lets you run middleware only when certain parameters are present and expected, eliminating that choice.

```javascript
router.param('city', function (req, res, next, id) {
  console.log('Only runs on routes that have a city param')
  next()
})


// That middleware will not run here
router.get('/places/seattle', function (req, res, next) {
  res.send(`Zip: ${req.body.zip}`);
})

// That middleware does run here
router.get('/places/:city', function (req, res, next) {
  res.send(`Zip: ${req.body.zip}`);
})

// But not here
router.get('/flights/to/:airport', function (req, res, next) {
  res.send(`Zip: ${req.body.zip}`);
})

```

### Sub-documents in Mongoose [docs](https://mongoosejs.com/docs/subdocs.html)

```javascript
var childSchema = new Schema({ name: 'string' });
var house = new Schema({ address: 'string', city: 'string', state: 'string' });

var adult = new Schema({
  // Array of subdocuments
  children: [childSchema],

  // Single nested subdocuments.
  address: house
});
```

### Joining Data/Documents in Mongo

**Note** that noSQL Databases don't really join, and doing so generally is considered an anti-pattern. Ensure that you're modeling things in the most logical way for this data store.

- `populate()` is a method we can use in Mongoose to connect 2 collections
  - Method 1: physically joining using a reference to another collection
  - Method 2: Virtual Population

#### Direct Population (References)

Create a reference column in the collection and then when you save, you need to `push()` into the reference field with the `_id` of the referenced document.  This results in quicker `find()` but requires a lot more management on saves, updates, deletes.

```javascript
const personSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number,
  stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

const storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: 'Person' },
  title: String,
  fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
});
```

### Virtual Joins

In this example, we create a virtual field in `teams` called `players` by connecting them with named fields, and then doing a populate as we find/load documents. This "join" happens in real time, as the records are being processed by Mongoose and can be quite slow, although convenient.

```javascript
const teams = mongoose.Schema({
  name: { type:String, required:true },
}, { toObject:{virtuals:true}, toJSON:{virtuals:true} });

teams.virtual('players', {
  ref: 'players',
  localField: 'name',
  foreignField: 'team',
  justOne:false,
});

teams.pre('find', function() {
  this.populate('players');
});

```
