console.log('// rtrn.js:', '\n');
// TODO - оператор return:

// пример 1:
( function(){

function foo(name) {
  const word = 'Hello ';
  console.log(word + name); // return не нужен
}
foo('Mike!');

})();

// пример 1-1:
( function(){

function foo() {
  const word = 'Hello';
  return word;
}
console.log(foo());

})();

// пример 1-2:
( function(){

function foo(name) {
  const word = 'Hello ';
  let say = word + name;
  return say;
}
let result = foo('Mike!');
console.log(result);

})();

// пример 2:
// если нужно использовать результат функции в дальнейшем - необходимо вернуть его из функции
// и сохранить во внешней области видимости:
( function(){

function sum(a, b) {
  return a + b;
}
const result = sum(2, 3); // присвоение/передача результата вызывающей стороне
console.log(result);

})();

// пример 2-1:
( function(){

function sum(a, b) {
  let result = a + b;
  return result; // шаг 1 - возвращаем результат из функции
}
let result = sum(2, 3); // шаг 2 - сохраняем результат в переменную во внешней обл. видимости
console.log(result);

})();

// пример 2-2: ReferenceError: result is not defined
( function(){

function sum(a, b) {
  let result = a + b; // эта переменная в обл. видимости(локальная, внутреняя) sum
  return result;
}
sum(2, 3); // результат не сохранён в result
console.log(result); // эта переменная вне! обл. видимости(глобальная, внешняя) sum

})();

// TODO Резюме: 
// 1. функция возвращает заданное значение и завершает своё выполнение;
// 2. после оператора return любые инструкции игнорируются;
// 3. что-бы использовать результат функции в дальнейшем - необходимо вернуть его из функции
// и сохранить во внешней области видимости.
// 4. если return не указан или указан без значения - функция всё равно завершит выполнение, 
// но вернёт значение undefined.



