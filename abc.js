// Задача №1
// let str = 'abcde';
console.log(str[0]); 
console.log(str[1]); 
console.log(str[4]); 

// Задача №2
let secondsInMinute = 60;
let minutesInHour = 60;
let secondsInHour = secondsInMinute * minutesInHour;
console.log(`Количество секунд в часе: ${secondsInHour}`); 

// Задача №3
let num = 3;
console.log(`Значение переменной num: ${num}`);
// let a = 10;
let b = 2;
console.log(`Сумма: ${a + b}`); 
console.log(`Разность: ${a - b}`); 
console.log(`Произведение: ${a * b}`); 
console.log(`Частное: ${a / b}`); 
let c = 15;
let d = 2;
// let result = c + d;
console.log(`Результат сложения c и d: ${result}`);
console.log(`Сумма a, b и c: ${a + b + c}`); 

// Задача №4
let greeting = 'Привет, Мир!';
console.log(greeting);
let str1 = 'Привет, ';
let str2 = 'Мир!';
console.log(str1 + str2); 
let name = 'Рашид'; 
console.log(`Привет, ${name}!`);

// Задача 7: Вывод текущего времени
let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
console.log(`Текущее время: ${hour}:${minute}:${second}`);

// Задача 8: Ассоциативный массив зарплат
let obj = {'Коля': '1000', 'Вася': '500', 'Петя': '200'};
console.log(`Зарплата Пети: ${obj['Петя']}`);
console.log(`Зарплата Коли: ${obj['Коля']}`);

// Задача 9: Создание массива двумя способами
let arr1 = [1, 2, 3, 4, 5]; // Способ 1
let arr2 = new Array(1, 2, 3, 4, 5); // Способ 2
console.log('Массив 1:', arr1);
console.log('Массив 2:', arr2);

// Задача 10: Вывод массива с помощью alert
let arrAlert = ['a', 'b', 'c'];
alert(arrAlert);

// Задача 11: Вывод элементов массива
let arrElements = ['a', 'b', 'c'];
console.log('Первый элемент:', arrElements[0]);
console.log('Второй элемент:', arrElements[1]);
console.log('Третий элемент:', arrElements[2]);

// Задача 12: Форматирование строки из массива
let arrFormat = ['a', 'b', 'c', 'd'];
console.log(`${arrFormat[0]}+${arrFormat[1]}, ${arrFormat[2]}+${arrFormat[3]}`);

// Задача 13: Операции с элементами массива
let arrOperations = [2, 5, 3, 9];
let result = arrOperations[0] * arrOperations[1] + arrOperations[2] * arrOperations[3];
console.log('Результат операций:', result);

// Задача 14: Доступ к элементу вложенного массива
let arrNested = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log('Элемент 4:', arrNested[1][0]);

// Задача 15: Доступ к элементу объекта
let objLanguages = {js: ['jQuery', 'Angular'], php: 'hello', css: 'world'};
console.log('jQuery:', objLanguages.js[0]);

// Задача 16: Двухмерный массив с днями недели
let days = {
  ru: ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
  en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};
console.log('Понедельник по-русски:', days.ru[0]);
console.log('Среда по-английски:', days.en[2]);

// Задача 17: Вывод дня недели в зависимости от языка
let lang = 'ru'; // или 'en'
let day = 3; // номер дня (0-6)
console.log('День недели:', days[lang][day]);

// Задача 18: Проверка переменной на равенство нулю
let a = 0;
if (a === 0) {
  console.log('Верно');
} else {
  console.log('Неверно');
}

// Задача 19: Проверка переменной на больше нуля
a = 1;
if (a > 0) {
  console.log('Верно');
} else {
  console.log('Неверно');
}

// Задача 20: Проверка переменной на меньше нуля
a = -3;
if (a < 0) {
  console.log('Верно');
} else {
  console.log('Неверно');
}

