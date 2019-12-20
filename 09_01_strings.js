/**
 * JavaScript Strings 
  In JS we can denote string literals in single('') and double("") qoutes. Which are declared with the data types String to the variable.
  In addition, you can also enclose a single or double quotation within another quotation of its same type by preceding the quotation
  you wish to have interpreted literally with the escape character (\).
  Each string has it property which can check the length of String -- StringName.length
 */

 function basicStrings(JavaScriptString){
     console.log("\"" + JavaScriptString + "\"");
     console.log('\'' + JavaScriptString + '\'');
     console.log(JavaScriptString.length);

 }

 console.log(basicStrings("Hello World !"));

 /**
  * String Constructor
  * To create a new string, we use the syntax String(value) where  denotes the data we want to turn into a string.
  */

 var myNumber = 4;
 var myString = String(myNumber);
 
 console.log(myNumber + " is a " + typeof myNumber);
 console.log(myString  + " is a " + typeof myString);

 /**
  * String Methods
  */
//string.charAt();
var s = "stringCharAtMethod";
var i = 6
console.log(s.charAt(i));//console.log => C

//string.concat();Returns a new string consisting of the calling string concatenated with another string passed as an argument.
var a = "String";
var b = "concat";
var c = a.concat(b);
console.log(c);

//string.includes();Returns a boolean denoting whether a string passed as an argument exists within the calling string.
var s = "String Includes"; 
console.log(s.includes() + " " + s.includes("")); // false true
console.log(s.includes("clu") + " " + s.includes("CLu"));// true false

//string.endsWith();Returns a boolean denoting whether the calling string ends with the characters of another string passed as an argument.
var s = "String endsWith"; 
console.log(s.endsWith() + " " + s.endsWith(""));
console.log(s.endsWith("with") + " " + s.endsWith("With"));

/**string.indexOf();
 * Returns an integer denoting the index within the calling String object of the first occurrence of the given argument
 * If the argument isn't found in the string or no argument was passed to the function, it returns -1.
 * If an integer is passed as a second argument, it will start searching the string from the index denoted by the integer.
*/
var s = "String IndexOf";
console.log(
    s.indexOf("t") + " " 
    + s.indexOf("t", s.length) + " " 
    + s.indexOf("n", 8)
);
console.log(
    s.indexOf("ex") + " " 
    + s.indexOf("x") + " " 
    + s.indexOf("")
);

/**string.match()
 * Match a regular expression passed as an argument against the calling string. 
 * If a match is found, it returns an object with three properties: 
 1.The matched substring, 2. the index it was found at, and 3. the input (i.e., the initial string); 
 * if no match is found, it returns null.
 */
var s = "StringMatches";
console.log(s.match());
console.log(s.match("[a-z]+"));


/**string.normalize()
 * Returns a string containing the Unicode Normalization Form of the calling string's value.
 *  The argument must be one of the following:
1."NFC": Normalization Form Canonical Composition. This is the default in the event that no argument is given.
2."NFD": Normalization Form Canonical Decomposition.
3."NFKC": Normalization Form Compatibility Composition.
4."NFKD": Normalization Form Compatibility Decomposition
 */
var s = "StringNormalize";
console.log(s.normalize());
console.log(s.normalize("NFKC"));

/**string.repeat()
Returns a string consisting of the elements of the calling String object repeated some number of times (given as an integer argument).
 If no argument or a 0 argument are given, then it returns the empty string. For example:
 */

var s = "StringRepeat";
console.log(s.repeat () + "x" + s.repeat(0)); // x
console.log(s.repeat(2)); //StringRepeatStringRepeat

/**string.replace();
 * Finds a match between a regular expression and a string, then returns a string where the first matched substring 
   is replaced with a new substring.
 * If no match is found, the returned string is the same as the original string.
 */
var s = "stringReplace";
console.log(s.replace() + " " + s.replace("a", ""));

/**string.search();
 * Executes the search for a match between a regular expression and a specified string, 
   then returns the index of the first character of the first match.
 */
