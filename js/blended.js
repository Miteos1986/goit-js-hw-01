// function isNumberInRange(start, end, number) {
//   if (number >= start && number <= end) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isNumberInRange(10, 30, 17));

// function createFileName(name, ext) {
//   const trimmedName = name.trim();
//   return `${trimmedName}.${ext}`;
// }
// console.log(createFileName(' presentation', 'xml'));

// Дано рядок, що складається із символів, наприклад, 'abcde'.
// Перевір, що другим символом цього рядка є літера 'b'.
// Якщо так - виведи 'Так' у консоль, в противному випадку виведи 'Ні'

// const x = 'akcde';
// if (x[1] === 'b') {
//   console.log('tak');
// } else {
//   console.log('Hi');
// }

// Оголоси функцію hasDiscount(age, isStudent, isPensioner),
// яка перевіряє, чи покупець має право на знижку.
// І повертає true - якщо має право на знижку і false, якщо - ні.
// Покупець має право на знижку, якщо він є студентом
// або пенсіонером, або вік його між 12 і 18 роками(включно).
// Значення параметрів будуть задаватися під час виклику функції:
// age - вік покупця;
// isStudent - буль (вказує чи є покупець студентом);
// isPensioner - буль  (вказує чи є покупець пенсіонером);

// function hasDiscount(age, isStudent, isPensioner) {
//   return (age >= 12 && age <= 18) || isStudent || isPensioner;
// }
// console.log(hasDiscount(1, false, false));
// -------------------------------------------------------------------------
// Оголоси функцію canRegisterOnSite(age, hasAcceptedTerms),
// яка перевіряє, чи може користувач зареєструватись на сайті.
// І повертає true - якщо може зареєструватись і false, якщо - ні.
// Користувач може зареєструватись, якщо йому виповнилося 13 років
// і він прийняв умови використання.
// Значення параметрів будуть задаватися під час виклику функції:
// age - вік користувача;
// hasAcceptedTerms - буль (вказує чи прийняв користувач умови використання);

// function canRegisterOnSite(age, hasAcceptedTerms) {
//   return age >= 13 && hasAcceptedTerms;
// }
// console.log(canRegisterOnSite(14, false));

// Оголоси функцію checkString(value), яка перевіряє
// чи отримане значення є рядком і не містить символ $.
// Якщо це так, виведіть кількість символів у рядку.
// Якщо значення не є рядком, виведіть повідомлення про невірний ввід.

// function checkString(value) {
//   if (typeof value === 'string' && !value.includes('$')) {
//     console.log(`довжина рядка ${value.length}`);
//   } else {
//     console.log('невірний ввід');
//   }
// }
// checkString('string$');
// checkString('string');
// checkString(5);

// Оголоси функцію calculateSquare(value).
// Функція має перевіряти чи є отримане значення - число
// або за можливості перетворити рядок на число
// Якщо це число функція возводить число у квадрат і виводить рядок
// `The square of ${numberValue} is ${squaredNumber}`
// numberValue - отримане число або перетворене з рядка число.
// squaredNumber - numberValue у квадраті.
// Якщо значення не є числом, функція повертає рядок 'Invalid input!'.

// function calculateSquare(value) {
//   const namberValue = Number.parseFloat(value);
//   console.log(namberValue);
//   if (isNaN(namberValue)) {
//     console.log('Invalid input!');
//   } else {
//     console.log(`Квадрат числа ${Math.pow(namberValue)}`);
//   }
// }
// calculateSquare(12.67);
// calculateSquare('acvf123');
// calculateSquare('13.7dkjk');

// Оголоси функцію isEvenNumber(number), яка перевіряє
// (за допомогою тернарного оператору) чи отримане значення
// є парним числом і виводить відповідне повідомлення
// "Число парне" або "Число непарне"
// Якщо функція отримує не число вивести повідомлення
// "Невалідне значення"

// function isEvenNumber(number) {
//   if (typeof number === 'number') {
//     return number % 2 === 0 ? 'Число парне' : 'Число непарне';
//   } else {
//     return 'Невалідне значення';
//   }
// }
// console.log(isEvenNumber(10));
// console.log(isEvenNumber('jhkjk'));
// console.log(isEvenNumber(true));
// console.log(isEvenNumber(11));

// цикли

//Напишіть цикл (for), який виведе в консоль усі парні числа від max до min включно по зменшенню
// const max = 50;
// const min = 23;
// for (let i = max; i >= min; i--) {
//   if (i % 2 === 0) console.log(i);
// }

// За допомогою циклу for знайдіть суму усіх парних чисел у проміжку від min до max включно
// const max = 50;
// const min = 0;
// let total = 0;
// for (let i = min; i <= max; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   total += i;
// }
// console.log(total);

// Напишіть програму, яка обчислить суму всіх чисел (за допомогою циклу for)
// від 1 до 100, які діляться на 3 або на 5. І виведи в консоль рядок :
// `Сума чисел, які діляться на 3 або на 5 від 1 до 100: ${sum}`
// let total = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     total += i;
//   }
// }
// console.log(`Сума чисел, які діляться на 3 або на 5 від 1 до 100: ${total}`);

// Написати функцію getCountryInfo(country), котра буде
// отримувати назву країни і виводити інформацію про неї
// China => "Китай - найбільша країна за населенням у світі."
// Australia => "Австралія - найбільший острів та країна в Океанії."
// France => "Франція відома своєю гастрономією та мистецтвом."
// Germany => "Німеччина - найбільша економіка в Європі."
// Canada => "Канада - друга за площею країна у світі, відома своєю природою."
// Якщо країни немає, вивести повідомлення "Інформація про цю країну відсутня."

// function getCountryInfo(country) {
//   let info;

//   switch (country) {
//     case 'China':
//       info = 'Китай - найбільша країна за населенням у світі.';
//       break;
//     case 'Australia':
//       info = 'Австралія - найбільший острів та країна в Океанії.';
//       break;
//     case 'France':
//       info = 'Франція відома своєю гастрономією та мистецтвом.';
//       break;
//     case 'Germany':
//       info = 'Німеччина - найбільша економіка в Європі.';
//       break;
//     case 'Canada':
//       info = 'Канада - друга за площею країна у світі, відома своєю природою.';
//       break;
//     default:
//       info = 'Інформація про цю країну відсутня.';
//       break;
//   }
//   return info;
// }
// console.log(getCountryInfo('Canada'));
// console.log(getCountryInfo('Cawnada'));

// Напишіть функцію formatMinutesToTime(minutes), котра
// отримає від користувача число(кількість хвилин) і виведе
// в консоль рядок у форматі годин і хвилин, тобто, якщо користувач
// вказав число 70, в консолі отримаємо "01:10"

// function formatMinutesToTime(minutes) {
//   const hours = Math.floor(minutes / 60);
//   // - получили колич часов
//   const modHours = String(hours).padStart(2, '0');
//   // padSter функц которая показывает количество символов(2 - кол символов в рядке, "0" - должен біть только один символ , показівет с какого символа начинается)
//   console.log(modHours);
//   const modMinutes = String(minutes % 60).padStart(2, '0');
//   return `${modHours}:${modMinutes}`;
// }
// console.log(formatMinutesToTime('63'));

// let count = 0;

// do {
//   console.log(`Count: ${count}`);
//   count += 1;
// } while (count < 5);

// console.log(count(2));
// console.log(count(6));
// console.log(count(4));

// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     sum += i;
//   }
//   return sum;
// }
// calculateTotal();
// console.log(calculateTotal(1));
function calculateEvenTotal(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++)
    if (i % 2 === 0) {
      sum += i;
    }
  return sum;
}
