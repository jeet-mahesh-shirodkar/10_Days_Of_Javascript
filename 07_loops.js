/**
 * Task
 * Complete the vowelsAndConsonants function in the editor below. 
 * It has one parameter, a string, s, consisting of lowercase English alphabetic letters (i.e., a through z). 
 * The function must do the following:
 1. First, print each vowel in s on a new line. 
   The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in s.
 2. Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in s.
 */

function vowelsAndConsonants(s) {
    let vowels = "";
    let consonants = "";
    let result = "";
    for(var i=0;i<s.length;i++){
     if(s[i]=='a'|| s[i]=='i'||s[i]=='e'||s[i]=='o'||s[i]=='u'){
       vowels += s[i];
     }
     else{
       consonants += s[i];
     }
     }
     result = vowels+consonants;
     for(var j=0;j< result.length;j++){
           console.log(result[j])
     }
}

vowelsAndConsonants('javascriptloops');