class Car {
  static #MAX_PRICE = 50000;
  // Пиши код ниже этой строки
	static checkPrice (price){
    if(price > Car.#MAX_PRICE){
    return 'Внимание! Цена превышает допустимую.';
    }
    return  'Всё хорошо, цена в порядке.'      
    };
  // Пиши код выше этой строки
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.