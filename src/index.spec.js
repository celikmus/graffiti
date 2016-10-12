import { expect } from 'chai';
import graffiti from './';

describe('graffiti', () => {
  it('should expose an express function', () => {
    expect(graffiti.express).to.be.ok; // eslint-disable-line
  });
});
