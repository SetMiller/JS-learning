// "use strict"
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
// ******************************************* ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ ************************************************ //

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

  // (function () {                               //👈 самовызывающаяся анонимная функция
  //   var a = v = 4;                             //👈 объявление переменной "а" в области видимости func() и "v" в 
  //                                              //  области видимости Window, в режиме "use strict" -> true будет ошибка "v" is not defined
  //   console.log(a);                            //👈 "а" => 4 (local scope)
  //   console.log(v);                            //👈 "v" => 4 (global scope)
  // }());
  // // console.log(a);                           //👈 "а" => "a" is not defined (function () local scope)
  // console.log(v);                              //👈 "v" => 4 || Window.v => 4
    
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
  //👆 Если вы хотите сослаться на текущую функцию внутри тела этой функции, вам необходимо создать именованое функциональное выражение.
  // var square = { 'math': function (x) {  
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

  // либо
  function square2(x){return x*x};
  function hyp(a,b){return Number(Math.sqrt(square(a) + square(b)).toFixed(2));}
// ******************************************* ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ ************************************************ //

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

  // Можно уйти еще на уровень ниже
  function trust1() {
    let self = this;
    f();
    function f() {
      let underSelf = self;
      g();
      function g() {
        console.log(underSelf === o2);          //👈 => true
      };
    };
  };

  // вызвать функцию как метод объекта м2
  trust1.call(o2);                              //👈 => true
  
  // Получить значение через вложенную функцию в методе объекта
  // Вариант 1 -> используя return -> нет необходимости вызывать функцию в теле trust2
  function trust2(){
    let self = this;
    function f() {return self.x;};
    return f();
  };

  // Вариант 2 -> без использования return -> необходимо вызывать функцию в теле trust3
  function trust3(){
    let self = this;
	  f();
    function f() {console.log(self.x);};
  };

  // Вариант 3 -> используя return -> нет необходимости вызывать функцию в теле trust3
  function trust4(){
    let self = this;
    function f() {console.log(self.x);};
    return f();
  };

  // вызвать функцию как метод объекта м2
  trust2.call(o);                                //👈 => 20

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
  // Вариант 1 -> 1 level - Замыкание
  let scope3 = "global";
  function constructFunction() {
    let scope3 = "local";
    function f(){return scope3};                        //👈 scope3 => "local"
    return f();
  };

  // Вариант 2 -> 2 level - Замыкание
  function constructFunction() {
    let scope3 = "local";
    function f(){
      let scope3 = "nested scope";
      function nested(){
         return scope3;
      };                        
      return nested();
    };                       
    return f();                                       //👈 scope3 => "nested scope"
  };

console.clear();
// ******************************************* ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ ************************************************ //

//3.Аргументы и параметры
//📣 Функции в языке JavaScript при определении и вызове функций не указываются типы параметров, не выполняются проверки типов передаваемых
// значений аргументов, не проверяется даже количество аргументов.

//📣 1️⃣ Необязательные аргументы
// Когда число аргументов в вызове функции меньше числа объявленных параметров, недостающие аргументы получают значение undefined
// Часто бывает удобно 🔥 писать функции так, чтобы некоторые аргументы были необязательными и могли опускаться при вызове функции.

