console.clear();
const ARRAYS = 'тема изучения - Массивы'
console.log(`${ARRAYS}`);
console.log(`-----------------------------------------------------`);

// 📣 Массив - это упорядоченная коллекия значений👆.
// 📣 Значения в массиве называются элементами👆, и каждый элемент характерихуется числовой позицией в массиве,
// которая называется индексом👆.
// 📣 Все массивы в JavaScript имеют свойство: length🔥🔥🔥.

//1.Создание массива
//1.1 С помощью литерала:
  let empty = [];                             //👈Пустой массив, length: 0 (__proto__: Array(0))🔥
      console.log(`Вызов массива empty:`);
      console.table(empty);

  let primes = [2, 3, 5, 6, 11];               //👈Массив с пятью числовыми элементами, length: 5🔥
      console.log(`Вызов массива primes:`);
      console.table(primes);

  let misc = [ 1.1, true, "a", ];              //👈Три элемента разных типов + заверш. запятая, length: 3🔥
      console.log(`Вызов массива misc:`);
      console.table(misc);

// 📣 Значения в литерале массива не обязательно должны быть константами - это могут быть любые выражения🔥🔥🔥

  let base = 1024;
  let holo = "1024";
  let table = [base, base+1, base*2, base.toString(), Number(holo),];   //👈Любые выражения с приведением типов, length: 5🔥
      console.log(`Вызов массива table:`);
      console.table(table);

// 📣 Литералы массивов могут модержать литералы объектов или литералы других массивов🔥🔥🔥

  let b = [[1, {x:1, y:2}], [2, {x:3, y:4}]];         //👈Массив содержит 2 под-массива, которые содержат свойства со значениями и объектами🔥
      console.log(`Вызов массива b:`);
      console.table(b);
      console.log('\n');

// 📣 Если литерал массива содержит несколько идущих подряд запятых без значений между ними, моздается разреженный массив
// 📣 Элементы отсутствуют в массива, но при обращении к ним возвращяется значение undefined🔥🔥🔥

  let count = [1,,3];                                 //👈Элементы с индексами 0 и 2, count[1] -> undefined🔥 length: 3👆
  let undefs = [,,];                                  //👈Массив без элементов, но length: 2👆
      console.log(`Вызов массива count:`);
      console.log([count]);
      console.log('\n');
      console.log(`Вызов массива undefs:`);
      console.log([undefs]);
console.clear()

//1.2 С помощью конструктора Array():

// 📣 Вызвать конструктор без аргументов

  let a = new Array();                                          //👈Пустой массив (без аргументов), length: 0👆
      console.log(a);

  let a2 = new Array(10);                                       //👈Пустой массив (без аргументов), length: 10👆
      console.log(a2);

  let a3 = new Array(10);                                       //👈Массив с одним аргументом, length: 10👆
  a3[0] = 10;
      console.log(a3);

  let a4 = new Array(5, 4, 3, 2, 1, "testing, testing");        //👈Массив с шестью аргументами, length: 6👆
      console.table(a4);
console.clear()

//2.Чтение и запись элементов массива

  let c = ["world"];                        //👈Создать массив с одним элементом
  let value = c[0];                         //👈Прочитать элемент 0
  c[1] = 3.14;                              //👈Записать значение в элемент 1
  let i = 2;                                
  c[i] = 3;                                 //👈Записать значение в элемент i = 2
  c[i+1] = 'hello';                         //👈Записать значение в элемент i+1 = 3
  c[c[i]] = c[0];                           //👈Прочитать значение элемента 0 в элемент c[i], i=2 -> c[2]=3
      console.table(c);
console.clear()
// 📣 Когда имя свойства не является неотрицательным целым числом, оно интерпретируется как имя обычного свойства
// 📣 объекта, а не как индекс массива

  c[-1.23] = true;                          //👈Будет создано свойство с именем "-1.23"
  c["1000"] = 5;                            //👈1001-й элемент массива
  c[4.0];                                   //👈Будет создан пустой элемент массива с индексом 4, тоже что и c[4], c["4"]👆
      console.table(c);
