 
 let words=require('../word.js');
let expect = require('chai').expect;

describe('words()',function(){
	
it('counts if only one word is entered', function() {
    let countWords = { word: 1 };
    expect(words('word')).equal(countWords);
  })
});
describe('words()',function(){
  it('counts if a word occurs more than once ', function() {
    let countWords = { olly: 3, is: 1, a: 1, boy: 1 };
    expect(words('olly olly olly is a boy ')).equal(countWords);
  });
});
describe('words()',function(){
  it('includes special characters', function() {
    let countWords = { colly: 1, '&%': 1, is: 1, a: 1, boy: 1 };
    expect(words('olly &% is a boy')).equal(countWords);
  });
});
describe('words()',function(){
  it('counts the occurence of numbers', function() {
    let countWords = { olly: 1, 1: 1, 2: 1, boy:1 };
    expect(words('olly 1 2 boy')).equal(countWords);
  });
});
describe('words()',function(){
  it('Changes Uppercase to lowercase before comparison', function() {
    let countWords = { hello: 4 };
    expect(words('Hello hello heLLo HELLO')).equal(countWords);
  });
});

describe('words()',function(){
  it('counts multiline', function() {
    let countWords = { hello: 1, world: 1 };
    expect(words('hello\nworld')).equal(countWords);
  });
});
describe('words()',function(){
  it('disregards tab', function() {
    let countWords = { olly: 1, is: 1,a: 1,boy: 1};
    expect(words('olly\tis a boy')).equal(countWords);
  });
});
describe('words()',function(){
  it('counts multiple spaces as one', function() {
    let countWords = { hello: 1, world: 1 };
    expect(words('Hello   world')).equal(countWords);
  });
});
describe('words()',function(){
  it('does not count whitespace at the begining of word', function() {
    let countWords = { "olly": 1, "murs": 1 };
    expect(words('  Olly murs ')).equal(countWords);
  });
});


