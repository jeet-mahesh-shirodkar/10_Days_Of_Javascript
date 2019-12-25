/**
 * Task
 * The code in the editor has a tagged template literal that passes the area and perimeter of a rectangle to a tag function named sides. Recall that the first argument of a tag function is an array of string literals from the template, and the subsequent values are the template's respective expression values.
 * Complete the function in the editor so that it does the following:
 * Finds the initial values of  and  by plugging the area and perimeter values into the formula:
 * where  is the rectangle's area and  is its perimeter.
 * Creates an array consisting of  and  and sorts it in ascending order.
 * Returns the sorted array
 */

function sides(literals, ...expressions) {
    // ES6 allows destructuring of arrays into multiple variables
    const [a, p] = expressions;
    // Perform this operation only once and assign to variable
    const root = Math.sqrt((p*p)-(16*a))
    const s1 = (p + root)/4;
    const s2 = (p - root)/4;
    // s2 will always be smaller because of the (-/+) above
    return ([s2, s1]);
}