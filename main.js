console.log('#1. Приклад домашнього завдання з JavaScript')

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

// ім'я змінної: myNum, значення: 10
// ім'я змінної: myStr, значення: 'some string'
// ім'я змінної: myBool, значення: true
// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
// ім'я змінної myObj, значення: first: 'First Name', last: 'Last Name'

let myNum = 10
let myStr = 'some string'
let myBool = true
let myArr = [1, 2, 3, 4, 5]
let myObj = {
  first: 'First Name',
  last: 'Last Name'
}

/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */

console.log('----------------- #2 -----------------')

 let decimal2 = myNum.toFixed(2);
 console.log(decimal2);

/*
 * #3
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */

console.log('----------------- #3 -----------------')

let i = 10;

// Префіксний інкремент
console.log("Префіксний інкремент", ++i); // 11
console.log(i);   // 11

// Постфіксний інкремент
console.log("Постфіксний інкремент", i++); // 11
console.log(i);   // 12

// Префіксний декремент
console.log("Префіксний декремент", --i); // 11
console.log(i);   // 11

// Постфіксний декремент
console.log("Постфіксний декремент", i--); // 11
console.log(i);   // 10

/*
 * #4
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */

console.log('----------------- #4 -----------------')

let myTest = 20
console.log("+= -", myTest += 2); // 20 + 2 = 22
console.log("-= -", myTest -= 2); // 20 - 2 = 20
console.log("*= -", myTest *= 2); // 22 * 2 = 40
console.log("/= -", myTest /= 2); // 44 / 2 = 20
console.log("%= -", myTest %= myNum); // 20 % 10 = 0

/*
 * #5
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

// константа Pi → myPi
// округлене значення числа 89.279 → myRound
// випадкове число між 0..10 → myRandom
// 3 у 5 степені → myPow

console.log('----------------- #5 -----------------')

let myPi = Math.PI;
console.log('myPi:', myPi); 

let myRound = Math.round(89.279);
console.log('myRound:', myRound);

let myRandom = Math.random() * 10;
console.log('myRandom:', myRandom); 

let myPow = Math.pow(3, 5);
console.log('myPow:', myPow); 

/*
 * #6
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */

console.log('----------------- #6 -----------------')

 let strObj = {
  str: "Мама мыла раму, рама мыла маму",
 }

 strObj.length = strObj.str.length

 console.log("Str:", strObj.str);
 console.log("Length:", strObj.length);

/*
 * #7
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.6), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

console.log('----------------- #7 -----------------')

let isRamaPos = strObj.str.indexOf("рама")
let isRama = isRamaPos !== -1;

console.log(isRamaPos);
console.log(isRama);

/*
 * #8
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.6), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

console.log('----------------- #8 -----------------')

let strReplace = strObj.str.replace('мыла', 'моет').replace('рама мыла', 'Рама держит')


console.log("Вихідний рядок:", strObj.str);
console.log("Результат:", strReplace);

/*
 * #9
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */
console.log('----------------- #9 -----------------')

let someStr = 'some STRING'

console.log("Upper:", someStr.toUpperCase());
console.log("Lower:", someStr.toLowerCase());