console.clear()

//3.Разреженные массивы

  let d = new Array(5);                     //👈Создать пустой массив со значением length = 5
  d[2] = 3;
  delete d[2];
  d = [];                                   //👈Пересоздать пустой массив со значением length = 0
  d[100] = 0;                               //👈Добавит один элемент, но установит length = 101;

// 📣 Существенно разреженные массивы обычно более медленны и потребляют больше памяти, чем плотные массивы,
// 📣 а поиск элементов в таких массивах занимает примерно столько же времени, что и поиск обычных свойств объектов

  let d1 = [,];                             //👈Пересоздать пустой массив со значением length = 0
  let d2 = [undefined];                     //👈Пересоздать пустой массив со значением length = 1
  console.log(0 in d1);                     //👈 ➡️ false, d1 не имеет элемента с индексом 0👆
  console.log(0 in d2);                     //👈 ➡️ true, d2 имеет элемент с индексом 0 и со значением undefined👆

console.clear()

//4.Длина массива

// 📣 Любой массив имеет свойство length, и это свойство отличает массивы от обычных объектов Java Script

  d.length;                                 //👈 ➡️ 101: длина массива
  ['a', 'b', 'c'].length;                   //👈 ➡️ 3: наибольший индекс равен 2, длина массива равна 3

// 📣 Особенность поведения length🔥🔥🔥
// 📣 1️⃣ Если присвоить значение элементу массива, индекс i которого больше или равен текущему значению свойства length,
//  в свойство length записывается значение i+1👆
// 📣 2️⃣ При присваивании свойству length неотрицательного целого числа n, меньшего, чем текущее значение, все элементы
//  массива с индексами, большими или равными значению n, удаляются из массива

  f = [1, 2, 3, 4, 5];
  f.length = 3;                             //👈 теперь массив f содержит элементы [1, 2, 3]
  f.length = 0;                             //👈 удалит все элементы. f - пустой массив []
  f.length = 5;                             //👈 длина равна 5, но элементы отсутствуют, подобно Array(5)

// 📣 В ECMAScript 5 свойство length массива можно сделать доступным только для чтения, с помощью Object.defineProperty()

   f2 = [1, 2, 3];
   Object.defineProperty(f2, 
     "length", {writable: false});                //👈 сделать свойство length доступным только для чтения
   f2.length = 2;                                 //👈 свойство length не изменит значения и останется равной 3
   Object.getOwnPropertyDescriptor(f2, 'length'); //🔥 вернет {value: 3, writable: false, enumerable: false, configurable: false}

//5.Добавление и удаление элементов массива

//1️⃣ Добавление элементов в конец массива при помощи метода push(). Побочный эффект 🔥🔥🔥 возвращает длину массива и сдвигает элементы 🔥🔥🔥
//2️⃣ Удаление элементов с конца массива при помощи метода pop(). Побочный эффект 🔥🔥🔥 возвращает значение удаленного элемента и сдвигает элементы 🔥🔥🔥

   let stack = [];
   stack.push(1,2);                         //👈 stack = [1, 2], вернет length = 2
   stack.pop();                             //👈 stack = [1], вернет значение удаленного элемента = 2
   stack.push(3);                           //👈 stack = [1, 3], вернет length = 2
   stack.pop();                             //👈 stack = [1], вернет значение удаленного элемента = 3
   stack.push([4, 5]);                      //👈 stack = [1, [4, 5]], вернет length = 2
   stack.pop();                             //👈 stack = [1], вернет значение удаленного элемента = [4, 5]
   stack.pop();                             //👈 stack = [], вернет значение удаленного элемента = 1

