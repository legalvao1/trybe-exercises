// ./tests/unit/getJokes.test.js

const { stub } = require('sinon');
const { expect } = require('chai');

const { getJokes } = require('../../dipExample');
// import { stub } from 'sinon';
// import { expect } from 'chai';
// import getJokes from '../../dipExample';

const requesterStub = stub();

describe('Testando a função "getJokes"', function () {
  it('"requester stub" é chamado uma vez', function () {
    getJokes(1, requesterStub);

    expect(requesterStub.calledOnce).to.be.equals(true);
  });
});