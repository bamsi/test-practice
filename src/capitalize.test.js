const capitalize = require('./capitalize.js');

describe('capitalize string', function(){
    it('capitalize string', ()=>{
        expect(capitalize('haji')).toBe('Haji');
    });

    it('the first letter is not an alphabet', ()=>{
        expect(capitalize('0haji')).toBe('invalid text');
    });

})