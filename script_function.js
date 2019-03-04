const FUNCTIONS = 'тема изучения - Функции'
console.log(`${FUNCTIONS}`);
console.log(`-----------------------------------------------------`);

// 📣 Функция - блок программного кода, который определяется один раз и может выполняться, или вызываться многократно👆.
// 📣 Функции могут иметь параметры: список идентификаторов, которые играют роль локальных переменных в теле функции👆.
// 📣 Функции часто используют свои аргументы для вычисления возвращаемого значения, которе является значением
// выражения вызова функции (если нет явного return, то возвращается значение undefined).
// 📣 При вызове любой функции ей передается значение, определяющее контекст вызова - значение в ключевом слове this🔥🔥🔥.
// 📣 Если функция присваивается свойству объекта, она называется методом объекта👆, тогда объект становится контекстом вызова функции.
// 📣 Функции, предназначенные для инициализации вновь созданных объектов, называют конструкторами👆.
// 📣 Функции в JavaScript являются замыканиями.

//1.Определение функции
//📣 1️⃣ С помощью объявления функции (называется инструкция🔥):
// function name([param,[, param,[..., param]]]) {  [statements]  };
  
  hoisted("hello world");           //👈 выводим foo, объявление функции в JavaScript поднимает🔥🔥🔥 определение функции 
                                    //👈 ее можно вызвать до ее объявления 
  function hoisted(a) {
    console.log(a);                 
  }                                 //👈 тк отсутствует возвращаемое значение (return), функция называется - процедурой 

// 

  function distance(x1, y1, x2, y2) {                         //👈 инструкция
    let dx = x2 - x1;
    let dy = y2 - y1;
    return Number(Math.sqrt(dx * dx + dy * dy).toFixed(2));   //👆 метод toFixed возвращает String
  }                                                           //👆 возвращает результат вычисления

// 

  function fact(x) {                                          //👈 рекурсивная функция (вызывющая сама себя) 
    if (x <= 1) return 1;
    return x * (fact(x - 1));
  }                                                           //👆 возвращает результат вычисления
  
//📣 2️⃣ С помощью выражения определения функции (называется выражение🔥):
// var myFunction = function [name]([param1[, param2[, ..., paramN]]]) {  statements  };

  // notHoisted();                    //👉 TypeError: notHoisted is not a function 

  var notHoisted = function() {       //👆 нельзя вызвать до ее объявления, вызовет ошибку
     console.log("bar");
  };

// 

  var square = function (x) {
    console.log(arguments[0]);
    return x * x;
  };

  // var square = { 'math': function (x) {  //👆 Если вы хотите сослаться на текущую функцию внутри тела этой функции, вам необходимо создать именованое функциональное выражение.
  //   return x * x;
  // }};

//📣 3️⃣ С помощью конструктора Function:
// Конструктор Function создаёт новый объект Function. В JavaScript каждая функция является объектом Function.
// new Function([arg1[, arg2[, ...argN]],] functionBody)

  var adder = new Function('a', 'b', 'return a + b');   //👈 создаем функцию, принимающую 2 аргумента и возвращающую их сумму





























let b = {
  x:2,
  math: function() {
    console.log(this);
    return this.x * this.x;
  } 
}