//3️⃣ Добавление элементов в начало массива при помощи метода unshift(). Побочный эффект 🔥🔥🔥 возвращает длину массива и сдвигает элементы 🔥🔥🔥
//4️⃣ Удаление элементов с начала массива при помощи метода shift(). Побочный эффект 🔥🔥🔥 возвращает значение удаленного элемента и сдвигает элементы 🔥🔥🔥

   stack.unshift(1);                        //👈 stack = [1], вернет length = 1
   stack.unshift(22);                       //👈 stack = [22, 1], вернет length = 2
   stack.shift();                           //👈 stack = [1], вернет значение удаленного элемента = 22
   stack.unshift(3, [4, 5]);                //👈 stack = [3, [4, 5], 1], вернет length = 3
   stack.shift();                           //👈 stack = [[4, 5], 1], вернет значение удаленного элемента = 3
   stack.shift();                           //👈 stack = [1], вернет значение удаленного элемента = [4, 5]
   stack.shift();                           //👈 stack = [], вернет значение удаленного элемента = 1

//5️⃣ Удаление элементов при помощи метода delete. Побочный эффект 🔥🔥🔥 присваивает значение undefined удаленному элементу 
// (создает разреженный массив) и не изменяет значение length, не сдвигает вниз элементы с более высокими индексами.  
// 🔥🔥🔥 возвращает true или false 🔥🔥🔥

   stack.push(10, 20, 30, 40);
   delete stack["3"];                //👈 stack = [1, 2, 3, empty], вернет true
   Object.defineProperty(stack, 
    "2", {configurable: false});     //👈 сделать свойство индекса 2 доступным только для чтения 2: {value: 30, writable: false, enumerable: true, configurable: true}
   delete stack[2];                  //👈 stack = [1, 2, 3, empty], вернет false

//6️⃣ Удаление элементов при помощи изменения значения свойства length, побочный эффект 🔥🔥🔥 возвращает значение желаемой длины массива и удаляет все предыдущие элементы🔥🔥🔥

   stack.length;                     //👈 Длина массива = 4 => [10, 20, 30, empty]
   stack.length = 3;                 //👈 Длина массива = 3 => [10, 20, 30]
   stack.length = 1;                 //👈 Длина массива = 3 => [10, 20, 30] 👆длина массива не изменилась, тк свойству с инжексом 2 установлено свойство
                                     // configurable: false, из-за чего оно не может быть изменено

//7️⃣ Удаление, вставку и замену элементов массива с помощью многоцелевого метода splice(), 
// побочный эффект 🔥🔥🔥 возвращает массив удаленных элементов 🔥🔥🔥
   
   let stack2 = [10, 20, 30, 40, 50, 60, 70, 80];
   
   stack2.splice(3);                                //👈 вернет [40, 50, 60, 70, 80] => stack2 = [10, 20, 30]
   stack2.splice(3, 0, 40, 50, 60, 70, 80);         //👈 добавит 🔥без замены🔥 элементы начиная с 3-го элемента => stack2 = [10, 20, 30, 40, 50, 60, 70, 80]
   stack2.splice(3, 0, 'hello');                    //👈 добавит 🔥без замены🔥 элемент начиная с 3-го элемента => stack2 = [10, 20, 30, 'hello', 40, 50, 60, 70, 80]
   stack2.splice(3, 1, 'world');                    //👈 добавит 🔥с заменой🔥 элемент начиная с 3-го элемента => stack2 = [10, 20, 30, 'world', 40, 50, 60, 70, 80]

//8️⃣ Возврат нового массива с помощью метода concat(), побочный эффект 🔥🔥🔥 не изменяет исходный массив, возвращает массив из исходного и значений
// всех аргументов, переданных методу concat()

   let stack3 = stack.concat('hello', 'world', [[1,2]], 25, 35);          //👈 вернет [10, 20, 30, "hello", "world", Array(2), 25, 35]

//9️⃣ Возврат нового массива с помощью метода slice(), побочный эффект 🔥🔥🔥 не изменяет исходный массив, фрагмент или подмассив, указанного массива
// Так аргументу -1 соответствует последний элемент массива, а аргументу -3 3-й элемент массива с конца

   let stack4 = stack2.slice(1, 3);          //👈 вернет [20, 30]
   let stack5 = stack2.slice(-3, -2);        //👈 вернет [60]  👆👆👆работает только в направлении увеличения значений индексов👆👆👆