// ВАЖНО 🔥🔥🔥
// При объявлении функции необязательные аргументы должны завершать список аргументов, чтобы их можно было опустить
  function getPropertyNames (obj, /* необязательный */ arr) {
    // if (arr === undefined) arr = [];                   //👈 если массив не определен => создать новый массив
    arr = arr || [];                                      //👈 вместо инструкции "if" можно использовать оператор "||" след. образом
    for (var prop in obj) arr.push(prop);                 //👈 добавить все перечислимые свойства в массив
    return arr;                                         //👈 вернуть массив
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
// ******************************************* ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ ************************************************ //

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
  function substract(x, y) { return x - y };
  function multiply(x, y) { return x * y };
  function divide(x, y) { return x / y };

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
// ******************************************* ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ ************************************************ //

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
console.clear();
// ******************************************* ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ ************************************************ //

//6 Замыкания🔥🔥🔥
//📣 A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain🔥. 
// The closure has three scope chains: 1️⃣it has access to its own scope (variables defined between its curly brackets), 
// 2️⃣it has access to the outer function’s variables, and 3️⃣it has access to the global variables.

  // Пример 1.
  let scopeClosure = "global scope";
  function checkScope() {
    let scopeClosure = "local scope";
    function f(){return console.log(`scopeClosure = ${scopeClosure}`)}
    return f;
  }
  // 1 вариант вызова замкнутой функции
  checkScope()();                                 //👈 таким способом вызывается вторая безымянная функция
  // 2 вариант вызова замкнутой функции
  let newCheckScope = checkScope();       
  newCheckScope();

  // Пример 2.
  function makeGreeting(){
    let myName = 'Alex';
    function greeting(personName){
      return console.log(`Hello, ${personName}! My name's ${myName}.`);
    };
    return greeting;
  }
  // 1 вариант вызова замкнутой функции
  makeGreeting()('Dave');        //👈 таким способом вызывается вторая функция greeting() с аргументом greeting('Dave');
  // 2 вариант вызова замкнутой функции
  let newGreeting = makeGreeting();
  newGreeting("Dave");

  // Пример 3.
  function myName(firstName, lastName){
    let greet = "Hello ";
    function fullName() {
      return (`${greet} ${firstName} ${lastName}`); 
    }
    return fullName();
  }
  myName("Rafael", "Solomko");

  // Пример 4.
  function myName2(firstName, lastName){
      let greet = "Hello";
      return {
        get greeting() {return (`${greet} ${firstName} ${lastName}`);},
      }
    }
  let cc2 = myName2("Rafael","Solomko");
  cc2.greeting;

  // Пример 5.
  function celebrityName(firstName) {
    var nameIntro = "This celebrity is ";
    // this inner function has access to the outer function's variables, including the parameter
    function lastName(theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }
    return lastName;
  }
  // var mjName = celebrityName ("Michael"); // At this juncture, the celebrityName outer function has returned.
  // The closure (lastName) is called here after the outer function has returned above
  // Yet, the closure still has access to the outer function's variables and parameter
  // mjName ("Jackson"); // This celebrity is Michael Jackson
  // console.log(namesOf);
  let rsName = celebrityName("Rafael");
  console.log(`${rsName("Solomko")}`);
  let rsName2 = celebrityName("Rafael")("Solomko");
  console.log(`${rsName2}`);

  // ВАЖНО 🔥🔥🔥 SCOPE -> область видимости функции и CLOSURE -> замыкание
  let abc = 123;
  function foo1() {
    let abc = 234;
    function foo2() {
      // let abc = 345;                                 //👈 вернет abc = 345
      return console.log(`abc foo2() = ${abc}`);
    }
    foo2();                                             //👈 вернет abc = 234
    return console.log(`abc foo1() = ${abc}`);
  }
  foo1();                                               //👈 вернет abc = 123
  console.log(`abc global = ${abc}`);

  //📣 Замыкания запирают локальные переменные в объекте вызова функции и могут использовать эти переменные
  // для хранения частной информации.
  // Пример реализации функции uniqueInteger() с использованием замыкания
  let uniqueIntegerClosure = (function(){               //👈 Определение и вызов
                                let counter = 0;        //👈 Частное значение для функции ниже
                                function hello() {
                                  return counter++;
                                }
                                return hello;
                              }());


 //📣 Скрытые переменные, такие как counter, не являются исключительной собственностью единственного замыкания,
 // в одной и той же внешней функции вполне возможно определить две или более сложенных функций, которые будут
 // совместно использовать одну цепочку областей видимости
  function counter() {                                //👈 обрати внимание на вариант -> counter(n)
    let n = 0;                                        //👈 передавать начальный аргумент напрямую в функцию -> //  let n = 0;
    return {
      count: function() { return n++},
      reset: function() { n = 0 },
    };
  }; 

  let c = counter();                                   //👈 инициализация начального значения -> let c = counter(10); 
  let d = counter();                                   //👈 Способ вызова 🔥🔥🔥
  d.count();                                           //👈 -> 0
  d.count();                                           //👈 -> 1
  d.reset();                                           //👈 -> 0

//📣 Версия функции counter() является вариацией примера, представленного в разделе 6.6, но здесь для хранения
// скрытой информации вместо обычного свойства объекта используются замыкания
// ВАЖНО 🔥🔥🔥 эта версия функции не объявляет локальную переменную. Для сохранения информации используется параметр
// "n", доступный обоим методам доступа к свойству. Это позволяет программе, вызывающей counterUpdate(n), определять
// начальное значение скрытой переменной. 
  function counterUpdate(n) {
    return {
      get count() { return n++ },
      set count(m) {
        if (m > n) n = m;
        else throw Error('значение счетчика нельзя уменьшить');
      },
    };
  };

  let cc = counterUpdate(5);                            //👈 инициализация начального значения 
  let dd = counterUpdate(2);                            //👈 Вызов d.count; d.count = 2;🔥🔥🔥 <- без скобок !!!!
  dd.count;                                             //👈 -> 2
  dd.count;                                             //👈 -> 3
// dd.count = 2;                                      //👈 -> Error: значение счетчика нельзя уменьшить
//console.clear();

// Демонстрация обобщения приема совместного использования скрытой информации в замыканиях
//📣 Пример определяет функцию addPrivateProperty(), которая определяет скрытую переменную и две вложенные функции
// для чтения и записи значения этой переменной.
// Она добавляет эти вложенные функции как методы в указанный вами объект
  function addPrivateProperty(o, name, predicate) {
    // Это значение свойства
    let value;
    // Метод чтения просто возвращает значение
    o["get" + name] = function() {return value;};      //👈 3️⃣ Вызов значения скрытой переменной (Closure var)
    // Метод записи сохраняет значение или возбуждает исключения, если функция проверки отвергает это значение
    o["set" + name] = function(v) {                    //👈 1️⃣ Передача аргумента функции -> obj1.setname("Frank");
      if (predicate && !predicate(v)) 
        throw Error(`Object[set${name}](): недопустимое значение -> "${v}", должно быть "string"!!!`);
      else
        value = v;                                    //👈 2️⃣ Запись аргумента в скрытую переменную (Closure var)
    };
  };

  let obj1 = {};
  addPrivateProperty(obj1, "name", function(x) {return typeof x == 'string';});
  obj1.setname("Frank");
  obj1.getname();
console.clear();

// Пример правильного и ошибочного использования замыкания
// 1. вариант (неправильно😔) НЕ ВИЖУ РАЗНИЦЫ В РЕЗУЛЬТАТАХ🐙🐙 примера 1.
// пример 1.
// Возвращает массив функция, возвращающих значения 0-9
  function constFuncs() {
    let funcs2 = [];
    for(let i = 0; i < 10; i++) {
      funcs2[i] = function() {return i};
    }
    return funcs2;
  };
  let funcs2 = constFuncs();
  funcs2[5]();                                          //👈 -> 5

// пример 2.
  function celebrityIDCreator (theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
      theCelebrities[i]["id"] = function ()  {
        return uniqueID + i;
      }
    }
    
    return theCelebrities;
  }
  var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];
  var createIdForActionCelebs = celebrityIDCreator (actionCelebs);
  var stalloneID = createIdForActionCelebs [0];
  console.log(stalloneID.id()); // 103

