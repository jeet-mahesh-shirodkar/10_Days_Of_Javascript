/**
 * Task
 * The code in the editor has a tagged template literal that passes the area and perimeter of a rectangle to a tag function named sides. Recall that the first argument of a tag function is an array of string literals from the template, and the subsequent values are the template's respective expression values.
 * Complete the function in the editor so that it does the following:
 * Finds the initial values of  s2 and s1  by plugging the area and perimeter values into the formula:
 * 
 * s = (P +|-Math.sqrt((P*P)-(16*A)))/4
 * 
 * where  is the rectangle's area A and P is its perimeter.
 * Creates an array consisting of s1 and s2 and sorts it in ascending order.
 * Returns the sorted array
 */

 // Function 1 without Template Literal and Function 2 with Template literal(...tried to be). 

function sides(...expressions) {
    // ES6 allows destructuring of arrays into multiple variables
    const area = expressions[0];
    const perimeter = expressions[1];
    // Perform this operation only once and assign to variable
    const root = Math.sqrt((perimeter*perimeter)-(16*area))
    const s1 = (perimeter + root)/4;
    const s2 = (perimeter - root)/4;
    // s2 will always be smaller because of the (-/+) above
    return [s1, s2].sort();
}


function sides(literals,...expressions) {
    let [...result] = literals;
      // ES6 allows destructuring of arrays into multiple variables
      const [a, p] = expressions;
      // Perform this operation only once and assign to variable
      const root = Math.sqrt((p*p)-(16*a))
      const s1 = (p + root)/4;
      const s2 = (p - root)/4;
      //resigning value to result variable
      result = `The area is: ${a}.
                The perimeter is: ${p}.`
      // s2 will always be smaller because of the (-/+) above
      return ([result,s2, s1]);
  }
  
   
  console.log(sides(['The area is: ', '.\nThe perimeter is: ', '.'],...[140,48]))