//6.Обход элементов массива
// 📣 Наиболее часто для обхода элементов массива используется цикл for

   let o = {};
   o[1] = 'one';
   o[2] = '234';
   o['hello'] = 'world';
   var keys = Object.keys(o);                               //👈 получить массик имен свойств объекта {о} => ["1", "2", "hello"]
   let values = [];                                         //👈 массив для сохранения значений свойств
   for (i = 0, k = keys.length; i < k; i++) {
      var key = keys[i];                                    //👈 получить имя свойства по индексу (включая String👆)
      console.log(`keys[i] = ${keys[i]}`);
      console.log(`key = ${key}`);                                    
      values[i] = o[key];                                   //👈 сохранить значения в массиве values
      console.log(`values[i] = ${values[i]}`);
   }
console.clear();

// 📣 1️⃣ Если массив разреженный или необходимо исключить из обработки значения null, undefined и несуществующие элементы, проверку можно записать так:

   let m = [10, undefined, 30, , 50, null, 70, 80];
   for (i = 0, k = m.length; i < k; i++) {
       // if (!m[i]) {                                      //👈 выведет свойства со значениями null, undefined, empty
          if (!m[i]) continue; {                            //👈 отфильтрует свойства со значениями null, undefined, empty
            // console.log(`m[${i}] = ${m[i]}`) 
          } 
  }

// 📣 2️⃣ Если необходимо пропустить только значения undefined, проверку можно записать так:

   let m2 = [10, undefined, 30, , 50, null, 70, 80];
   let m3 = [];
   for (i = 0, k = m2.length; i < k; i++) {
       if (m[i] === undefined) continue; {                   //👈 отфильтрует свойства со значениями undefined
         m3[i] = m2[i];
       }         
   }
 
// 📣 3️⃣ Если необходимо пропустить только несуществующие элементы, а элементы со значением undefined обрабатывать как обычные элементы

   let m4 = [];
   for (i = 0, k = m2.length; i < k; i++) {
       if (!(i in m2)) continue; {                           //👈 отфильтрует несуществующие свойства ????????????
         m4[i] = m2[i];
       }         
   }

// 📣 4️⃣  Для обхода разреженных массивов можно использовать цикл for/in

   let m5 = [];
   for (index in m2) {
      m5.push(m2[index]);                                    //👈 отфильтрует empty свойства [10, undefined, 30, 50, null, 70, 80]
   }
   console.log(m5);

// 📣 5️⃣👆👆👆 Цикл for/in может возвращать имена унаследованных свойств, такие как имена методов, добавленных в Array.prototype
// по этой причине не следует использовать цикл for/in для обхода массивов, не предусмотрев дополнительной проверки для фильтрации нежелательных свойств

   for (i in m2) {
     if (!m2.hasOwnProperty(i)) continue;                    //👈 пропустить унаследованные свойства
        // тело цикла                                
   }

   for (i in m2) {
     if (String(Math.floor(Math.abs(Number(i)))) !== i) continue;       //👈 пропустить i, если оно не является целым неотрицательным числом
        // тело цикла
   }

//7.Многомерные массивы

// 📣 JavaScript не поддерживает "настоящие" многомерные массивы, но позволяет неплохо имитировать их при помощи массивов из массивов.
// 📣 Для этого достаточно дважды использовать оператор []🔥🔥🔥

    let table2 = new Array(10);                                       //👈 Создаем массив на 10 строк
    for (let i = 0; i < table2.length; i++) {
      table2[i] = new Array(10);                                      //👈 Создаем в каждой строке по 10 столбцов
    }
    for(let row = 0; row < table2.length; row++) {                    //👈 Инициализация массива
      for(let col = 0; col < table2[row].length; col++) {
        table2[row][col] = row * col;
      }
    }
    let product = table2[4][6];                                       //👈 24 => Расчет произведения 4 * 6 с помощью многомерного массива

