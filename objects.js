// 1.Составьте алгоритм, который считает, сколько времени вам нужно на
// приготовление яиц.
// Правила:
// -Яйца варить 5 минут
// -Вместительность емкости не более 5 яиц одновременно

function getCookingTime(eggsAmount) {
  return Math.ceil(eggsAmount / 5) * 5;
}

// 2.Получая массив чисел. Все они либо нечетные, либо четные, кроме
// одного. Тебе нужно его найти.

function getNumber(array) {
  let result;
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      count++;
      if (count > 1) {
        break;
      }
    }
  }

  if (count > 1) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        return array[i];
      }
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      return array[i];
    }
  }
}

// console.log(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])); //returns 4
// console.log(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])); //returns 13

// 3. Принимая массив объектов и случайную строку. У объектов может
// быть ключ: «title» с разными значениями. Создайте алгоритм, который
// фильтрует массив, заданный как первый параметр, и возвращает массив
// объектов, которые содержат в своих заголовках заданную строку в
// качестве второго параметра (без учета регистра).

// function findTitle(array, ‘string’) {
// return [{title has this substring}]
// }
// findTitle (arr, str) {

// }

// let arr = [{
// title: 'Some title1'
// }, {
// title: 'I like JS'
// }, {
// user: 'This obj doesn\’t have key title js'
// }, {
// title: 'Js - is the best!'
// }];
// findTitle(arr, 'js'); // return [{ title: 'I like JS'}, { title: 'Js - is the best!' }]

// 4. Принимая строку, ваша функция должна вернуть обьект, в котором
// ключи – символы строки, значение – количество повторений символов в
// строке
// function countCharacters(string) {
// let result;
// //Your code here
// return result;
// }
// countCharacters(‘sparrow’) // should return {s: 1, p: 1, a: 1, r: 2, o: 1, w: 1}
// countCharacters(‘aabcddeffge’) // should return {a: 2, b: 1, c: 1, d: 2, e: 2, f: 2,
// g: 1}
// countCharacters(‘a 2ab !d’) // should return {a: 2, b:1, d:1, 2:1}

// 5. Принимая число, ваша функция должна найти следующий
// положительный палиндром большего размера.
// Палиндром - это слово, фраза, число или другая последовательность
// символов, которая читается так же, как вперед и назад, например,
// «мадам».
// function getNextPalindrome(number) {
// let result;
// //Your code here
// return result;
// }
// getNextPalindrome(7) // returns 11
// getNextPalindrome(99) //returns 101
// getNextPalindrome(132) // returns 141
// getNextPalindrome(888) // returns 898
// getNextPalindrome(999) // returns 1001
