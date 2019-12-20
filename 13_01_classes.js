/** Classes in JavaScript
 * Functional Classes
 */

 function fruits(type){
          this.type = type;
          this.color = "unknown";
          this.getInformation = getInformation;
 }

 function getInformation(){
     return "This"+this.type+"is"+this.color+".";
 }

 let lime = new fruits("Lime");
 lime.color = "Green";

 console.log(lime.getInformation);

 /**
  * We can use this getInformation() method internally also
  * The drawback of internally defining the getInformation function is that, 
  * It recreates that function every time we create a new Fruit object.
  The Prototype Property
  * Fortunately, every function in JavaScript has something called a prototype property.
    Which is empty by default. We can think of a function's prototype as an object blueprint or paradigm.
    When we add methods and properties to the prototype, they are accessible to all instances of that function.
  */
 
  
 function fruits(type){
  this.type = type;
  this.color = "unknown";
}

fruits.prototype.getInformation = function(){
return "This"+this.type+"is"+this.color+".";
}

let lime = new fruits("Lime");
lime.color = "Green";

console.log(lime.getInformation);