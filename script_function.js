"use strict"
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
    console.log(this);            
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

  // (function () {                                              //👈 самовызывающаяся анонимная функция
  //   var a = v = 4;                                            //👈 объявление переменной "а" в области видимости func() и "v" в 
  //                                                             //  области видимости Window, в режиме "use strict" -> true будет ошибка "v" is not defined
  //   console.log(a);                                           //👈 "а" => 4 (local scope)
  //   console.log(v);                                           //👈 "v" => 4 (global scope)
  // }());
  // // console.log(a);                                          //👈 "а" => "a" is not defined (function () local scope)
  // console.log(v);                                             //👈 "v" => 4 || Window.v => 4
  
  
//📣 2️⃣ С помощью выражения определения функции (называется выражение🔥):
// var myFunction = function [name]([param1[, param2[, ..., paramN]]]) {  statements  };

  // notHoisted();                    //👉 TypeError: notHoisted is not a function 

  var notHoisted = function() {       //👆 нельзя вызвать до ее объявления, вызовет ошибку
     console.log("bar");
     console.log(this);               //👆this => undefined
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

//📣 4️⃣ Вложенные функции
// JavaScript допускает вложение определений функций в другие функции

  function hypotenise(a, b) {
    console.log(`hypotenise this: ${this}`);            //👈 контекст => [object Window]
    function square2(x) {
      console.log(`square2 this: ${this}`);             //👈 контекст => [object Window]
      return x * x;
    }
    return Number(Math.sqrt(square2(a) + square2(b)).toFixed(2));
  }


//2.Вызов функции
//📣 Функции в языке JavaScript могут вызываться четыремя способами:
// 1. -> как функции(инструкции, выражения определение функции, вложенные функции);
// 2. -> как методы;
// 3. -> как конструктор;
// 4. -> косвенно, с помощью методов call() и apply();

//📣 1️⃣ Вызов функции
// Осуществляется с помощью выражения вызова f(o) (1. выражение обращения к функции; 2. со списком из нуля и более
// выражений аргументов, разделенных внутри скобок запятыми)
// При вызове функции в ECMAScript 3 и в нестрогом режиме ECMAScript 5 контекстом вызова (значением this) является глобальный объект.
// Однако в строгом режиме контекстом вызова является значение undefined
  
  function printprops(o) {                                    //👈 Выводим свойства перечислимые объекта
    for (var prop in o) {
        if (!o.hasOwnProperty(prop)) continue;                //👈 выполняем фильтрацию наследуемых свойств и методов💎
        if (typeof o[prop] === 'function') continue;          //👈 выполняем фильтрацию🔥🔥🔥 👉собственных и наследуемых👈 методов💎
        console.log(`${prop} : ${o[prop]}`);
  }};

  printprops({x: 1, y:2});  
  var total = distance(0, 0, 2, 1) + distance(2, 1, 3, 5);
  var probability = fact(3)/ fact(13);

// Определение функции, которая выявняет действующий режим работы.

  let strict = (function () { return console.log(`"use strict" : ${!this}`); }());        //👈 => false/true

//📣 2️⃣ Вызов методов
// Выражение обращения к функции является выражением обращения к свойству, а это значит, что функция вызывается как метод
// В подобных выражениях вызова методов объект "o" становится контекстом вызова, и тело функции получает возможность ссылаться
// на этот объект с помощью ключевого слова this

  let o = {
    x: 20,
    y: 30,
    f: function() {
      console.log(this);                        //👈 this => o 🔥🔥🔥
      return this.x + this.y;                   //👈 this.x + this.y => o.x + o.y 🔥🔥🔥
      },
    f2: function(a, b) {
      console.log(this);
      return a + b;
      },
    calc: function() {
      console.log(this);
      this.result = this.x * this.y;            //👈 result будет вычислен и добавлен в свойства "o" только после вызова метода calc()🔥🔥🔥
      },
  };

  console.log(o.f());                           //👈 вызов метода объекта "o" => 50
// o["f"]()                                     //👆 второй способ вызова функции => 50
  let x = 10, y = 20;
  console.log(o.f2(x, y));                      //👈 метод f2() принимает 2 параметра => 30
// o["f2"](x, y)                                //👆 второй способ вызова функции с несколькими аргументами => 30

//  Обратить внимание на способ вызова метода и получения результата вызова
  
  // console.log(o.calc());                        //👈 вызвать метод, чтобы вычислить x * y 👆 => return undefined o.result = 600
  console.log(o.result);                        //👈 => return 600

// Если во вложенной функции необходимо иметь доступ к значению "this" внешней функции, это значение следует сохранить в переменной,
// находящейся в области видимости внутренней функции. Для этой цели часть используется переменная с именем "self"

  let o2 = {
    m: function() {
      let self = this;
      console.log(this === o2);                 //👈 => true
      f();
      function f() {
        console.log(this === o2);               //👈 => false
        console.log(this === undefined);        //👈 => true
        console.log(self === o2);               //👈 => true
      };
    },
  };

  o2.m();


//📣 3️⃣ Вызов конструкторов
// Если вызову функции или метода предшествует ключевое слово new, следовательно, это вызов конструктора
// Вызов конструктора отличается от вызова обычной функции или метода особенностями обработки аргументов,
// контекстом вызова 🔥🔥🔥 и возвращаемым значением.
// Наследует некоторые методы и свойства через цепочку прототипов объекта Function.prototype.

  let mult = new Function('a', 'b', 'return a * b');    //👈 подобно литералам {} => создает анонимную функцию

  mult(2, 3);                                           //👈 => 6

// ВАЖНО 🔥🔥🔥
// Когда функция создается с помощью конструктора, не учитывается лексическая область видимости ->
// функции всегда компилируются как глобальные функции 👇👇👇

  let scope2 = "global";
  function constructFunction() {
    let scope2 = "local";
    return new Function('return scope2');               //👈 scope2 => "global"
  };

// ВАЖНО 🔥🔥🔥
// Замыкание

  let scope3 = "global";
  function constructFunction() {
    let scope3 = "local";
    function f(){return scope3};                        //👈 scope3 => "local"
    return f();
  };
console.clear();

//3.Аргументы и параметры
//📣 Функции в языке JavaScript при определении и вызове функций не указываются типы параметров, не выполняются проверки типов передаваемых
// значений аргументов, не проверяется даже количество аргументов.

//📣 1️⃣ Необязательные аргументы
// Когда число аргументов в вызове функции меньше числа объявленных параметров, недостающие аргументы получают значение undefined
// Часто бывает удобно 🔥 писать функции так, чтобы некоторые аргументы были необязательными и могли опускаться при вызове функции.

// ВАЖНО 🔥🔥🔥
// При объявлении функции необязательные аргументы должны завершать список аргументов, чтобы их можно было опустить

  function getPropertyNames (o, /* необязательный */ a) {
    // if (a === undefined) a = [];                   //👈 если массив не определен => создать новый массив
    a = a || [];                                      //👈 вместо инструкции "if" можно использовать оператор "||" след. образом
    for (var prop in o) a.push(prop);                 //👈 добавить все перечислимые свойства в массив
    return a;                                         //👈 вернуть массив
  };

  let a = getPropertyNames(o);                        //👈 добавить все перечислимые свойства объекта "o" в новый массив "a"
  getPropertyNames(o2, a);                            //👈 добавить дополнительно перечислимые свойства объекта "o2" в массив "a"

//📣 2️⃣ Списки аргументов переменной длины
// Если число аргументов в вызове превышает число имен параметров, функция лишается возможности напрямую обращаться к неименованным
// значениям. Решение этой проблемы предоставляет объект Arguments🔥
// Arguments - это объект, подобный массиву, позволяющий извлекать переданные функции значения по их номерам, а не по именам

  function f(x, y, z) {
    // Сначала проверяется, правльное ли количество аргументов передано
    if (arguments.length != 3) {
      throw new Error (`функция f() вызвана с ${arguments.length} аргументами, а требуется 3`);
    }
    // А теперь сам код функции
  }

// Объект Arguments иллюстрирует важную возможность JavaScript-функций: они могут быть написаны таким образом, чтобы работыть
// с любым количеством аргументов.

  function max() {
    // Берем первое значение аргумента и начинаем с ним сравнивать
    console.log(arguments.length);
    let max = arguments[0];
    // Цикл по всем аргументам, поиск и сохранение наибольшего из них
    for (var i = 0; i < arguments.length; i++) {
      if (max < arguments[i]) max = arguments[i];
    }
    // Веннуть наибольшее значение
    return max;
  }

  var largest = max(1.2, 10, 100, 2, 3, 1000, 4, 5, 10000.44, 6);

// ВАЖНО 🔥🔥🔥 
// В нестрогом режиме, массив arguments[] и имена параметров - это два разных средства обращения к одним и темже переменным
// Изменения аргумента через имя аргумента меняет значение, извлекаемое arguments[] и наоборот.
// Чтобы избежать этого, использую режим "use strict"

  function f2(x) {            // f2(3);
    // 💩 в режиме "use strict" -> false
    console.log(x);           // x -> 3
    arguments[0] = null;      // x = null
    console.log(x);           // x -> null
  }
  
//📣 3️⃣ Использование свойств объекта в качестве аргументов
// Когда функция имеет больше трех параметров и трудно запомнить порядок их следования можно предусмотреть возможность передачи
// аргументов в виде пар имя/значение в произвольном порядке. Для этого при определении функции следует предусмотреть передачу
// объекта в качестве единственного аргумента

  function arrayCopy(/*массив*/ from, /*индекс*/ from_start,      //👈 запомнить порядок довольно сложно
                     /*массив*/ to,   /*индекс*/ to_start,
                     /*целое*/  length){
  /*тело функции*/
  };

  function easyCopy(args) {arrayCopy(args.from, args.from_start || 0,
                                     args.to,   args.to_start || 0,
                                     args.length)
  /*тело функции*/                                  
  };
  
  // далее следует пример вызова функции easyCope();
  let aa = [1, 2, 3, 4], bb = [];
  easyCopy({from: aa, to: bb, length: 4});

//📣 4️⃣ Типы аргументов
// Если функция должны вызываться чаще, чем один-два раза, следует добавить проверку соответствия типов аргументов.

// Все элементы массива должны быть числовыми, при этом значения null и undefined игнорируются
  function sum(a) {
    if (Array.isArray(a)) {
      let total = 0;
      for (let i = 0; i < a.length; i++) {
        let element = a[i];
        if (element == null) continue;
        if (isFinite(element)) total += element;
        else throw new Error ('sum(): все элементы должны быть числами');
      }
      return total;
    }
    else throw new Error ('sum(): аргумент должен быть массивом');
  };

// Принимает любое число входных аргументов и рекурсивно обрабатывает те их ни, которые являются массивами
  function flexSum(a) {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
      let element = arguments[i], n;
      if (element == null) continue;
      if (Array.isArray(element))
        n = flexSum.apply(this, element);
      else if (typeof element == 'function')
        n = Number(element());
      else n = Number(element);
      if (isNaN(n))
        throw Error (`flexSum(): невозможно преобразовать ${element} в число`);
      total += n;
    }
    return total;
  }

  // ВАЖНО 🔥🔥🔥  
  let aaa = [1, 2, [1, 2], 4];        //👈 flexSum(aaa) -> 10; sum(aaa) -> Error: sum(): все элементы должны быть числами
  let aaaa = [1, 2, [1, 2],{}, 4];    //👈 flexSum(aaa) -> Error: flexSum(): невозможно преобразовать [object Object] в число

