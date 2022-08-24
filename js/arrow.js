//function declaration 
function add (first,second){
    const total = first + second;
    return total;
}

//function expression 
const add1 = function add1 (first, second){
    const total = first + second;
    return total;
}

//function expression with anonymous function
const add2 = function (first, second){
    const total = first + second;
    return total;
}

// Arrow function 
const add3 = (first,second) => first + second;

const result = add3(12, 30);
console.log(result);


//Interview Question: difference between
//function declaration, function expression and arrow function