/**
 * Task
Complete the getLetter(s) function in the editor. 
It has one parameter: a string, s, consisting of lowercase English alphabetic letters (i.e., a through z). 
It must return A, B, C, or D depending on the following criteria:

If the first character in string s is in the set {a,e,i,0,u}, then return A.
If the first character in string s is in the set {b,c,d,f,g}, then return B.
If the first character in string s is in the set {h,j,k,l,m}, then return C.
If the first character in string s is in the set {n,p,q,r,s,t,u,v,w,x,y,z}, then return D.
Hint: You can get the letter at some index  in  using the syntax s[i] or s.charAt(i). */


function getLetterr(s) {
    switch(s[0]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return 'A';
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            return 'B';
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            return 'C';
        default:
            return 'D';
    }
}

function getLetterr(s) {
    let letter;
    // Write your code here
    switch(s[0]){
    case ("a"||"e"||"i"||"o"||"u"):
        letter="A";
        break;
    case ("b"||"c"||"d"||"f"||"g"):
        letter="B";
        break;
    case ('h'||"j"||"k"||"l"||"m"):
        letter="C";
         break;
    default:
        letter="D";             
    }
    return letter;
}

function getLetterrr(s){
    let letter;
    var set1 = new Set(['a','e','i','o','u']);
    var set2 = new Set(['b','c','d','f','g']);
    var set3 = new Set(['h','j','k','l','m']);
  switch(s!==''){
       case set1.has(s[0]):
           letter ="A";
           break;
       case set2.has(s[0]):
           letter ="B";
           break;
       case set3.has(s[0]):
           letter="C";
           break;
       default:
           letter="D";    
  }
    return letter;
}

console.log(getLetter("sss"));