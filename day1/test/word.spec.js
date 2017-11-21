 
 let words=require('../word.js');
let expect = require('chai').expect;

describe('words()',function(){
	
it('should counts if only one word is entered', function() {
    let countWords = { word: 1 };
    expect(words('word')).to.deep.equal(countWords);
  })
});
describe('words()',function(){
  it('should counts if a word occurs more than once ', function() {
    let countWords = { olly: 3, is: 1, a: 1, boy: 1 };
    expect(words('olly olly olly is a boy')).to.deep.equal(countWords);
  });
});
describe('words()',function(){
  it('should includes special characters', function() {
    let countWords = { olly: 1, '&%': 1, is: 1, a: 1, boy: 1 };
    expect(words('olly &% is a boy')).to.deep.equal(countWords);
  });
});
describe('words()',function(){
  it('should the occurence of numbers', function() {
    let countWords = { olly: 1, 1: 1, 2: 1, boy:1 };
    expect(words('olly 1 2 boy')).to.deep.equal(countWords);
  });
});
describe('words()',function(){
  it('should change Uppercase to lowercase before comparison', function() {
    let countWords = { hello: 4 };
    expect(words('Hello hello heLLo HELLO')).to.deep.equal(countWords);
  });
});

describe('words()',function(){
  it('should counts multiline', function() {
    let countWords = { hello: 1, world: 1 };
    expect(words('hello\nworld')).to.deep.equal(countWords);
  });
});
describe('words()',function(){
  it('should disregards tab', function() {
    let countWords = { olly: 1, is: 1,a: 1,boy: 1};
    expect(words('olly\tis a boy')).to.deep.equal(countWords);
  });
});
describe('words()',function(){
  it('should counts multiple spaces as one', function() {
    let countWords = { hello: 1, world: 1 };
    expect(words('Hello   world')).to.deep.equal(countWords);
  });
});
describe('words()',function(){
  it('should does not count whitespace at the begining of word', function() {
    let countWords = { olly: 1, murs: 1 };
    expect(words('  Olly murs ')).to.deep.equal(countWords);
  });
});


