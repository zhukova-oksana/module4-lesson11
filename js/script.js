'use strict';

const rectangle = {
  _width: 5,
  _height: 5,

  get perimeter() {
    return `Периметр равен ${(this._width + this._height) * 2}см`;
  },
  get area() {
    return `Площадь равна ${this._width * this._height}см квадратных`;
  },

  set Width(val) {
    this._width = val;
  },
  set Height(val) {
    this._height = val;
  },
};

rectangle.Width = 4;
rectangle.Height = 11;

console.log(rectangle.perimeter);
console.log(rectangle.area);