// 2. вариант (правильно😄)
// пример 1.
// эта функция возвращает функцию, которая всегда возвращает "v"
// function constFunc(v) { return function() {return v}};
// // создать массив функций-констант
// let funcs = [];
// for(let i = 0; i < 10; i++) {                         //получаем массив funcs = [ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ]
//   funcs[i] = constFunc(i);                            //аналогично funcs[i] = i и вызов funcs[5]
// };
// // функция в элементе массива с индексом 5 возвращает 5
// funcs[5]();                                           //👈 -> 5

// пример 2.
  function celebrityIDCreator2 (theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
        // Recall that theCelebrities now has the value of [{name:”Stallone”, id:0}, {name:”Cruise”, id:0}, {name:”Willis”, id:0}]
        // The first set of square brackets, theCelebrities[i], calls an object by its array position. 
        // If i = 0 then theCelebreties[i] is equal to the first object in the array, in this case, {name:”Stallone”, id:0}.
        // The second set of brackets, [“id”], call that object’s property by its name “id” .
        // The rest of the statement “= function(j){….}(i)” simply reassigns the value of the property 
        // (function(a){console.log(`самовызывающаяся функция c 1 в качестве аргумента ${a}`);}(1));🔥🔥🔥
        // “id” from “0” to the return of the function.
        // On the macro level {name:”Stallone”, id:0} becomes {name:”Stallone”, id:100}.

        // the j parametric variable is the i passed in on invocation of this IIFE
        theCelebrities[i]["id"] = function (j)  {         
            return function () {
                // each iteration of the for loop passes the current value of i into this IIFE and 
                // it saves the correct value to the array
                return uniqueID + j;     
            // BY adding () at the end of this function, we are executing it immediately 
            // and returning just the value of uniqueID + j, instead of returning a function.                 
            } () 
        // immediately invoke the function passing the i variable as a parameter
        } (i); 
    }
    return theCelebrities;
  }
  var actionCelebs = [{name:"Sigal", id:0}, {name:"Shvarts", id:0}, {name:"Carry", id:0}];
  var createIdForActionCelebs = celebrityIDCreator2 (actionCelebs);
  var sigalID = createIdForActionCelebs [0];
  console.log(sigalID.id); // 100
  var carryID = createIdForActionCelebs [1];
  console.log(carryID.id); // 101


