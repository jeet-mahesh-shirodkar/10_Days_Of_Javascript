/*
Task

Complete the following functions in the editor below:

1. getArea(length, width): Calculate and return the area of a rectangle having sides length and width.
2. getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides length and width.
The values returned by these functions are printed to stdout by locked stub code in the editor.
*/

function getArea(length, width) {
    let area;
    area = length * width;
    return area;
}

function getPerimeter(length, width) {
    let perimeter;
    perimeter = 2*(length+width);
    return perimeter;
}


console.log(getArea(3,4.5),getPerimeter(3,4.5));
