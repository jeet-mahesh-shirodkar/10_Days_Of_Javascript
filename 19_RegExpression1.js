/**Task
 * Complete the function in the editor below by returning a RegExp object,re, 
 * that matches any string s that begins and ends with the same vowel.
 *  Recall that the English vowels are a, e, i, o, and u. */

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */     
    //  ^ => matches index[0]
    // () => stores matching value captured within
    // [aeiou] => matches any of the characters in the brackets
    // . => matches any character:
    // + => for 1 or more occurrances (this ensures str length > 3)
    // \1 => matches to previously stored match. 
    // \2 looks for matched item stored 2 instances ago 
    // \3 looks for matched item stored 3 ago, etc

//  $ ensures that matched item is at end of the sequence

    let re = /^([aeiou]).+\1$/;
    
    /*
     * Do not remove the return statement
     */
    return re;
}