console.clear();
//4.Функции как данные
//📣 Функции в языке JavaScript - это не только статические конструкции, но и данные, а это означает, что они могу 
// 1️⃣присваиваться переменным, 2️⃣храниться в свойствах объектов (методы) или 3️⃣элементах массивов, 4️⃣передаваться как аргументы функциям и т.д.

//📣 1️⃣ Присваиваться переменным

  function squareOne(x) { return x * x};
  let s = squareOne;                        //👈 ВАЖНО 🔥🔥🔥 БЕЗ СКОБОК, иначе -> let s = squareOne() -> TypeError: s is not a function
  
  console.log(squareOne(3));
  console.log(s(3));

//📣 2️⃣ Храниться в свойствах объектов

  let obj = {
    square: function(x){return x * x},
  };
  let j = obj.square(4);
  
  console.log(obj.square(4));
  console.log(j);

//📣 3️⃣ Храниться в элементах массивов в безымянном виде🔥

let arr = [function(x){return x * x}, 20];

console.log(arr[0](arr[1]));                //👈 ВАЖНО 🔥🔥🔥 -> выражение вызова
console.log(arr[0](obj.square(4)));         //👈 ВАЖНО 🔥🔥🔥 -> выражение вызова

//📣 4️⃣ Aргумент функций (использование функции как данных) вар выше 😄

  function add(x, y) { return x + y };
  function substract (x, y) { return x - y };
  function multiply (x, y) { return x * y };
  function divide (x, y) { return x / y };