//8.Оставшиеся методы класса Array стандарта ECMAScript3

// 📣 1️⃣ Метод join();
// 📣 Метод Array.join() преобразует 🔥🔥🔥все элементы массива в строки👆, объединяет их и возвращает получившуюся строку🔥🔥🔥
// Исходный массив не изменяет!!!!

    let arr = [1, 2, 3];
    arr.join();                                   //👈Вернет String => "1,2,3"
    arr.join('');                                 //👈Вернет String => "123"
    arr.join(', ');                               //👈Вернет String => "1, 2, 3"
    arr.join('-, -');                             //👈Вернет String => "1-, -2-, -3"
    let arr2 = new Array(10);
    arr2.join('-');                               //👈Вернет String => "---------"

//    Метод Array.join() является обратным по отношению к методу String.split(), создающему массив путем разбиения строки на фрагменты.

// 📣 2️⃣ Метод reverse();
// 📣 Метод Array.reverse() меняет 🔥🔥🔥порядок следования элементов в массиве на обратный и возвращает переупорядоченный массив🔥🔥🔥
// Перестановка выполняется непосредственно в исходном массиве, т.е. мето не создает новый массив, а переупорядочивает их в уже существующем массиве!!!!!!!!!

    arr.reverse();                                //👈Изменит исходный массив => [3, 2, 1]
    let bb = arr.reverse().reverse().join('');    //👈Вернет String => "321"

// 📣 3️⃣ Метод sort();
// 📣 Метод Array.reverse() сортирует элементы 🔥🔥🔥в исходном массиве и возвращает отсортированный массив🔥🔥🔥
// Если метод вызывать без аргументов, сортировка выполняется в алфавитном порядке

    let aa = ['banana', 'cherry', , ,'apple'];
    aa.sort();                                    //👈Изменит исходный массив => ["apple", "banana", "cherry", empty × 2]
                                                  // Неопределенные элементыпереносятся в конец массива
    let ss = aa.join(', ');                       //👈Вернет String => "apple, banana, cherry, , "
    

// 📣 Для сортировки в каком-либо ином порядке, отличном от алфавитного, методу sort() можно передать функцию сравнения в качестве аргумента

    let cc = [33, 4, 1111, 222];
    cc.sort();                                    //👈Изменит исходный массив => [1111, 222, 33, 4]
    cc.sort((a,b) => {return a-b});               //👈Сортировка в порядке увеличения => [4, 33, 222, 1111]
    cc.sort((a,b) => {return b-a});               //👈Сортировка в порядке уменьшения => [1111, 222, 33, 4]

// 📣 Сортировка массива без учета регистра символов с помощью функции, преобразующей свои аргументы в нижний регистр перед сравнением

    let aa2 = ['dog', 'Bug', 'Cat', 'ant'];
    aa2.sort();                                   //👈Изменит исходный массив => ["Bug", "Cat", "ant", "dog"]
    aa2.sort(function(s, t){
      let a = s.toLowerCase();
      let b = t.toLowerCase();
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    })                                            //👈Изменит исходный массив => ["ant", "Bug", "Cat", "dog"]
console.clear();


//9.Методы класса Array, определяемые стандартом ECMAScript5

// 📣 1️⃣ Метод forEach();
// 📣 Метод forEach() является аналогом инструкции for, выполняет обход массива и для каждого из них вызывает указанную функцию
// 📣 Аргументы => 1. значение элемента массива; 2. индекс элемента; 3. сам массив. 
// 📣 Изменяет исходный массив 🔥🔥🔥🔥🔥🔥
    
    let numbers = [1, 10, 15, 20, -5, 8, 14];

// Увеличить все элементы массива на 1
    numbers.forEach((v, i, a) => {a[i] = v + 1});         //👈Изменит исходный массив => [2, 11, 16, 21, -4, 9, 15]
    // numbers.forEach((v, i, a) => {a[i] = v + '1'});    //👈Изменит исходный массив => ["11", "101", "151", "201", "-51", "81", "141"]

    // 🔥 аналог 
    // for (let i = 0; i < numbers.length; i++) {         //👈Изменит исходный массив => [3, 12, 17, 22, -3, 10, 16]
    //   numbers[i] += 1;
    // }
    // 🔥
  
