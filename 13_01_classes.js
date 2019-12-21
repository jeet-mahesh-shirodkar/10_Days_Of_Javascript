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

/**
 * Classes
 * JavaScript classes, introduced in ECMAScript 6, are essentially syntactic sugar over JavaScript's existing
   prototype-based inheritance that don't actually introduce a new object-oriented inheritance model.
   This syntax is a means of more simply and clearly creating objects and deal with inheritance.

   Class Declarations
 * One way to define a class is using a class declaration. 
   To declare a class, we use the class keyword and follow it with the class' name. 
   Ideally, we always write class names in TitleCase.
 */

class Polygon {
  constructor(height, width) {
      this.height = height;
      this.width = width;
  }
} 

let p = new Polygon(1,2);
console.log('Polygon p:',p);

/**An important difference between function declarations and class declarations is that function declarations are
 *  Hoisted (i.e., can be referenced before they're declared) but class declarations are not.
 *  This means we must first declare our class before attempting to access (or reference) it.
 *  If we fail to do so, our code throws a ReferenceError.
 * */

try {
  let p = new Polygon(1, 2);
  console.log('Polygon p:', p);
}
catch (exception) {
  console.log(exception.name + ': ' + exception.message);
}
class Polygon {
  constructor(height, width) {
      this.height = height;
      this.width = width;
  }
}

p = new Polygon(1, 2);
console.log('Polygon p:', p);

/**
 * 
 */









