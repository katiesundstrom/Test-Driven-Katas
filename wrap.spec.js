const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('Returns the string argument when the input has no spaces.', () => {
    expect(wrap('1234678911', 4)).to.equal("1234678911");
  });
  it('If the string length is less than the maxLen, return the string', () => {
    expect(wrap("I am KT", 10)).to.equal("I am KT");
  });
  it('Returns a string in which none of the lines are longer than the maxLen argument.', () => {
    expect(wrap('1234 6789 11', 4).to.equal("1234\n6789\n11"));
  });
  it('Only adds new line characters between words, and adds them to the spaces that are at a character length less than and closest to the maxLen.', () => {
    expect(wrap("Lorem ipsum dolor", 13).to.equal("Lorem ipsum\ndolor"));
  });
  it('When the first word in a line exceeds the max length, the function should replace the space after that word (rather than breaking up the word) with a new line.', () => {
    expect(wrap("1234 6789", 3).to.equal("1234\n6789"));
  });
});