// Найти сумму всех элементов массива (свертка массива)
    let sum = 0;
    numbers.forEach((v) => {sum += v});                   //👈sum => 70

    //🔥 аналог 
    // for (let i = 0; i < numbers.length; i++) {         //👈Изменит исходный массив => [3, 12, 17, 22, -3, 10, 16]
    //   sum += numbers[i];
    // }
    //🔥

// 🔥🔥🔥 forEach() не позволяет прервать итерации, пока все элементы не будут переданы функции. Отсутствует эквивалент break!!!!!
// Если потребуется прервать итерации раньше, внутри функции можно возбуждать исключение, а вызов forEach() помещать в блок try

// Если функция, которая передается функции foreach(), возбудит исключение foreach.break, цикл будет прерван преждевременно
    function foreach(a, f, t) {
      try {a.forEach(f, t);}
      catch(e) {
        if (e === foreach.break) return;
        else throw e;
      }
    }
    foreach.break = new Error('StopIteration');


// 📣 2️⃣ Метод map();
// 📣 Метод map() является аналогом метода forEach(), передает функции каждый элем. массива и возвращает массив значений, возвращ. этой функцией
// 📣 15.4.4.19 Array.prototype.map ( callbackfn [ , thisArg ] ) => callback Функция, создающая элемент в новом массиве, принимает три аргумента:
// 1. currentValue -> Текущий обрабатываемый элемент массива; 
// 2. index -> Индекс текущего обрабатываемого элемента в массиве; 
// 3. array -> Массив, по которому осуществляется проход. 
// 4. thisArg -> Необязательный параметр. Значение, используемое в качестве this при вызове функции callback
// 📣 Возвращает новый массив 🔥🔥🔥🔥🔥🔥

// Изменить тип данных с String на Number
    let numbers2 = ["1", "-10", "15", "20", "-5", "8", "14"];
    let numb = numbers2.map((i) => {return parseInt(i)});                   //👈 новый массив => [1, -10, 15, 20, -5, 8, 14]

    //🔥 аналог 
    // let numb = [];
    // for (let i = 0; i < numbers2.length; i++) {                          //👈 новый массив с типом Number => [1, -10, 15, 20, -5, 8, 14]
    //   numb[i] = parseInt(numbers2[i]);
    // }
    //🔥


// 📣 3️⃣ Метод filter();
// 📣 Метод filter() возвращает массив, содержащий подмножество элементов исходного массива. 
// 📣 Передаваемая ему функция должна сожержать условие и возвращать значение true или false.
// 📣 Возвращает новый массив 🔥🔥🔥🔥🔥🔥

    let positive = numbers2.filter((i) => {return i > 0});        //👈 новый массив с типом String => ["1", "15", "20", "8", "14"]
    let negative = numbers2.filter((i) => {return i < 0});        //👈 новый массив с типом String => ["-10", "-5"]
    let even = numbers2.filter((i) => {return i%2 == 0});         //👈 новый массив с типом String => ["-10", "20", "8", "14"]
    let odd = numbers2.filter((i) => {return i%2 !== 0});         //👈 новый массив с типом String => ["1", "15", "-5"]


// 📣 4️⃣ Метод every();
// 📣 Метод проверяет передаваемый массив на выполнение условия, возвращающего true или false🔥🔥🔥 "boolean". 
// 📣 Метод every() возвращает true, если функция с условием вернула true для всех элементов массива.
// 📣 Для пустого массива [] возвращает true.

    let everyPositive = numbers2.every((x) => {return x > 0});      //👈 возвращает "boolean" => false
    let everyLow = numbers2.every((x) => {return x < 100});         //👈 возвращает "boolean" => true
    let everyOdd = numbers2.every((x) => {return x%2 == 0});        //👈 возвращает "boolean" => false


