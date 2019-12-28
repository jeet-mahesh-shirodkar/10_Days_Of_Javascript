
function doubleCheck(){
    let result = document.getElementById('res').innerHTML;
     if(result.endsWith('+')){
         var flag = true;
     } 
     return flag;
}

function buttonClick(value){
    document.getElementById('res').innerHTML += value;
}

function clearR(){
    console.log("in")
    document.getElementById('res').innerHTML = "";
}

function calculation(){    
    let result = document.getElementById('res').innerHTML;
    if(result.indexOf('+') != -1){
       let numbers = result.split("+");
       let x = parseInt(numbers[0],2);
       let y = parseInt(numbers[1],2);
       let sum = (x+y).toString(2);     
   document.getElementById('res').innerHTML = sum;
   }
   else if(result.indexOf('-') != -1){
    let numbers = result.split("-");
    let x = parseInt(numbers[0],2);
    let y = parseInt(numbers[1],2);
    let sub = (x-y).toString(2);     
   document.getElementById('res').innerHTML = sub;
   }
   else if(result.indexOf('*') != -1){
    let numbers = result.split("*");
    let x = parseInt(numbers[0],2);
    let y = parseInt(numbers[1],2);
    let mul = (x*y).toString(2);     
   document.getElementById('res').innerHTML = mul;
   }
   else if(result.indexOf('/') != -1){
    let numbers = result.split("/");
    let x = parseInt(numbers[0],2);
    let y = parseInt(numbers[1],2);
    let div = (x/y).toString(2);     
   document.getElementById('res').innerHTML = div;
  }
}
