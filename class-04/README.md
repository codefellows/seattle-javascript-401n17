# Advanced Mongo/Mongoose

Deeper explorations of Data Modeling, specifically the lifecycle of data management with Mongoose Models, and testing.

## Learning Objectives

### Students will be able to

#### Describe and Define

- Testing strategies for databases
- Mocks
- CRUD Functionality through Mongoose Methods
- Interfaces and Collections

#### Execute

- Proficiency with the `mongo` CLI and basic commands
- Creation of a Mongoose Schema
- Creation of a Data Model Interface (CRUD operations) for Mongo Schemas
- Testing code that relies on a Mongo Database server

## Today's Outline

## Notes

Using a Repository or a Facade is a powerful tool to abstract the "front end" from the actual database layer. Here, we've created a simple repository for "Food", which can later be used by any number of other modules to save food to a database

### Collection/Repository

   ```javascript
   const FoodStorage = require('food.mongo.schema.js');

   class Food {
     create(record) {
       const food = new FoodStorage();
       return food.save(record);
     }
   }
   ```

### Client Modules

   ```javascript
   let Food = require('food.repository.js');
   Food.create( {name:'Carrots'} );
   ```

If (or When) we decide to no longer use Mongo to store our data, rather than updating code in potentially hundreds of client modules, we simply need to change how the collection works. So long as the collection's `create()` method continues to accept an object and returns a promise, we can make it use Postgres, Dynamo, SQL Server or any other database instead of mongo, and our client modules don't have to be modified.
