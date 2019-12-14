/**
 * Task
 * Complete the reverseString function; 
 * it has one parameter,s.You must perform the following actions:
  1. Try to reverse string  using the split, reverse, and join methods.
  2. If an exception is thrown, catch it and print the contents of the exception's message on a new line.
 * Print on a new line. 
 If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
 */

function reverseString(s) {
    s=s.split('').reverse().join('');
    try{ 
        console.log(s);
      }
      catch(e){
             console.log(e.message);
      }
      finally{
        console.log(s)
      }
}
