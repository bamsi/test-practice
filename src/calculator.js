class calculator {
    constructor(){
    }

    add(a, b){
        if(a === undefined || b === undefined) return 'two numbers are required';
        else if(a < 0 || b < 0) return 'invalid input';
        else return a + b;
    }

    subtract(a, b){
        if(a < 0 || b < 0) return 'invalid input';
        else if(a > b) return a - b;
        else return 'invalid input';
    }

    multiply(a,b){
        if(a === undefined || b === undefined) return 'input is required';
        else if(a == 0 || b == 0) return 'invalid input'; 
        else return a * b;
    }

    divide(a, b){
        if(a === undefined || b === undefined) return 'input is required';
        else if(b === 0) return 'invalid input';
        else return a/b;
    }
}

let mycal = new calculator();

module.exports = mycal;

