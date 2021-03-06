//INTERFACES
/*interface Point1 {// Always use pascal notation which is capital the first letter of the interface name
    x: number,
    y:number
}
//let drawPoint = (point: {x:number, y:number}) => {// is ok, but still sending parameters on the function
let drawPoint1 = (point: Point1) => { //using interfaces, qith the Pascal convention
    //..
}
drawPoint1({
    x:1,
    y:2
})
*/
//COHESION with draw function
/*class Point {// Use always Pascal notation
    //Fields to store data
    x: number;
    y: number;
    draw(){
        console.log('X:' + this.x + ', Y:' + this.y);
    }
    // Methods
    getDistance(another: Point) {
        //..
    }
}
let point = new Point(); // when no have constructor
point.x = 10;
point.y = 14;
point.draw();*/
//COHESION with constructor
/*class Point {// Use always Pascal notation
    //Fields to store data
    x: number;
    y: number;
    //constructor
    constructor(x:number, y: number) {
        this.x = x;
        this.y = y;
    }
    // Methods
    draw(){
        console.log('X:' + this.x + ', Y:' + this.y);
    }
    getDistance(another: Point) {
        //..
    }
}

let toPoint  = new Point(10, 30);
toPoint.draw();
*/
/*
//POLIMORPHISM : OVERLOADING CONSTRUCNTOR
class Point {// Use always Pascal notation
    //Fields to store data
    x: number;
    y: number;
    //constructor
    constructor(x?:number, y?: number) { //Optional parameters
        this.x = x;
        this.y = y;
    }
    // Methods
    draw(){
        console.log('X:' + this.x + ', Y:' + this.y);
    }
    getDistance(another: Point) {
        //..
    }
}
let toPoint  = new Point();
toPoint.draw();
*/
//ABSTRACTION: ACCESS MODIFIERS => PUBLIC, PRIVATE AND PROTECTED
/*class Point {// Use always Pascal notation
    //Fields to store data, by default are PUBLIC
    private x: number;
    private y: number;
    //constructor
    constructor(x?:number, y?: number) { //Optional parameters
        this.x = x;
        this.y = y;
    }
    // METHODS
    draw(){ // Public by default
        console.log('X:' + this.x + ', Y:' + this.y);
    }
    getDistance(another: Point) {
        //..
    }
}
let toPoint  = new Point(1, 4);
toPoint.draw();
*/
//Prefix: Short way to build
/*class Point {// Use always Pascal notation
    constructor(public x?:number, private y?: number) { //Optional parameters
    }
    // METHODS
    draw(){ // Public by default
        console.log('X:' + this.x + ', Y:' + this.y);
    }
    getDistance(another: Point) {
        //..
    }
}
let toPoint  = new Point(4);
toPoint.x = 10
toPoint.draw();
*/
//https://www.youtube.com/watch?v=k5E2AVpwsko
//PROPERTIES: 1:13:06
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X:' + this.x + ', Y:' + this.y);
    };
    return Point;
}());
var toPoint = new Point(1, 4);
toPoint.draw();
