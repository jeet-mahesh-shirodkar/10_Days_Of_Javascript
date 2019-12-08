/**
 * Task

1. Declare a constant variable, PI, and assign it the value Math.PI. 
You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
2. Read a number, r, denoting the radius of a circle from stdin.
3. Use  r and PI to calculate the  area and perimeter of a circle having radius r.
4. Print  area as the first line of output and print peremeter as the second line of output
 */

function variable() {
    const PI = Math.PI; //PI cann't be assigned value again becoz it is declared using const
    var r = 2.6;  // Read input using 'readLine()' which is var r = readline(). var has global scope variable
    let area = PI*(r*r); //let is block scope variable
    let perimeter = 2*PI*r;
    return [area,perimeter];//returning two values together
}

console.log(variable());