// 📣 4️⃣ Метод some();
// 📣 Метод проверяет передаваемый массив на выполнение условия, возвращающего true или false🔥🔥🔥 "boolean". 
// 📣 Метод some() возвращает true, если функция с условием вернула true для любого из элементов массива.
// 📣 Для пустого массива [] возвращает false.
    
    let somePositive = numbers2.some((x) => {return x > 0});                  //👈 возвращает "boolean" => true
    let someString = numbers2.some((x) => {return typeof(x) == "string"});    //👈 возвращает "boolean" => true
    let someOdd = numbers2.some((x) => {return x%2 == 0});                    //👈 возвращает "boolean" => true

// 📣 5️⃣ Метод reduce() (reduceRight());
// 📣 Метод reduce() (reduceRight()) объединяет элементы массива, используя указанную функцию и возвращает единственное значение(свертка). 
// 📣 15.4.4.21 Array.prototype.reduce ( callbackfn [ , initialValue ] ) => callback функция, выполняющаяся для каждого элемента массива, принимает четыре аргумента:
// 1. accumulator -> Аккумулятор, аккумулирующий значение, которое возвращает функция callback после посещения очередного элемента,
// 2. currentValue -> Текущий обрабатываемый элемент массива; 
// 3. index -> Необязательный => Индекс текущего обрабатываемого элемента массива$
// 4. array -> Необязательный => Массив, для которого была вызвана функция reduce. 
// 5. [, initialValue] -> Необязательный => Объект, используемый в качестве первого аргумента (начального значения) при первом вызове функции callback

// Пример работы
// [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
//   return previousValue + currentValue;
// }, initialValue);

// 📣 Возвращает единственное значение (сворачивает массив) 🔥🔥🔥🔥🔥🔥
// 📣 Метод reduce() обрабатывает массив слева направо, метод reduceRight() обрабатывает массив справа налево

    let sumReduce = numbers2.reduce((x, y) => {return parseInt(x) + parseInt(y)}, 0);       //👈 возвращает => 43 typeof -> "number"
    let productReduce = numbers2.reduce((x, y) => {return parseInt(x) * parseInt(y)}, 1);   //👈 возвращает => 1680000 typeof -> "number"
    let maxReduce = numbers2.reduce((x, y) => {return parseInt(x) > parseInt(y) ? parseInt(x) : parseInt(y)}, 0);    //👈 возвращает наибольшее значение 20 typeof -> "number"


 // 📣 Если необходимо свернуть массив объектов в один объект, то можно использовать функцию union().
 // эта функция принимает два объекта и возвращает другой объект.

    function extend(o, p) {
      for (prop in p) {
          o[prop] = p[prop];
      }
      return o;
    }

    function union(o, p) {return extend(extend({}, o), p);};

    let objects = [{x: 1}, {y: 2}, {z: 3}];
    let merjed = objects.reduce(union);           //👈 возвращает "object" => {x: 1, y: 2, z: 3}

// 📣 🔥🔥🔥🔥🔥🔥 напомню, что когда два объекта имеют свойства с одинаковыми именами, функция union() использует значения
// второго аргумента, т.е. методы reduce() и reduceRigth() могут дать разные результаты при использовании функции union()

    let objects2 = [{x: 1, a: 1}, {y: 2, a: 2}, {z: 3, a: 3}];
    let leftMerjed = objects2.reduce(union);                      //👈 возвращает "object" => {x: 1🔥, a: 3🔥, y: 2, z: 3🔥}
    let rightMerjed = objects2.reduceRight(union);                //👈 возвращает "object" => {z: 3🔥, a: 1🔥, y: 2, x: 1🔥}

