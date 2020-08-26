# Data Modeling & NoSQL Databases

Data Modeling: The process of taking a real world or conceptual idea and encoding it into Javascript's built in data types. Models typically describe the physical characteristics (properties) and behaviors (methods) of an object in a way that you can write code that uses your models to problem solve and create applications.

## Learning Objectives

### Students will be able to

#### Describe and Define

- The role of data models
- CRUD Operations
- The "Repository" design pattern
- Interfaces and Services
- The differences between SQL and NoSQL Databases
- The MongoDB Ecosystem
- What is a Mongoose Schema
- CRUD Functionality through Mongoose Methods

#### Execute

- Model real world data
- Create models with constraints, type checking, validity using Mongoose
- Create an extensible CRUD interface and an implementation for a data model
- Proficiency with the `mongo` CLI and basic commands
- Testing code that relies on a Mongo Database server

## Today's Outline

<!-- To Be Completed By Instructor -->

## Notes

### MongoDB Shell Commands

| Command                  | Description                                                                 |
| ------------------------ | --------------------------------------------------------------------------- |
| `mongo`                  | Launch the mongo shell. Once in the shell, you should see `>`               |
| `show dbs`               | Show all the databases                                                      |
| `use db <name>`          | Use the database with name `<name>`                                         |
| `show collections`       | Show all the collections in the current database                            |
| `db.<collection>.find()` | List all the documents / records in the specified collection `<collection>` |
| `db.<collection>.save()` | Save a new document / record to the specified collection `<collection>`     |
| `db.<collection>.drop()` | Completely removes the specified collection `<collection>`                  |

### A Mongoose "Schema"

```javascript
const players = mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true, uppercase: true, enum: ['P', 'C', '1B', '2B', '3B', 'SS', 'LF', 'RF', 'CF'] },
  throws: { type: String, required: true, uppercase: true, enum: ['R', 'L'] },
  bats: { type: String, required: true, uppercase: true, enum: ['R', 'L'] },
  team: { type: String, required: true },
});
```

### Mongoose Built-In CRUD Methods

(All return promises)

```javascript
    let newRecord = new schema(record);
    return newRecord.save();

    schema.findOneByIdAndDelete(id);

    schema(findById(id));

```
