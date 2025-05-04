class Area {
    constructor(length = 0, width = 0, radius = 0) {
      this.length = length;
      this.width = width;
      this.radius = radius;
    }
    Rectangle() {
      if (this.length >0 && this.width > 0) {
        return this.length * this.width;
      } else {
        return "Invalid dimensions for rectangle";
      }
    }
    Square() {
      if (this.length > 0) {
        return this.length * this.length;
      } else {
        return "Invalid dimension for square";
      }
    }
    Circle() {
      if (this.radius > 0) {
        return Math.PI * Math.pow(this.radius, 2);
      } else {
        return "Invalid radius for circle";
      }
    }
  }
  const rectangle = new Area(10, 5);
  console.log("Rectangle Area: " + rectangle.calculateRectangleArea());
  
  const square = new Area(4);
  console.log("Square Area: " + square.calculateSquareArea());
  
  const circle = new Area(0, 0, 7);
  console.log("Circle Area: " + circle.calculateCircleArea());
  