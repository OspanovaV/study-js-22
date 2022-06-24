/*
 * Основы ООП: класс, экземпляр (объект), интерфейс
 */

/*
 * Функции-конструкторы (отвечает на вопрос что? и записываем с большой буквы)
 * - Именование
 * - Оператор new(Если функция вызывается через new, создаётся пустой объект)
 * - Свойство Function.prototype
 */
// 1. Если функция вызывается через new, создаётся пустой объект
// 2. Функция-конструктор вызывается в контексте созданного объекта,
    //  то есть в this записывается ссылка на него(на тот пустой созданный обьект)
// 3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype
  //    тоесть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)
// 4. Ссылка на обьект возвращается в место вызова new Car
//То что обьявляется внутри функции-конструктора уходит на каждый экземпляр делается копия

// Для инициализации экземпляра в классе есть метод constructor.
// Если он не объявлен, создаётся конструктор по умолчанию - пустая функция, которая не изменяет экземпляр.
// Вызов класса с оператором new приводит к созданию нового объекта и вызову конструктора в контексте этого объекта.
// То есть this внутри конструктора будет ссылаться на новосозданный объект.Это позволяет добавлять каждому объекту
//  свойства с одинаковыми именами, но разными значениями.

/*
*прототипное наследование
 */
// / 1. У каждого обьекта есть свойство __proto__
// 2. В этом свойстве лежит ссылка на его ПРОТОТИП, то есть другой обьект
// 3. При создании литерала обьекта, в свойство __proto__ записывается ссылка на Функция.prototype
// 4. Функция-конструктор это просто функция :)
// 5. Всю магию делает оператор new
// 6. Если функция вызывается через new, создаётся пустой объект где-то в памяти
// 7. Функция вызывается в контексте этого созданного объекта т.е. его this ссылается на тот обьект
// 8. В свойство this.__proto__ записывается ссылка на обьект Функция.prototype
// 9. Ссылка на обьект возвращается в место вызова new Фунукция()

const Car = function ({ brand, model, price } = {}) {//функция-конструктор с параметрами.Деструктуризация.Пустые скобки {}-это параметр по умолчанию
  // const { brand, model, price } = config;
  // 2. Функция-конструктор вызывается в контексте созданного объекта,
  //    то есть в this записывается ссылка на него
  this.brand = brand;
  this.model = model;
  this.price = price;

  // 3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype
  //    тоесть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)

  // 4. Ссылка на обьект возвращается в место вызова new Car
};

//в свойства функции-конструктора .prototype накидываем различные методы и получаем хранилище методов
Car.prototype.sayHi = function () {
  console.log('Car.prototype.sayHi -> this', this);
  console.log('Hello :) ');
};
//добавим метод, который изеняет цену
Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

// console.log(Car.prototype);

// 1. Если функция вызывается через new, создаётся пустой объект
// const myCar = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// });
// console.log(myCar);

// myCar.sayHi();
// myCar.changePrice(10000);//наша машина вызывает changePrice(в контексте myCar) в собственных свойствах нету ищем в прототипе

// const myCar2 = new Car({ brand: 'BMW', model: 'X6', price: 50000 });
// console.log(myCar2);

// myCar2.sayHi();

// const myCar3 = new Car({ brand: 'Audi', model: 'A6', price: 65000 });
// console.log(myCar3);

// myCar3.sayHi();

const User = function ({ email, password } = {}) { //по умолчанию обязательно дефолтное значение {}-пустой обьект
  this.email = email;
  this.password = password;
};

console.log(User.prototype);

User.prototype.changeEmail = function (newMail) {
  this.email = newMail;
};

const mango = new User({ email: 'mango@mail.com', password: 1111111 });

mango.changeEmail('my-new-mail@mail.com');
// console.log(mango);

/*
 * Статические свойства и методы
 * - Статические свойства и методы доступны только на самом конструкторе
 * - В статических методах не нужен this
 */

User.message =
  'Я статическое свойство, меня нет на экземплярах или в прототипе.';

User.logInfo = function (obj) {
  console.log('User.logInfo -> obj', obj);
  console.log('Почта: ', obj.email);
  console.log('Пароль: ', obj.password);
};

User.logInfo(mango);

// Object.keys()
// Object.value()