// ВАЖНО 🔥🔥🔥 -> "this"
// Чтобы вложенные функции получили доступ к значению "this" внешней функции, следует сохранить значение "this"
// в переменной для использования во вложенной функции
  function makeGreeting2(){
    let myName = 'Alex';
    let selfThis = this;
    function greeting(personName){
      return console.log(`Hello, ${personName}! My name's ${myName}.`);
    };
    return greeting;
  }

//TODO: проанализировать и запомнить примеры определения контекста вызова функции
// вариант 1. Контекст вызова - объект "Window" 
// работает в нестрогом режиме👆👆👆, при объявлении переменной через "var" 
  var glob = 55;
  function getThis() {
    return console.log(`${this.innerWidth}pix`);              //👈 this.glob -> 55
  }
  getThis();
// document.writeln(getThis());

// вариант 2. Контекст вызова - метод объекта -> функция внутри объекта
  let person = {
    name: "Bully - пример 2",
    surname: "HAHA - пример 2",
    getThis: function () {return console.log(this.name)},
    getSelf: function () {
      let self = this.surname
      return console.log(self);
    }
  }
  person.getThis();
  person.getSelf();

// вариант 3. Контекст вызова - установка контекста вызова - объект "person2" -> функция отдельная от объекта
  let person2 = {
    name: "LOLLYPOP - пример 3"
  }
  function getIt() {
    return console.log(this.name);              
  }
  person2.getName = getIt;                                    //👈 добавляем объекту "person2" метод getName: getIt()
  person2.getName();                                          //👈 this.name -> LOLLYPOP

// вариант 4. Контекст вызова - изменение контекста вызова - объект "anotherPerson" -> функция отдельная от объекта
  let person3 = {
    name: "Qully - пример 4",
    surname: "HAHA",
    getThis: function () {return console.log(this.name)},
  }

  let anotherPerson = {
    name: "Molly - пример 4",
    x: 4,
  }

  anotherPerson.takeIt = person3.getThis;
  anotherPerson.takeIt();

// вариант 5. Контекст вызова - изменение контекста вызова с помощью "call"🐴 и "apply"🐮
  function yes(x) {
    return console.log(`пример 5: this.name -> ${this.name} x * x = ${x * x}`);
  }
  
  yes.call(person);                                     //👈 this.name -> Bully - пример 2 x * x = NaN
  yes.call(person2);                                    //👈 this.name -> LOLLYPOP - пример 3 x * x = NaN
  yes.call(anotherPerson, 4);                           //👈 this.name -> Molly - пример 4 x * x = 16
  yes.apply(anotherPerson, [3]);                        //👈 this.name -> Molly - пример 4 x * x = 9

