'use strict';

const rectangle = {
  width: 5,
  height: 5,

  get perimeter() {
    return `Периметр равен ${(this.width + this.height) * 2}см`;
  },
  get area() {
    return `Площадь равна ${this.width * this.height}см квадратных`;
  },

  set rWidth(val) {
    this.width = val;
  },
  set rHeight(val) {
    this.height = val;
  },
};

rectangle.rWidth = 4;
rectangle.rHeight = 11;

console.log(rectangle.perimeter);
console.log(rectangle.area);