var s = "stringSearch";
console.log(s.search() + " " + s.search("[a-z]"));
console.log(s.search("a") + " " + s.search("ar"));

/**string.splice();
Extracts a section of a string and returns it as a new string.
The extracted section depends on the arguments passed to the function:

1.If no arguments are passed to the function, it returns the entire string.
2.If one integer argument, i, is passed to the function, it returns a substring starting at index i and ending at the end of the string.
3.If two integer arguments, i and j, are passed to the function,
 it returns a substring consisting of characters in the range (i-j); in other words, this is a substring starting at index  and ending at . For example:
If one (or both) of the arguments passed to this function is negative, then the index corresponding to that argument is calculated as String.length minus the given argument
 */
var s = "StringSliceMethod";
console.log(s.slice(0, 6) + " " + s.slice(6));
console.log(
    s.slice() + " " 
    + s.slice(-4, 17) + " " 
    + s.slice(-4, -2)
);

/** string.split();
 Splits a String object into an array of strings by separating the string into substrings:
1. If no argument is given, it returns an array containing the original string.
2. If the empty string is passed as an argument, it returns an array of the string's individual letters.
3. If a string consisting of one or more letters is passed as an argument, 
   it splits the string at each occurrence of that string and returns an array of the split substrings.
 */

var s = "stringSplit";
console.log(s.split(""));
console.log(s.split("t"));
console.log(s.split());

/**
 * string.startsWith();
 * Returns a boolean denoting whether a string begins with the characters of another string passed as an argument.
 */

var s = "StringStartsWithMethod";
console.log(s.startsWith("StringSt"));
console.log(s.startsWith("StringStat"));

/**
 * String.substr()
 * Returns a substring consisting of characters in a given range, depending on the arguments passed to the function:
 * If no arguments are passed to the function, it returns the entire string.
 * If one integer argument, i, is passed to the function, it returns a substring starting at index i and ending at the end of the string.
 * If two integer arguments,  i and j , are passed to the function,
   it returns a substring consisting of characters in the range (i,j); 
   In other words, this is a substring starting at index i and ending at j-1.
 */

var s = "StringSubStrMethod";
console.log(s.substr());
console.log(s.substr(0, 6) + " " + s.substr(6));

/**string.substring();
 * Returns a substring consisting of characters in a given range, depending on the arguments passed to the function
 * If no arguments are passed to the function, it returns the entire string.
 * If one integer argument, i, is passed to the function, it returns a substring starting at index i and ending at the end of the string.
 * If two integer arguments, i and j, are passed to the function,
   it returns a substring consisting of characters in the range (i,j); 
   In other words, this is a substring starting at index i and ending at j-1.
 */

var s = "stringSubStringMethod";
console.log(s.substring());
console.log(s.substring(0, 6) + " " + s.substring(6));

/** string.toLowerCase() and String.toUpperCase()
 * Returns the calling string's value, converted to lowercase letters.
 * Returns the calling string's value, converted to uppercase letters.
 */

var s = "TOLOwerCase";
s = s.toLowerCase();
console.log(s);

var s = "tOUpperCase";
s = s.toUpperCase();
console.log(s);

/**string.trim();
 * Returns the string with the whitespace trimmed from its beginning and end. 
 * This is part of the ECMAScript 5 standard.
 */

var s = "    StringTrim    ";
console.log("Original Length: " + s.length);
s = s.trim();
console.log("Trimmed Length: " + s.length);

/**string.trimLeft();
 * Returns the string with the whitespace trimmed from its left side.
 */
var s = "    stringTrimLeft    ";
console.log("Original Length: " + s.length);
s = s.trimLeft();
console.log("Trimmed Length: " + s.length);

/**string.trimRight();
 * Returns the string with the whitespace trimmed from its right side.
 */
var s = "    StringtrimRight    ";
console.log("Original Length: " + s.length);
s = s.trimRight();
console.log("Trimmed Length: " + s.length);

/**--------------------------------------------------------------------------------------------------------------------------------- */