// Задача 21: Проверка переменной на больше или равно нулю
a = 0;
if (a >= 0) {
  console.log('Верно');
} else {
  console.log('Неверно');
}

// Задача 22: Проверка переменной на меньше или равно нулю
a = -3;
if (a <= 0) {
  console.log('Верно');
} else {
  console.log('Неверно');
}

// Задача 23: Проверка переменной на неравенство нулю
a = 1;
if (a !== 0) {
  console.log('Верно');
} else {
  console.log('Неверно');
}

// Задача 24: Проверка переменной на равенство строке
a = 'test';
if (a === 'test') {
  console.log('Верно');
} else {
  console.log('Неверно');
}

// Задача 25: Проверка переменной на равенство строке '1' по типу и значению
a = '1';
if (a === '1') {
  console.log('Верно');
} else {
  console.log('Неверно');
}

// Задача 26: Определение декады месяца
let dayOfMonth = 15;
if (dayOfMonth >= 1 && dayOfMonth <= 10) {
  console.log('Первая декада');
} else if (dayOfMonth >= 11 && dayOfMonth <= 20) {
  console.log('Вторая декада');
} else {
  console.log('Третья декада');
}

// Задача 27: Определение поры года
let month = 5;
if (month >= 3 && month <= 5) {
  console.log('Весна');
} else if (month >= 6 && month <= 8) {
  console.log('Лето');
} else if (month >= 9 && month <= 11) {
  console.log('Осень');
} else {
  console.log('Зима');
}

// Задача 28: Проверка первого символа строки
let str = 'abcde';
if (str[0] === 'a') {
  console.log('да');
} else {
  console.log('нет');
}

// Задача 29: Проверка первого символа строки на цифру 1, 2 или 3
str = '12345';
if (str[0] === '1' || str[0] === '2' || str[0] === '3') {
  console.log('да');
} else {
  console.log('нет');
}

// Задача 30: Сумма цифр строки
str = '123';
let sumDigits = Number(str[0]) + Number(str[1]) + Number(str[2]);
console.log('Сумма цифр:', sumDigits);

// Задача 31: Сравнение сумм половин строки
str = '123456';
let sumFirstHalf = Number(str[0]) + Number(str[1]) + Number(str[2]);
let sumSecondHalf = Number(str[3]) + Number(str[4]) + Number(str[5]);
if (sumFirstHalf === sumSecondHalf) {
  console.log('да');
} else {
  console.log('нет');
}

// Задача 32: Цикл while
console.log('Числа от 1 до 100:');
let i = 1;
while (i <= 100) {
  console.log(i);
  i++;
}

console.log('Числа от 11 до 33:');
let j = 11;
while (j <= 33) {
  console.log(j);
  j++;
}

console.log('Четные числа от 0 до 100:');
let k = 0;
while (k <= 100) {
  if (k % 2 === 0) {
    console.log(k);
  }
  k++;
}

console.log('Сумма чисел от 1 до 100:');
let sum = 0;
let l = 1;
while (l <= 100) {
  sum += l;
  l++;
}
console.log(sum);

// Задача 33: Цикл for
console.log('Числа от 1 до 100:');
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

console.log('Числа от 11 до 33:');
for (let j = 11; j <= 33; j++) {
  console.log(j);
}

console.log('Четные числа от 0 до 100:');
for (let k = 0; k <= 100; k += 2) {
  console.log(k);
}

console.log('Сумма чисел от 1 до 100:');
let sumFor = 0;
for (let l = 1; l <= 100; l++) {
  sumFor += l;
}
console.log(sumFor);

console.log('Элементы массива:');
let arrFor = [1, 2, 3, 4, 5];
for (let m = 0; m < arrFor.length; m++) {
  console.log(arrFor[m]);
}

console.log('Сумма элементов массива:');
let resultFor = 0;
for (let n = 0; n < arrFor.length; n++) {
  resultFor += arrFor[n];
}
console.log(resultFor);