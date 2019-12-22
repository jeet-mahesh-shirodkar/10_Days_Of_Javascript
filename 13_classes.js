/**
 * Task
 * Create a Polygon class that has the following properties:
 * A constructor that takes an array of integer values describing the lengths of the polygon's sides.
 * A perimeter() method that returns the polygon's perimeter.
 * Locked code in the editor tests the Polygon constructor and the perimeter method.
Note: The perimeter method must be lowercase and spelled 
 */


class Polygon{
    constructor(sides){
      this.sides= sides;
    }
    perimeter(){
      let sum = 0;
      for(i=0;i<this.sides.length;i++){
          sum += this.sides[i];
      }
      return sum;
    }
  }

 
const p = new Polygon([10,10]);
console.log(p.perimeter()); 


