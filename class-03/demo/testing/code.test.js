'use strict';

jest.mock('minimist');

const uuid = require('uuid');
const minimist = require('minimist');

const app = require('./code.js');

describe('code', () => {

  let spy;
  let appSpy;

  beforeEach(() => {
    // spy on a method ('log') of an object (global.console)
    // this "takes over" whatever global.console.log is ...
    spy = jest.spyOn(global.console, 'log');
    appSpy = jest.spyOn(app, 'yell');

  });

  afterEach(() => {
    // whatever spy is, put it back
    spy.mockRestore();
  });

  it('can print an id', () => {
    let id = app.getId();
    expect(console.log).toHaveBeenCalledWith(id);
    expect(app.yell).toHaveBeenCalledWith(id);
  });

  it('can understand a command line thing', () => {
    minimist.mockImplementation(() => {
      return {
        add: 'go'
      }
    })
    let input = app.getInput();
    expect(input.add).toEqual('go');
  })

  it('returns undefined for a bad cli', () => {
    minimist.mockImplementation(() => {
      return {
        xyz: 'go'
      }
    })
    let input = app.getInput();
    expect(input).toEqual(undefined)
  })

})
