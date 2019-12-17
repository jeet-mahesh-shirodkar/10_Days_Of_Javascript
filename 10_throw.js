/**Task

Complete the isPositive function below. 
It has one integer parameter, a. If the value of a is positive, it must return the string YES. 
Otherwise, it must throw an Error according to the following rules:

If a is 0, throw an Error message with  Zero Error.
If a is negative, throw an Error message with  Negative Error */

function isPositive(a) {
    if(a > 0){
            var s = "YES";
    }
    else{
      try{
    if(a == 0){
      throw "error2";
    }
    else if(a < 0){
          throw "error1";
    }
  }
  catch(e){
    if(e == "error1"){ 
    return ("Negative Error")
    }
    else if(e == "error2"){
    return ("Zero Error")
    }
  }
    }
  return s;   
  }

// With Ternery operator

function isPositive2(a) {
    return a<0 ? "Negative Error":a==0 ? "Zero Error":"YES";   
    }


console.log(isPositive(-5));    
