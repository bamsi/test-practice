const calculator = require('./calculator.js');

describe('Simple Calculator', function(){
    describe('add function', function(){
        it('add two positive numbers', ()=>{
            expect(calculator.add(4,5)).toBe(9);
        }),
        it('add negative numbers', ()=>{
            expect(calculator.add(-4,5)).toBe('invalid input');
        }),
        it('add negative numbers', ()=>{
            expect(calculator.add(6)).toBe('two numbers are required');
        })
    });

    describe('subtract numbers', function(){
        it('subtract two positive numbers', ()=>{
           expect(calculator.subtract(6,3)).toBe(3);
        });
        it('subtract negative numbers', ()=>{
            expect(calculator.subtract(4,-2)).toBe('invalid input');
        });
        it('substract small with large number', ()=>{
            expect(calculator.subtract(2,5)).toBe('invalid input');
        });
    });

    describe('multiply numbers', function(){
        it('multiply two positive numbers', ()=>{
           expect(calculator.multiply(6,3)).toBe(18);
        });
        it('missing one of the input', ()=>{
            expect(calculator.multiply(4)).toBe('input is required');
        });
        it('multiply by zero', ()=>{
            expect(calculator.multiply(2,0)).toBe('invalid input');
        });
    });

    describe('divide numbers', function(){
        it('divide two positive numbers', ()=>{
           expect(calculator.divide(0,3)).toBe(0);
        });
        it('missing one of the input', ()=>{
            expect(calculator.divide(4)).toBe('input is required');
        });
        it('divide by zero', ()=>{
            expect(calculator.divide(2,0)).toBe('invalid input');
        });
    });
})