//TODO: рассмотреть как работает метод "call", "apply", "bind" и разобраться со стрелочными функциями
// В стрелочных функциях нет своего this. Внутри них this ссылается на контекст внешней функции. 
// То есть, если в этом коде внутри функции sayHello  вы объявите какую-то стрелочную функцию, 
// то ее this будет таким же как и this у sayHello - объект person.
// 
// 
// 

// ВАЖНО 🔥🔥🔥 -> "arguments"
// Поскольку замыкания при вызове получают собственный объект "arguments", они не могу обращаться к массиву аргументов
// внешней функции, если не сохранить этот массив в переменной с другим именем
  function makeGreeting3(){
    let myName = 'Alex';
    let selfArguments = arguments;
    function greeting(personName){
      return console.log(`Hello, ${personName}! My name's ${myName}.`);
    };
    return greeting;
  }

// ВАЖНО 🔥🔥🔥 -> самовызывающаяся функция
// Вариант 1.
  (function(a, b){
    console.log(a+b);
  })(22,22);

// Вариант 2.
  (function(a, b){
    console.log(a+b);
  }(33,33));

console.clear();
// ******************************************* ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ ************************************************ //

//7 Свойства и методы функций и конструктор Function
// 1️⃣ Свойство length
// В теле функции свойство arguments.length определяет количество аргументов, переданных функции. Однако свойство length
// самой функции имеет иной смысл. Это свойство, доступное только для чтения, возвращает количество аргументов, которое
// функция 🔥ожидает🔥 получить - число объявленных параметров

// Пример
  // функция использует arguments.callee, потому не будет работать в строгом режиме🔥🔥🔥
  function check(args) {
    let actual = args.length;                           //👈 фактическое число аргументов
    let expected = args.callee.length;                  //👈 ожидаемое число аргументов
    if (actual !== expected) {                          //👈 если не совпадают, генерируется исключение
      throw new Error("ожидается: " + expected + "; получено: " + actual);
    }
    else {
      console.log(actual);
      console.log(expected);
    }
  }

  function f(x, y, z) {
    // Проверить число ожидаемых и фактических переданных аргументов
    check(arguments);
    // Теперь выполнить оставшуюся часть функции как обычно
    return x + y+ z;
  }
  f(1, 2, 3);                                           //👈 -> 6
  // f(1, 2);                                           //👈 -> Error: ожидается: 3; получено: 2

// 2️⃣ Свойство prototipe
// Любая функция имеет свойство prototipe, ссылающееся на объект, известный как объект прототипа.
// Каждая функция имеет свой объект прототипа. Когда функция используется в роли конструктора, вновь созданный
// объект наследует свойства этого объекта прототипа.

// 3️⃣ Методы call()🐶 и apply()🐱
// Методы call() и apply() позволяют выполнять косвенный вызов функции, как если бы она была методом некоторого другого объекта
// Первым аргументом обоим методам передается объект, относительно которого вызывается функция
// Этот аргумент определяет контекст вызова и становится значением ключевого слова this в теле функции.

// Метод call() -> аргументы передаются списком🐶
// 15.3.4.4 Function.prototype.call (thisArg [ , arg1 [ , arg2, … ] ] )💎
// When the call method is called on an object func with argument thisArg and optional arguments arg1, arg2 etc. 

// Метод apply() -> аргументы передаются массивом🐱
// 15.3.4.3 Function.prototype.apply (thisArg, argArray)💎
// When the apply method is called on an object func with arguments thisArg and argArray

  function f2(z) {
    // Проверить число ожидаемых и фактических переданных аргументов
    check(arguments);
    // Теперь выполнить оставшуюся часть функции как обычно
    return console.log(this.x + this.y+ z);
  }

  f2.call(o, 10);         //👈 f(thisArgs, ...argsArray) -> 60
  f2.apply(o, [20]);      //👈 f(thisArgs, ...argsArray) -> 60

  // Эти вызовы эквивалентны следующим
  // o.m = f2();
  // o.m(10);
  // delete o.m;

