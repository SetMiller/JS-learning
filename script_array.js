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