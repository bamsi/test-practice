const myFunc = require('./index.js');

describe('calculate string length', function(){
    it('return string length', ()=>{
        expect(myFunc.stringLength('haji')).toBe(4);
     });
    it('invalid required string length', ()=>{
        expect(myFunc.stringLength('My name is haji')).toBe('Invalid string');
    });
});

describe('Reverse string', function(){
    it('reverse string', ()=>{
      expect(myFunc.reverseString('haji')).toBe('ijah');
    });
})