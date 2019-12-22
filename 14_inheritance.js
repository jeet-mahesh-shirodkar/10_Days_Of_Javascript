/**
 * Task
 * We provide the implementation for a Rectangle class in the editor. Perform the following tasks:
 * Add an area method to Rectangle's prototype.
 * Create a Square class that satisfies the following:
 * It is a subclass of Rectangle.
 * It contains a constructor and no other methods.
 * It can use the Rectangle class' area method to print the area of a Square object.
Locked code in the editor tests the class and method implementations and prints the area values to STDOUT
 */

 class Rectangle{
       constructor(length,width){
             this.length=length;
             this.width=width;
       }
       area(){
           return this.length*this.width;
       } 
 }

 class Square extends Rectangle{
          constructor(side){
              super(side,side); //As superClass constructor has 2 parameters
          }
 }

  const s =new Square(2,6);
  console.log(s.area());