/**
 * Task
 * Implement a function named factorial that has one parameter: an integer, n. It must return the value of  n! (i.e., n factorial).
 */

 function factorial(n){
     var result =1;
     while(n>1){
         result*=n;
         n--;
     }
     return result;
 }

 function factorial2(n){
     var result=1;
     for(var i=2;i<=n;i++)
     result*=i;
     return result;
 }

 function factorial3(n){
    if(n === 0){
        return 1;
    }
    return n * factorial3(n-1);
 }

 console.log(factorial(3),factorial2(4),factorial3(5));