// В строгом режиме ECMAScript 5 первый аргумент методов call()🐶 и apply()🐱 становится значением this
// даже если это простое значение, null или undefined
// В ECMAScript 3 и в нестрогом режиме значения null и undefined замещаются глобальным объектом, а простое
// значение - соответствующим объектом-оберткой

  let biggest = Math.max.apply(Math, aa);

  // Пример
  // Функция trace() принимает объект и имя метода
  // Она замещает указанный метод новым методом, который "обертывает" оригинальный метод доп. функциональностью
  function trace(o, m) {
    // сохранить оригинальный метод в замыкании
    let original = o[m];
    // определить новый метод
    o[m] = function() {
      console.log(newDate(), "Entering:", m);                 //записать сообжение | неясно назначение newDate()😔
      let result = original.apply(this, arguments);           //вызвать оригинал
      console.log(newDate(), "Exiting:", m);                  //записать сообщение | неясно назначение newDate()😔
      return result;                                          //вернуть результат
    };
  }

// 4️⃣ Методы bind()🐭
// Метод bind() впервые появился в ECMAScript 5, но его легко имитировать в ECMAScript 3
// Основное назначение метода bind() -> связать функцию с объектом.
// 15.3.4.5 Function.prototype.bind (thisArg [, arg1 [, arg2, …]])💎
// The bind method takes one or more arguments, thisArg and (optionally) arg1, arg2, etc, and returns a new function object
// Если вызвать метод bind() функции f4() и передать ему объект "о", он вернет новую функцию
// Вызов новой функции выполнит вызов оригинальной функции f4() как метода объекта "о"💎💎💎
  // пример:
  function f4(y) {return this.x + y};                       //👈 функция, которую требуется привязать
  let o3 = {x: 20};                                         //👈 объект, к которому выполняется привязка
  let g3 = f4.bind(o3);                                     //👈 вызов "g3" вызовет o.f4(y)
  console.log(g3(10));                                      // -> 30

  // Имитация метода bind() с проверкой на наличие варианта метода ECMAScript 5
  function bind (f, o) {
    // Проверяем наличие мотода bind()
    if (f.bind) return f.bind(o);                           //👈 использовать метод, если имеется
    // Возвращаемое значение метода bind() -> функция
    else return function () {                               //👈 иначе связать, как показано ниже
      return f.apply(o, arguments);
    };
  }
  let g4 = bind(f4, o3);
  console.log(g4(5));                                       // -> 25

  // Имитация метода bind() без проверки на наличие варианта метода ECMAScript 5
  function bind2 (f, o) {
    // Возвращаемое значение метода bind() -> функция
    return function() {
      return f.apply(o, arguments)}
  };

  let g5 = bind2(f4, o3);

// Метод bind() не просто связывает функции с объектом. Он также выполняет частичное применение: помимо значения this связаны будут
// все аргументы, переданные методу bind() после первого аргумента. Частичное применение - распространенный прием в функциональном программировании
// и иногда называется каррингом (curring)

  // пример:
  let sumNew = function (x, y) {return x + y};
    // создать новую функцию, подобную sum, но со связанным значением null
    // ключевого слова this и со связанным значением первого аргумента, равным 1.
    // новая функция принимает всего один аргумент.
  let succ = sumNew.bind(null, 1);                          // this -> null
  console.log(succ(10));                                    // y => 10 -> return 1 + 10 = 11
  
  // пример:
    function f(y, z) {
      return this.x + y + z;
    };
    
  let g6 = f.bind(o3, 20);                                  // this -> o3
  // let g6 = f.bind({x:20}, 20);                           // явно передаем безымянный объект со свойством "x:20"
  console.log(g6(10));                                      // z => 10 -> return 20 + 20 + 10

