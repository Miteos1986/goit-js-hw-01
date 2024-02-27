// Написати функцію, котра створить новий масив в якому
// не буде значень, які приводяться до false

// const array = [1, 0, 54, 'doc', null, 'jpg', undefined, '', 'png', 'exe', false, 'mp4', NaN, 'hbs'];

// function newArray(array) {
//   const newArray = [];
//   for (const arr of array) {
//     if (arr) {
//       newArray.push(arr);
//     }
//   }
//   return newArray;
// }
// console.log(newArray(array));

// Задача2

// Напиши скрипт, який порівняє два масива і виведе у консоль результат:
// true - якщо всі елементи однакові і false - в іншому випадку

// const arr1 = [1, 4, 6, 'color', 324, 232, 'list', 11, 9, 'dream', 34, 0, -30, 'ytyt'];
// const arr2 = [6, 'dream', -30, 11, 9, 1, 324, 34, 'color', 4, 232, 0, 'list'];

// const arr3 = [4, 232, 6, -30, 'color', 324, 'list', 1, 11, 9, 'dream', 34, 0];
// const arr4 = ['color', 6, -30, 11, 9, 1, 'dream', 324, 34, 4, 232, 0, 'list'];

// const arr5 = [1, 4, 6, 'color', 'list', 11, 9, 'dream', 34, 0, -30, 'lesson'];
// const arr6 = [6, 324, 'dream', -30, 9, 8, 34, 'color', 4, 232, 0, 'list', 11];

// const arr7 = [1, 4, 6, 'color', 324, 232, 'list', 11, 9, 'dream', 34, 0, -30];
// const arr8 = [6, 'dream', -30, 10, 9, 1, 324, 34, 'color', 4, 232, 0, 'list'];

// function compareArreys(firstArrey, secondArrey) {
//   if (firstArrey.length !== secondArrey.length) {
//     return false;
//   }
//   for (const item of firstArrey) {
//     if (!secondArrey.includes(item)) return false;
//   }

//   return true;
// }
// console.log(compareArreys(arr3, arr2));
// console.log(compareArreys(arr4, arr7));
// console.log(compareArreys(arr5, arr8));
// console.log(compareArreys(arr1, arr2));

// Задача 3

// Напишіть функцію caclculateAverage()
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додати перевірку, що аргументи це числа.

// function caclculateAverage(...args) {
//   let sum = 0;
//   let count = 0;
//   for (const arg of args) {
//     if (typeof arg === 'number') {
//       sum += arg;
//       count += 1;
//     }
//   }
//   return sum / count;
// }
// console.log(caclculateAverage(1, 2, 3, 'uttij'));

// task 4
// Напишіть функцію countOccurrences, яка приймає масив і елемент,
// і повертає кількість входжень цього елемента у масиві.
// Використовуйте цикл for...of для ітерації через елементи масиву
// та порівнюйте їх з вказаним елементом для підрахунку кількості входжень.

// const numbersArray = [1, 2, 3, 2, 4, 2, 2, 5];
// const targetNumber = 2;

// function countOccurrences(array, target) {
//   let count = 0;
//   for (const item of array) {
//     if (item === target) {
//       count += 1;
//     }
//   }
//   return count;
// }
// console.log(countOccurrences(numbersArray, targetNumber));

// task4

// / Напишіть функцію findMaxNumber, яка приймає масив чисел і повертає
// максимальне число у цьому масиві.Використовуйте цикл for...of для
// ітерації через елементи масиву.

// function findMaxNumber(arr) {
//   const max = Math.max(...arr);
//   return max;
//   или;

//   let max = arr[0];
//   for (const item of arr) {
//     if (item > max) {
//       max = item;
//     }
//   }
//   return max;
// }
// console.log(findMaxNumber([1, 2, 72, 32, 55, 3, 4, 5]));

// таск5

// Додати метод getinfo в об'єкт user, який повертатиме інформацію
// про користувача у форматі:
// `Name: Peter. Surname: Parker. Age: 22. Position: spider-man.`

// const user = {
//   name: 'Peter',
//   surname: 'Parker',
//   age: 22,
//   position: 'spider-man',
// };
// user.getinfo = function () {
//   return `Name: ${this.name}. Surname: ${this.surname}.
//    Age: ${this.age}. Position: ${this.position}.`;
// };
// console.log(user.getinfo);

