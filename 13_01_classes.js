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
 * Class Expressions
 * Class expressions are another way to define a class, and they can be either named or unnamed. 
 * The name given to a named class expression is local to the class' body.
 */

let Polygon = class {
  constructor(height, width) {
      this.height = height;
      this.width = width;
  }
};

console.log('Polygon:', Polygon);
let p = new Polygon(1, 2);
console.log('p:', p);

/**
 * The Constructor Method
 * The constructor method is a special method we use to create and initialize objects of a class.
   A class can only have one special method with the name constructor, 
   and attempting to write a class containing more than one constructor method will throw a SyntaxError.
   To implement inheritance, we can use the super keyword in a constructor to call a parent class constructor.
 */

'use strict';

class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
}

const square = new Polygon(10, 10);

console.log(square.getArea());

/**
 * Static Methods
 * Static methods are methods relevant to all instances of a class — not just any one instance. 
 * These methods receive information from their arguments and not a class instance, 
 * which allows us to invoke a class' static methods without creating an instance of the class. 
 * In fact, we actually can't call a static method on an instantiated class object (attempting to do so throws a TypeError).
 * We define a class' static methods using the static keyword.
 * We typically use these methods to create utility functions for applications, as they can't be called on class objects.
 */

'use strict';

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

// The correct way to call a static method
console.log(Point.distance(p1, p2));

// Attempt to call a static method on an instance of the class
try {
    console.log(p1.distance(p1, p2));
}
catch (exception) {
    console.log(exception.name + ': ' + exception.message);
}