// Если метод bind() отсутствует, его можно имитировать программным кодом, который сохраняется как Function.prototype.bind, благодаря чему
// все функции наследуют его
  if (!Function.prototype.bind) {
    Function.prototype.bind = function(o /*, аргументы*/) {
      // Сохранить this и arguments в переменных, чтобы их можно было использовать во вложенной функции ниже
      let self = this;
      let boundArgs = arguments;
      // Возвращаемое значение метода bind() -> функция
      return function() {
        // Сконструировать список аргументов, начиная со второго аргумента
        // метода bind, и передать все эти аргументы указанной функции.
        let args = [], i;
        for (i = 1; i < boundArgs.length; i++) args.push(boundArgs[i]);
        for (i = 0; i < arguments.length; i++) args.push(arguments[i]);
        return self.apply(o, args);
      };
    };
  };

// 5️⃣ Метод toString()
// На практике большинство (но не все) реализаций метода toString() возвращают полный исходный текст функции.

// 6️⃣ Конструктор Function()
// The function call Function(…) is equivalent to the object creation expression new Function(…) with the same arguments.
// 15.3.1.1 Function (p1, p2, … , pn, body)

  let ff = new Function("x", "y", "return x * y;");           // объявление через конструктор new Function(…)
  let ff2 = function(x, y) {return x * y};                    // они более менее эквивалентны

  // отличия:
  // 1. Динамическое сохдание и компиляция, в процессе выполнения программы
  // 2. При каждом вызове конструктор Function() выполняет синтаксический анализ тела функции и создает новый объект функции
  // 3. Не учитывается лексическая область видимости -> функция всегда компилируется как глобальные функции
    // пример
    let scopeNewFunc = "global scope";
    function constructFunction() {
      let scopeNewFunc = "local scope";
      return new Function("return scopeNewFunc");             // Здесь не используется глобальная область видимости
    };
    // следующая строка вернет "global scope", потому что функция, возвращаемая конструктором является глобальной🔥🔥🔥

// 7️⃣ Вызываемые объекты
// Вызываемый объект -> это любой объект, который может быть вызван в выражении вызова функции.
// Все функции являются вызываемыми обхектами, но не все вызываемые объекты являются функциями.
// Если требуется определить, является ли объект настоящим объектом функции, сделать это можно определив значение атрибута class🔥🔥🔥
    // 
    function isFunction(x) {
      // Для функций возвращает Function
      return Object.prototype.toString.call(x).slice(8, -1);

      // Либо Boolean проверка (true/false)
      // return Object.prototype.toString.call(o) === "[object Function]"
    };

    isFunction(ff)                                            // Function -> true
console.clear();
// ******************************************* ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ ************************************************ //

// 8 Функциональное программирование
// 1️⃣ Обработка массивов с помощью функций
    // Необходимо найти среднее значение и стандартное отклонение для этих значений
    // пример 1. 💩 без использования функционального программирования
      let data = [1, 1, 3, 5, 5];
      // Cреднее значение
      let newTotal = 0;
      for (var i = 0; i < data.length; i++) {
        newTotal += data[i];
      };
      let mean = newTotal / data.length;                      // Среднее значение -> 3
      console.log(`mean = ${mean}`);

      // Cтандартное отклонение -> необходимо вычислить сумму квадратов отклонений элементов от среднего
      newTotal = 0;
      let deviant = 0;
      for (var i = 0; i < data.length; i++) {
        deviant = data[i] - mean;
        newTotal += deviant * deviant
      };
      let stdDev = Math.sqrt(newTotal / (data.length - 1));   // Стандартное отклонение -> 2
      console.log(`stdDev = ${stdDev}`);
    
      // пример 1. 💎 с использованием функционального программирования задействовам методы массивов map() и reduce()
        // Для начала необходимо определить две простые функции
        let newSum = function(x, y) {return x + y};           
        let newSquare = function(x) {return x * x};

        // Затем использовать их совместно с методами класса Array для вычисления средрего значения и стандартного отклонения
        let newData = [1, 1, 3, 5, 5];
        let newMean = newData.reduce(newSum, 0)/newData.length;                                           // Среднее значение -> 3
        console.log(`newMean = ${newMean}`);
          // Массив [1, 1, 3, 5, 5] -> [-2, -2, 0, 2, 2]
        let deviations = newData.map(function(x) {return x - newMean});   
          // Массив [-2, -2, 0, 2, 2] -> [4, 4, 0, 4, 4] ->   
        let newStdDev = Math.sqrt(deviations.map(newSquare).reduce(newSum) / (newData.length - 1));       // Стандартное отклонение -> 2  
        
