/**
 * Task
 * We define S to be a sequence of distinct sequential integers from 1 to n; In other words,s={1,2,3,...n}. 
 * We want to know the maximum bitwise AND value of any two integers,  and  (where ), in sequence  that is also less than a given integer, .
 * Complete the function in the editor so that given  and , it returns the maximum .
 * Note: The  symbol represents the bitwise AND operator.
 */

// Classic Learning

function getMaxLessThanK(n,k){
    let s = '',m = 0;
    
    for(i=1;i<=n;i++){
      s += i;
    }
    s = s.split('');

    for(a=0;a < s.length;a++){
          for(b=a+1;b < s.length;b++){
                  if((s[a] & s[b]) < k && ((s[a] & s[b]) > m) ){
                    m = (s[a] & s[b]);
                  }
          }
    }
    return m;
}


// With ternary Operator

function getMaxLessThanK2(n, k) {
    return ((k | (k - 1)) > n) ? (k - 2) : (k - 1);
}