// Эта функция принимает одну из предыдущих функций в качестве аргумента и вызывает ее с двумя операндами🔥🔥🔥
  function haveFun(operate, operand1, operand2) {
    console.log(typeof operate);
    return operate(operand1, operand2);
  };

  let fun = haveFun(add, haveFun(add, 2, 3), haveFun(multiply, 4, 5));

// Пример реализации этих функций снова, на этот раз с помощью литералов функции внутри литерала объекта 🔥🔥
  let operatorsObj = {
      add:        function add(x, y) { return x + y },
      substract:  function substract (x, y) { return x - y },
      multiply:   function multiply (x, y) { return x * y },
      divide:     function divide (x, y) { return x / y },
      pow: Math.pow                                         //👈 можно использовать даже предопределенные функции
  }

// Функция принимает имя оператора, отыскивает оператор в объекте, а затем вызывает его с указанным операндом
  function haveFun2 (operatorsObj, operation, operand1, operand2){
    if (typeof operatorsObj[operation] === "function")
      return operatorsObj[operation](operand1, operand2);
    else throw "неизвестный оператор";
  }


// ВАЖНО 🔥🔥🔥 в примере ниже имена свойств передавать как "String" иначе undefined🔥🔥🔥
  let fun2 = haveFun2(operatorsObj, "add", haveFun2(operatorsObj, "add", 2, 3), haveFun2(operatorsObj, "multiply", 4, 5));    