// 2️⃣ Функции высшего порядка -> (Ф.В.П.)
// 📣 Ф.В.П. -> это функции, которые оперируют функциями, принимая одну или более функций и возвращая новую функцию
  // Пример 1.
  // Ф.В.П. возвращает новую функцию, которая передает свои аргументы функции "f" и возвращает логическое отрицание значения
  function not(f) {
    return function() {                                       // возвращает новую функцию
      let result = f.apply(this, arguments);                  // вызов "f"
      return !result;                                         // инверсия результата
    };
  };

  let even = function(x) {return x % 2 === 0};                // функция определяющая четность числа
  let odd = not(even);
  console.log([1, 1, 3, 5, 5].every(odd));                    // true => все элементы массива нечетные

    // Пример 2.
    // Функция mapper() -> принимает функцию ввиде аргумента и возвращает новую, которая отображает один массив в другой, применяя
    // указанную функцию.
    // Данная функция использует функцию map(), которая определена ниже
    function map(a,f) { 
      var results = [];
      for(var i = 0, len = a.length; i < len; i++) {
        if (i in a) results[i] = f.call(null, a[i], i, a);
      }
      return results;
    };

    function mapper(f) {
      return function(a) { return map(a,f)}
    };

    let increment = function(x) {return x + 1;};
    let incrementer = mapper(increment);
    console.log(incrementer([1, 2, 3]))                           // -> [2, 3, 4]

    // Пример 3.
    // Пример более универсальной функции, которая вычисляет f(g(...)). Возвращаемая функция "h" передает все свои агрументы
    // функции "g", затем передает значение, полученное от "g", функции "f", и возвращает результат вызова "f"
    // Обе функции с теме же значениями this, что и "h"
    function compose(f, g) {
      return function() {
        // для вызова "f" используется call(), т.к. ей передается удинственное значение
        // для вызова "g" используется apply(), т.к. ей передается массив значений
        return f.call(this, g.apply(this, arguments));
      };
    };

    let squareOfSum = compose(newSquare, newSum);   // Сначала выполняется g.apply() -> newSum; затем f.call() -> newSquare
    console.log(squareOfSum(2,3))                   // (2, 3) -> (2 + 3) -> (5 * 5) -> 25


//TODO:
// 3️⃣ Частичное применение

// 4️⃣ Мемоизация
// Ранее была определена функция нахождения факториала, которая сохраняет ранее вычесленные результаты
// В функциональном программировании такого рода кэширование называется мемоизацией(memorization)
  // Пример
  // Ф.В.П. принимает функцию и возвращает ее версию с возвожмонтью кэширования
  function memoize(f) {
    // кэш значений сохраняется в замыкании
    let cache = {};
    return function() {
      // создать строковую версию массива arguments для использования в качестве ключа кэша
      let key = arguments.length + Array.prototype.join.call(arguments, ", ");
      if (key in cache) return cache[key];
      else return cache[key] = f.apply(this, arguments);
    };
  };

  // возвращает наибольший общий делитель двух чисел, используя алгоритм Эвклида
  function gcd(a, b) {
    let t;
    if (a < b) t = b, b = a, a = t;
    while (b != 0) t = b, b = a % b, a = t;
    return a;
  }

  let gcdMemo = memoize(gcd);
  console.log(gcdMemo(37, 200));

  // Обратить внимание, что при мемоизации рекурсивных функций желательно, чтобы рекурсия выполнялась 
  // в мемоизованной версии, а не в оригинале
  let memoFactorial = memoize(function(n) {
    return (n <= 1) ? n : n * memoFactorial(n - 1);
  })
  console.log(memoFactorial(5));