// 📣 6️⃣ Метод indexOf() (lastIndexOf());
// 📣 Метод indexOf() (lastIndexOf()) отыскивает в массиве элемент с указанным значением и возвращает индекс первого найденного элемента 
// или -1, если элемент с таким значением отсутсвтует.
// 📣 Аргументы => 1. искомое значение, 2. начальное значение индекса массива, с которого следует начать 
// (отрицательное значение дает смещение относительно конца массива) 🔥🔥🔥
// 📣 Возвращает индекс единственного найденного элемента🔥🔥🔥
// 📣 Метод indexOf() обрабатывает массив слева направо, метод lastIndexOf() обрабатывает массив справа налево

    let ar = [10, 20, 30, 40, 30, 20, 10];
    let leftIndex = ar.indexOf(30);                               //👈 возвращает "number" => 2
    let rigthIndex = ar.lastIndexOf(30);                          //👈 возвращает "number" => 4
    let noneIndex = ar.indexOf(50);                               //👈 возвращает "number" => -1, т.к. искомый элемент отсутствует в массиве.

// 📣 Работа со вторым аргументом метода indexOf() (lastIndexOf())
// Функция отыскивает заданное значение в массиве и возвращает массив всех индексов, где было найдено совпадение.
// Здесь демонстрируется, как можно использовать второй аргумент метода для поиска совпадений после первого найденного индекса.
// 🔥🔥🔥 Обрати внимание, что строки также имеют метод indexOf() (lastIndexOf()), которые действуют подобно методам массивов.

    function findAll (a, x) {
      let result = [];                                    //👈 Массив для сохранения результатов
      let pos = 0;                                        //👈 Начальная позиция поиска
      while (pos < ar.length) {                           //👈 Цикл проверки совпадений по всем позициям
        pos = ar.indexOf(x, pos);                         //👈 найденный результат сохраняем в pos
        if (pos === -1) break;                            //👈 если ничего не нашли, то прерываем цикл
        result.push(pos);                                 //👈 найденный результат сохраняем в массив result
        pos += 1;                                         //👈 увеличиваем на 1 начальную позицию для поиска
      }
      return result;                                      //👈 Выводим массив с результатами
    }


//10.Тип Array

// 📣 Для того чтобы отличить массив от объекта можно использовать следующие инструменты:
// 1️⃣Array.isArray(), 2️⃣() instanceof Array, 3️⃣classof(), 4️⃣isArray(),
// 1️⃣ Функция Array.isArray() появилась в реализации ECMAScript 5 и помогает точно отличить массив от объекта.

    Array.isArray([]);                                    //👈 возвращает "boolean" => true
    Array.isArray({});                                    //👈 возвращает "boolean" => false

// 2️⃣ Оператор () instanceof Array возможно использовать в простых случаях, но способ относительно ненадежный🔥🔥🔥
    
    [] instanceof Array;                                   //👈 возвращает "boolean" => true
    ({}) instanceof Array;                                 //👈 возвращает "boolean" => false

// 3️⃣ Атрибут class объекта - это строка, содержащая информацию о типе объекта.
// Поэтому, чтобы определить класс объекта, можно попробовать вызвать метод toString() этого объекта и
// извлечь из результата подстроку с восьмого по предпоследний символ с помощью функции classof()

    Object.prototype.toString.call(ar);                    //👈 возвращает String => [object Array]
    Object.prototype.toString.call(ar).slice(8, -1);       //👈 возвращает String => Array

    function classof(o) {
      if (o === null) return null;
      if (o === undefined) return undefined;
      return Object.prototype.toString.call(o).slice(8, -1);
    }

    classof(leftIndex);                                   //👈 возвращает String => Number
    classof(ar);                                          //👈 возвращает String => Array
    classof(merjed);                                      //👈 возвращает String => Object

// 4️⃣ В реализации ECMAScript 3 выполнить проверку атрибута class можно с помощью функции isArray()

    let isArray = Function.isArray || function(o) {
      return typeof o === 'object' &&
             Object.prototype.toString.call(o) === "[object Array]"   //👈 возвращает "boolean" => true/false
    };

    isArray(ar);                                          //👈 возвращает "boolean" => true
    isArray(merjed);                                      //👈 возвращает "boolean" => false