// Вычислить значение ("hello" + " " + "world")
  let jj = haveFun2(operatorsObj, "add", "hello", haveFun2(operatorsObj, "add", " ", "world"));       //👈 -> "hello world"
  console.log(jj);
  let kk = haveFun2(operatorsObj, "pow", 10, 2);
  console.log(kk);
console.clear();

//4.1 Определение собственных свойств функции
//📣 Функции в JS являются не простыми значениями, а осоьой разновидностью объектов, благодаря чему могут иметь свойства.
//📣 Например, если требуется статическая переменная, значение которой должно сохраняться между вызовами, удобно сохранять ее в
// свойство объекта функции, чтобы не занимать пространство имен определениями глобальных переменных

  // Инициализировать свойство counter объекта функции.
  // Объявления функций поднимаются вверх, поэтому можно выполнить присваивание до объявления функции
  uniqueInteger.counter = 0;

  // Эта функция возвращает разные целые числа при каждом вызове
  // Для сохранения следующего возвращаемого значения она использует собственное свойтво
  function uniqueInteger() {
    return console.log(uniqueInteger.counter++)
  }

  // Пример рекурсивной функции 
  // Вычисляет факториал и сохраняет результат в собственных свойствах
  function factorial(x) {                                                 //👈 рекурсивная функция (вызывющая сама себя) 
    if (isFinite(x) && x > 0 && x == Math.round(x)){
      if (!(x in factorial)) {
        if (x <= 1) return 1;
          factorial[x] = x * (factorial(x - 1));                          //👈 значение переменной "x" сохраняется в свойстве функции
        return factorial[x];
      }
    }
    else return NaN;
  }  

//5 Функции как пространства имен
//📣 Идея состоит в том, чтобы поместить программный код модуля в функцию и затем вызывать эту функцию.
// При таком подходе переменные модуля из глобальных превратятся в локальные переменные функции

  function myModule() {
    // здесь любые глобальные переменные превратятся в локальные
    let a = 4;
    return console.log(`a = ${a}`);
  }
  myModule();                                    //👈 единственная глобальная переменная

// Если даже единственное имя это слишком много, можно определить и вызвать анонимную функцию в одном выражении

  (function(){
    let a = 4;
    return console.log(`a = ${a}`);
  }())

// Демонстрация практического приема создания пространства имен
  
  let extend = (function() {
    // Сначала проверить наличие ошибки, прежде чем исправлять ее
    for (let p in {toString:null}) {
      // Если оказались здесь, значит цикл for/in работает корректно
      // и можно вернуть простую версию функции extend()
      return function extend(o) {
        for (let i = 0; i < arguments.length; i++) {
          let source = arguments[i];
          // Скопировать все перечислимые свойства
          for (let property in source)
            o[property] = source[property];
        }
        return o;
      };
    }
    // Если мы оказались здесь, то цикл for/in не перечислил свойтсво toString тестового объекта
    // Поэтому необходимо вернуть версию extend(), которая явно проверяет неперечислимость свойств прототипа Object.prototype
    // Список свойств, которые необходимо проверить
    let protoprops = ["toString", "valueOf", "constructor", "hasOwnProperty", 
                      "isPrototypeOf", "propertyIsEnumerable", "toLocaleString"];
    return function patched_extend(o) {
      for (let i = 0; i < arguments.length; i++) {
        let source = arguments[i];
        // Скопировать все перечислимые свойства
        for (let property in source)
            o[property] = source[property];
        for (let j = 0; j< protoprops.length; j++) {
          prop = protoprops[j];
          if (source.hasOwnProperty(prop)) {
            o[prop] = source[prop]
          };
        }
      }
      return o;
    }
  }()); 