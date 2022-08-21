'use strict';

const cart = {
  items: [],
  sum: 0,
  count: 0,
  discount: 0,
  add(nameProduct, priceProduct, amountProduct = 1) {
    const product = {
      name: nameProduct,
      price: priceProduct,
      amount: amountProduct,
    };

    this.items.push(product);
    this.increaseCount(product.amount);
    this.totalPrice;
  },
  increaseCount(num) {
    this.count += num;
  },
  calculateItemPrice() {
    let sum = 0;
    this.items.forEach((item) => {
      sum += item.amount * item.price;
    });
    return sum - (sum * this.getDiscount) / 100;
  },
  clear() {
    this.items = [];
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log('Общая стоимость:', this.totalPrice);
  },
  get totalPrice() {
    return this.calculateItemPrice();
  },
  set setDiscount(promocode) {
    switch (true) {
      case promocode === 'METHED':
        this.discount = 15;
        break;
      case promocode === 'NEWYEAR':
        this.discount = 21;
        break;
      case promocode === '':
        this.discount = 0;
        break;
    }
  },
  get getDiscount() {
    return this.discount;
  },
};

cart.setDiscount = 'METHED';

cart.add('стул', 400, 10);
cart.add('стол', 500);
cart.add('лампа', 100, 1);

cart.print();