// task - 6

// Створіть об'єкт calculator із трьома методами:
//read(a, b) - приймає два аргументи та зберігає їх як властивості об'єкта
//sum() - повертає суму збережених значень
//mult() - перемножує збережені значення та повертає результат

// const calculator = {
//   read(a, b) {
//     this.value1 = a;
//     this.value2 = b;
//   },
//   sum() {
//     return this.value1 + this.value2;
//   },
//   mult() {
//     return this.value1 * this.value2;
//   },
// };

// calculator.read(4, 5);
// console.log(calculator.sum());
// console.log(calculator.mult());

// task-7

// Напишіть функцію checkKeyInObject(), яка приймає 2 параметри obj і key.
// Функція буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true, в іншому випадку - false.

// const user = {
//   name: 'Igor',
//   car: 'Mercedes',
//   carColor: 'black',
// };
// function checkKeyInObject(obj, key) {
//   for (const objKey in obj) {
//     if (objKey === key) {
//       return true;
//     }
//   }
//   return false;
// или
//   return Object.keys(obj).includes(key);
// }
// console.log(checkKeyInObject(user, 'car'));

// task 8

// Є об'єкт, у якому зберігаються обрані товари у кошику.
// Напишіть код для визначення загальної суму замовлення
// і збережіть його результат у змінній totalCost.
// Якщо об'єкт cart порожній, то результат має бути 0.

// const cart = {
//   apple: 50,
//   banana: 30,
//   orange: 40,
// };
// let totalCoast = 0;
// const value = Object.values(cart);
// const key = Object.key(cart);
// for (const item of value) {
//   totalCoast += item;
// }

// или

// for (const key in cart) {
//   totalCoast += cart[key];
// }
// console.log(totalCoast);

// Напишіть функцію getPropertyValues(), яка приймає масив об'єктів
// та ключ, і повертає масив значень цього ключа у кожному об'єкті

// const myArr = [
//   { name: 'John', age: 30 },
//   { name: 'Jane', age: 25 },
//   { name: 'Bob', age: 40 },
// ];
// function getPropertyValues(arr, key) {
//   const newArr = [];
//   for (const item of arr) {
//     newArr.push(item[key]);
//   }
//   return newArr;
// }
// console.log(getPropertyValues(newArr, 'name'));
// нужно пересмотреть видео

// task10

// Знайти студента з найменшим віком та вивести інформацію про нього у форматі:
// `Студент з найменшим віком: name, Вік: age, Спеціальність: major`

// const students = [
//   { name: 'Олександр', age: 20, major: 'Інформатика' },
//   { name: 'Марія', age: 21, major: 'Психологія' },
//   { name: 'Іван', age: 19, major: 'Економіка' },
// ];
// function searchYangStud() {
//   let yangStud = students[0];

//   for (const student of students)
//     if (student.age < yangStud.age) {
//       yangStud = student;
//     }
//   return `Студент з найменшим віком: ${yangStud.name}, Вік: ${yangStud.age}, Спеціальність: ${yangStud.major}`;
// }
// console.log(searchYangStud());

// task11
// Розрахувати загальну суму всіх замовлень та вивести інформацію у форматі:
// `Загальна сума всіх замовлень: totalAmount`

//
// нижнее подставляется в верхнее, меняя его значения в свойствах
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

// Callback
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//   console.log(`Eating pizza  ${pizzaName}`);
// });

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Inex ${index}, value ${number}`);
// };

// numbers.forEach(logMessage);

// REDUCE()
// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// const total = players.reduce((acc, player) => {
//   return acc + player.playtime / player.gamesPlayed;
// }, 0);
// console.log(total);

// const calculateTotalBalance = users => {
//   [
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       gender: 'male',
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       gender: 'female',
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       gender: 'male',
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       gender: 'female',
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       gender: 'male',
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       gender: 'male',
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       gender: 'female',
//     },
//   ];
//   const totalScore = users.reduce((total, user) => {
//     return total + user.balance;
//   }, 0);
//   return totalScore;
// };

// console.log(totalScore);

//Цепочный Метод:

// Масив books містить масив об'єктів книг,
// кожен з яких містить властивості title, author, rating.

// Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.
//  Використовуй ланцюжок методів.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .toSorted((a, b) => a.localeCompare(b));
// console.log(names);
