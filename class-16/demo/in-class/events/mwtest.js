'use strict';

const basic = (req, res, next) {
  if (!req.headers.authorization) { next('bad'); }
}

it('basic works', () => {

  let next = jest.fn();
  let res = {};
  let req = {
    headers: {
      "authorization": "Basic asdlfkjsadkfjsdldfj"
    }
  }

  basic(req, res, next);
  expect(next).toHaveBeenCalled();

})

it('basic throws an error', () => {

  let next = jest.fn();
  let res = {};
  let req = {
    headers: {
      "foo": "Bar"
    }
  }

  basic(req, res, next);
  expect(next).toHaveBeenCalledWith('bad');

})
