'use strict';

const rootDir = process.cwd();
const Categories = require(`${rootDir}/src/models/categories/categories-model.js`);
const supergoose = require('@code-fellows/supergoose');

const categories = new Categories();

describe('Categories Model', () => {

  it('can create() a new category', () => {

  });

  it('throws an error if the new record is invalid', () => {

  });

  it('can get() a category', () => {

  });

  it('can delete() a category', () => {

  })

  it('throws an error when deleting a non-existent record', () => {

  });

  it('can update() a category', () => {

  });

  it('throws an error when updating a non-existent record', () => {

  });

});
