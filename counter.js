/*
Given an integer n, return a counter function. 
This counter function initially returns n and 
then returns 1 more than the previous value 
every subsequent time it is called (n, n + 1, n + 2, etc).
*/


/**
 * @param {number} n
 * @return {Function} counter
 */
function createCounter(n) {
    let x = n-1;
    return function() {
        x = x + 1;
        return x;
    };
};

let incre = createCounter(10);
console.log(incre());
console.log(incre());
console.log(incre());
console.log(incre());

/* 
Closure in JavaScript: 
---------------------------------------------------------------------------------

    A cloure is created when a function is defined inside another function,
and the inner function refer variables in the outer function scope.
    When the inner function is returned from the outer function, it retains 
a reference to the outer function scope(variables), and can continue access 
those variables even after teh outer function has finished excuting.
    Closures are useful for creating private variables and functions, implementing 
partial function application, and preserving state in asynchronous code.

---------------------------------------------------------------------------------

explain above code :
-------------------
createCounter() return a function,
so after asign incre = createCounter(2), now incre = function(){x++; return x;}
function incre() still can aceess to createCounter scope, so it can use variable x;

each time incre() was call, it increase x by 1, and return value of x;

Variable x only can be accessed by createCounter() 's inner functions, so it ensures
the privacy and security
*/