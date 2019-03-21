console.clear();
const OBJECTS = 'тема изучения - Объекты'
console.log(`${OBJECTS}`);
console.log(`-----------------------------------------------------`);

// 📣 Объект является неупорядоченной коллекцией свойств, каждое из которых имеет имя и значение👆.
// 📣 Имена свойств являются строками👆, поэтому можно сказать, что объекты отображают строки в значения.
// 📣 Свойство имеет имя и значение. Именем может быть 👆любая строка👆, включая пустую строку, но объект не может иметь
//  2 свойства с одинаковым именем.
// 📣 Каждое свойство имеет ряд ассоциированных с ним значений, которые называются атрибутами свойства (writable, enumirable (for/in), configurable).
// 📣 Каждый объект имеет 3 атрибута объекта (prototype, class, extensible)
// ******************************************* ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ ************************************************ //

//1.Создание объекта
//1.1 С помощью литерала:
    let empty = {};
        console.log(`Вызов объекта empty:`);
        console.log(empty);
        console.log('\n');

    let point = {
        x: 1,
        y: 2,
        toString: function(){                               //👈Приведение типов значений к toString
            return '\nx: ' + this.x + '\ny: ' + this.y;
        }
    };
        console.log(`Вызов объекта point:` + point);
        console.log('\n');

    let point2 = {                                          // Объект со значениями ссылающимеся на объект -> point{}
        x: point.x+5,
        y: point.y+'2',                                     //👈Приведение типов - Число->Строка
        toString: function(){
            return '\nx: ' + this.x + '\ny: ' + this.y;
        }
    };
        console.log(`Вызов объекта point2:` + point2);
        console.log('\n');

    //вар 1.____________________________________________________________
        console.log('вар 1.____________________________________________________________');
    let book = {
        'main title': 'JavaScript',                         //👈Имена свойств с пробелами 
        'sub-title' : 'The Definition Guide',               //👈Имена свойств с дефисами
        'for'       : 'all audiences',                      //👈Зарезервированное слово
        author: {                                           //👈Объект как значение свойства
            firstname: 'David',                             //👈Имена свойств без кавычек
            surname  : 'Flanagan'
        },
    }
    console.log(`Вызов объекта book:`);
    console.log(book);
    console.log(book.author);
    console.log('\n');

    //вар 2.____________________________________________________________
        console.log('вар 2.____________________________________________________________');
    let book2 = {
        'a': {key:'main title', value:'JavaScript'},                                //👈Имена свойств в объекте-обертке 🐱
        'b': {key:'sub-title', value:'The Definition Guide'},                       //👈Имена свойств в объекте-обертке
        'c': {key:'for', value:'all audiences'},                                    //👈Зарезервированное слово 🐶
        author: {                                                                   //👈Объект как значение свойства
            firstname: 'David',                                                     //👈Имена свойств без кавычек
            surname  : 'Flanagan',
            toString: function(){
                return '\nfirstname: ' + this.firstname + '\nsurname: ' + this.surname;
            }
        },
    };
    console.log(`${book2.a.key}: ${book2.a.value}\n${book2.b.key}: ${book2.b.value}\n${book2.c.key}: ${book2.c.value}`);
    console.log(`Вызов объекта book2.author:` + book2.author);

//1.2 С помощью оператора new и следующей следом функции():
console.clear();
    let o = new Object();                           //👈Наследует свойство constructor, ссылающееся на функцию-конструктор, использованную для создания объекта {🐷}
//    console.log(o);

//1.3 С помощью статической функции() и передаче ей объекта-прототипа{🐷}
// 15.2.3.5 Object.create ( O [, Properties] )
console.clear();
    let o1 = Object.create({x: 'qwe🙏'});           //👈присваивает ссылку на объект Object.prototype, как если бы создали с помощью {}
    console.log({o1});                              //со свойством x:'qwe🙏' ///😵

    let o2 = Object.create(null);                   //👈создаем объект без прототипа 🐱
    console.log({o2});

    let o3 = Object.create(Object.prototype);       //👈идентично созданию объекта при помощи {} и new Object()
    console.log({o3});

//1.4 Наследование 🐌
//📣  Функция для создания объектов с произвольными прототипами
//📣  иначе: функция для создания наследников ✌️
function inherit(p) {
    if (p == null) throw TypeError('null!!!');
    if (Object.create)
        return Object.create(p);                    //👈создаем объект с прототипом объекта "р" 😃
    var t = typeof p;
    if (t !== 'object' && t !== 'function') throw TypeError('not an obj or func');
    function f() {};
    f.prototype = p;
    return new f();
}

    let o4 = Object.create({x: 2});                //👈 создаем объект o4 в обертке объекта-прототипа {} {🐷}
    o2 = inherit(o4);                              //👈 Оборачиваем объект o2 в обертку объекта-прототипа o4 {🐷}
    console.log({o2});                             //👈 Оборачиваем объект o2 в еще один объект-прототип {{🐷}}

//    'Bad Code 💩'
//    console.log(o2);
// ******************************************* ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ ************************************************ //

//2 Получение и изменение свойств 🐙
//2.1 ОБъект как ассоциативный массив
console.clear();
    let author = book.author;                      //👈 создаем  объект "author", который ссылается на свойство(объект) {book.author} 👆
                                                   //author ➡️ author.surname ➡️ 'Flanagan' 💨 typeof(author) = "object"
    let name = author.surname;                     //👈 создаем переменную "name", которой присваиваем значение свойства "surname" объекта {author} 👆
                                                   //name ➡️ author ➡️ author.surname ➡️ 'Flanagan' 💨 typeof(name) = "string"
    let title = book['main title'];                //👈 создаем переменную "name", которой присваиваем значение свойства 'main title' объекта {book} 👆
                                                   //title ➡️ book ➡️ 'main title' ➡️ 'JavaScript' 💨 typeof(name) = "string"
    book.edition = 6;                              //👈 добавляем свойство "edition" со значением "6"  👆
    book['main title'] = 'ECMAScript';             //👈 меняем значение свойства 'main title' с 'JavaScript' на 'ECMAScript' 👆

    console.log(`for: ${book['for']}`);            //👈 для доступа к свойствам, имена которых совпадают с зарезервированными словами
                                                   //или "💌", то необходимо использовать только [🔥]👆
console.clear();

    let customer = {
            address0 : 123,
            address1 : 44444,
            address2 : 33333,
            address3 : 22222,
    };
    var addr = "";
    for (var i = 0; i < 4; i ++) {                  //👈 Этот фрагмент читает и объединяет в одну строку значения свойств "address" 🔄
        addr += customer["address" + i] + '\n'      // 👆 код будет считать от "4" ➡️ "0" - for (var i 4; i--;) {😭}
    }
    var type = typeof(addr);
console.log(`customer prop: ${addr}typeof(addr) = "${type}"`);

//2.2 Наследование 🐙🐙🐙🐙🐙
//📣 Объекты в языке JavaScript обладают множеством "собственных ствойств" и могут также наследовать множество свойств от объекта-прототива📣
console.clear();
    //let o = {};                                   //👈 "о" наследует методы объекта Object.prototype 👆
    o.x = 1;                                        // и обладает собственным свойством "x" 💎
    let p = inherit(o);                             //👈 "p" наследует свойства объектов "o" и Object.prototype 👆
    p.y = 2;                                        // и обладает собственным свойством "y" 💎
    let q = inherit(p);                             //👈 "q" наследует свойства объектов "o", "p" и Object.prototype 👆
    q.z = 3;                                        // и обладает собственным свойством "z" 💎
    let s = q.toString();                           //👈 наследует метод Object.prototype.toString() ➡️ typeof(s) => "string" 🔥 s: "[object Object]"  
    let ss = q.x + q.y;                             // => 3: "x" и "y" наследуются от "o" и "p" ➡️ typeof(s) => "number" 🔥

//📣 Если присваивание допустимо, всегда создается и изменяется свойство в {оригинальном объекте} и никогда в цепочке прототипов 📣
    let unitCircle = { r:1 };
    let c = inherit(unitCircle);
    console.log(`c.r : ${c.r}`);
    c.x = 1; c.y = 1;
    c.r = 2;                                        //👈 "c.r" переопределяет унаследованное свойство 'r:1' от объекта {unitCircle} без изменений в родительном объекте 👆
    console.log(`unitCircle.r : ${unitCircle.r}`);
    console.log(`c.r : ${c.r}`);

//2.3 Ошибки доступа к свойствам ✴️
//📣 Если нет уверенности, что {book} и {book.subtitle} являются объектами (или ведут себя подобно объектам),
//📣 нельзя 🔥🔥🔥 использовать выражение book.subtitle.length, так как оно может возбудить исключение 👆
//📣 Ниже 👇👇👇 приводятся два способа защиты против исключений подобного рода:
console.clear();
//Более наглядный и прямолинейный способ 🐱
    let len = undefined;
    if (book) {
        if (book.sub-title) {
            len = book.sub-title.length;
        } else {
            try {                                   //👈 перехватываем ошибку и обрабатываем ее и выводим сообщение
                throw new Error(`Нет такого свойства в объекте!!!👀`)
            } catch(e) {
                console.log(e);                     //👆 выполнение программы не прерывается 💎
            }
            // throw TypeError(`NO!!!`);            //👈 иначе прерывает выполнение 🔥🔥🔥🔥
        }
    }
    console.log(`len : ${len}`);

//📣 Более краткая и характерная для JavaScript 👆👆 альтернатива получения длины значения свойства subtitle

    // let len2 = book && book.subtitle && book.subtitle.length;      //👈 при неудаче будет ➡️ Uncaught ReferenceError: len2 is not defined 🔥
    let len2 = book && book['sub-title'] && book['sub-title'].length;
    console.log(`len2 : ${len2}`);
console.clear();
// ******************************************* ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ ************************************************ //

//3 Удаление свойств 🐙
    delete book.author;
    delete book['main title'];
    console.log({book});
    console.log(book.author);

//📣 Оператор delete не удаляет👆👆👆👆 ненастраиваимые свойства, отрибут configurable которых имеет значение false
//📣 Ненастраиваемыми являются свойства встроенных объектов, а так же свойства глобального объекта, созданные с помощью👆👆👆👆 инструкции объявления переменных и функций
    delete Object.prototype;                        //👈 удаление невозможно - ненастраиваемое свойство (свойство глобального объекта) 👆
    var x = 1;
    delete this.x;                                  //👈 удаление невозможно, так как объявлено с помощью инструкции объявления переменной и стало св-вом глоб. объекта 👆
    function f() {};
    delete this.f;                                  //👈 удаление невозможно, так как объявлено с пом. инструкции объявления функции и стало св-вом глоб. объекта 👆

//📣 При удалении настраиваемых👆👆👆👆 свойств глобального объекта в нестрогом🔥🔥🔥🔥режиме допускается опускать ссылку на глобальный объект
//📣 и передавать оператору delete только имя свойствам
    this.y = 1;                                     //👈 создать настраиваемое свойство глобального объекта (без var, let, const и т.д.) 👆
    delete y;                                       //👈 и удалить его 💎 ... в строгом режиме возбуждает исключение SyntaxError 🔥🔥🔥

//📣 Однако в строгом🔥🔥🔥🔥режиме оператор delete возбуждает исключение SyntaxError, усли его операндом является неквалифицированный идентификатор,
//📣 такой как x, поэтому👆👆👆необходимо указывать явное выражение обращения к свойству
    delete this.y;
console.clear();
// ******************************************* ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ ************************************************ //

//4 Проверка существования свойств 🐙
//📣 Выполнить такую проверку можно с помощью оператора 'in', с помощью методов 'hasOwnProperty()' и 'propertyIsEnumerable()' или просто обратившись к свойству.
    let w = { x: 1 }

//📣 Оператор 'in' ➡️ 'true', если объект имеет 🔥👆собственное или унаследованное👆🔥 свойство с этим именем
    console.log(`w.x in w: ${'x' in w}`);                                           //👈 true
    console.log(`w.y in w: ${'y' in w}`);                                           //👈 false
    console.log(`w.toString in w: ${'toString' in w}`);                             //👈 true

//📣 Метод 'hasOwnProperty()' ➡️ 'true', если объект имеет 🔥👆собственное свойство👆🔥 с этим именем
    console.log(`w.hasOwnProperty('x'): ${w.hasOwnProperty('x')}`);                 //👈 true
    console.log(`w.hasOwnProperty('y'): ${w.hasOwnProperty('y')}`);                 //👈 false
    console.log(`w.hasOwnProperty('toString'): ${w.hasOwnProperty('toString')}`);   //👈 false

//📣 Метод 'propertyIsEnumerable()' ➡️ 'true', если объект имеет 🔥👆собственное свойство с атрибутом enumerable👆🔥
    let w2 = inherit(w);
    w2.y = 2;
    console.log(`w2.hasOwnProperty('x'): ${w2.hasOwnProperty('x')}`);               //👈 false
    console.log(`w2.hasOwnProperty('y'): ${w2.hasOwnProperty('y')}`);               //👈 true
    console.log(`w2.hasOwnProperty('toString'): ${w2.hasOwnProperty('toString')}`); //👈 false

//📣 Оператор 'in' отличает🔥🔥 отсутствие свойства от свойства, имеющего значение 'undefined'👆
    let w3 = { x: undefined};
    console.log(`w3.x !== undefined: ${w3.x !== undefined}`);                       //👈 false
    console.log(`w3.y !== undefined: ${w3.y !== undefined}`);                       //👈 false
    console.log(`'x' in w3: ${'x' in w3}`);                                         //👈 true
    console.log(`'y' in w3: ${'y' in w3}`);                                         //👈 false
    delete w3.x;
    console.log(`'x' in w3: ${'x' in w3}`);                                         //👈 false
console.clear();
// ******************************************* ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ ************************************************ //

//5 Перечисление свойств 🐙
//📣 Для получения всех имеющихся🔥🔥 свойств объекта используют цикл 'for/in', а также с помощью вспомогательных функций().

//📣 Инструкция цикла 'for/in' выполняет тело цикла для каждого 👉перечислимого👈 свойства (собственного или унаследованного🔥🔥🔥) указанного объекта,
//📣 присваивая ➡️ имя свойства переменной цикла
    let r = { x: 1, y: 2, z: 3, f: function f() {}};
    console.log(`r.propertyIsEnumerable('toString'): ${r.propertyIsEnumerable('toString')}`);
    for (prop in r) {
        console.log(prop);
    }
console.clear();

//📣 Чтобы выполнить проверку только собственных👆👆👆 свойств указанного объекта, необходимо выполнить фильтрацию унаследованных🔥🔥🔥 свойств и методов
    let r2 = inherit(r);                                       //👈 либо let r2 = Object.create(r); -> для ECMAScript 5 и выше     
    // let r2 = {};
    r2.a = 2;
    r2.x = 10;
    r2.f2 = (function f() {});
    
    for (prop in r2) {
        if (!r2.hasOwnProperty(prop)) continue;                //👈 выполняем фильтрацию наследуемых свойств и методов💎
        if (typeof r2[prop] === 'function') continue;          //👈 выполняем фильтрацию🔥🔥🔥 👉собственных и наследуемых👈 методов💎
        console.log(prop);
    }

    // for(p in aq6) {if (aq6.hasOwnProperty(p)) console.log(p);}       //👈 выводит только собственные перечислимые свойства🔥
    // for(p in aq6) {if (!aq6.hasOwnProperty(p)) console.log(p);}      //👈 выводит только унаследованные перечислимые свойства🔥

console.clear();
//📣📣 Вспомогательных функций()👆 для перечисления свойств объектов:
// 🔄 Копирует все перечислимые свойства из объекта p{🐮} ➡️ в объект o{🐴} (свойства и методы)
//🔥🔥 Затирает одинаковые свойства в объекте o{🐴} значением свойства из объекта p{🐮}🔥🔥
//😔 Функция не учитывает наличие методов доступа и не копирует атрибуты
    function extend(o, p) {
        for (prop in p) {
            o[prop] = p[prop];
        }
        return o;
    }

// 🔄 Копирует все перечислимые свойства из объекта p{🐮} ➡️ в объект o{🐴} (свойства и методы)
//🔥🔥 Если в объекте o{🐴} имеются одинаковые с объектом p{🐮} свойства, то свойства в объекте o{🐴} остаются неизменными🔥🔥
//😔 Функция не учитывает наличие методов доступа и не копирует атрибуты
    function merge(o, p) {
        for (prop in p) {
            if (o.hasOwnProperty(prop)) continue;
            o[prop] = p[prop];
        }
        return o;
    }

// 🔄 Удаляет из объекта o{🐴} (свойства и методы) отсутствующие в объекте p{🐮}
    function restrict(o, p) {
        for (prop in o) {
            if (!(prop in p)) {
                delete o[prop];
            }
        }
        return o;
    }

// 🔄 Удаляет из объекта o{🐴} (свойства и методы) присутствующие в объекте p{🐮}
    function substract(o, p) {
        for (prop in p) {
            delete o[prop];
        }
        return o;
    }

// 🔄 Возвращает новый объект, содержащий свойства, присутсвующие хотя бы в одном из объектов o{🐴} и p{🐮}

    function union(o, p) {return extend(extend({}, p), o);};         //👈 отбрасываются значения свойств объекта p {🐷}
    function union(o, p) {return extend(extend({}, o), p);};         //👈 отбрасываются значения свойств объекта o {🐷}

// 🔄 Возвращает новый объект, содержащий свойства, присутсвующие сразу в обоих объектах o🐴 и p🐮
    
    function intersection(o, p) {return restrict(extend({}, o), p);};         //👈 отбрасываются значения свойств объекта p {🐷}

// 🔄 Возвращает массив имен 👉собственных👈 перечислимых👆👆 свойств 👆объекта👆 o{🐴} (аналогично методу Object.getOwnPropertyNames(🐷))🔥🔥🔥🔥🔥🔥
    function keys(o) {
        if (typeof o !== 'object') throw TypeError();
        let result = [];
        for (i in o) {
            if (o.hasOwnProperty(i)) {
                result.push(i);
            }
        }
        return result;
    }

    console.log(`Object.getOwnPropertyNames(r2): ${Object.getOwnPropertyNames(r2)}`);   //👈 Возвращает массив имен 👉собственных👈 перечислимых свойств объекта o{🐴}🔥🔥🔥
    //let r5 = Object.getOwnPropertyNames(r2);                                          // аналогично Object.keys()
console.clear();
// ******************************************* ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ ************************************************ //

//6 Методы чтения и записи свойств {🐷} 🐙
//📣 Свойства, для которых определяются методы чтения и записи, иногда называют 👉свойствами с методами доступа👈, чтобы отличить их от свойств с данными.
    let g = {                                                               //👈 определяем свойства объекта 'g' {🐷}
        x: 1.0,
        y: 1.0,
        get r() { return this.x + this.y},                                  //👈 определяем свойства объекта 'g' {🐷} с методами доступа (определяется как пара)
        set r(mult) {
            let oldVal = this.x + this.y;
            let newVal = mult/oldVal;
            this.x *= newVal;
            this.y *= newVal;
        }
    }

    console.log(`x=${g.x}\ny=${g.x}\nr=${g.r}`);
    g.r = 4;
    console.log(`x=${g.x}\ny=${g.x}\nr=${g.r}`);
    g.r = 3;
    console.log(`x=${g.x}\ny=${g.x}\nr=${g.r}`);

//📣 Свойства с методами доступа наследуются так же, как обычные свойства с данными, поэтому объект 'g' {🐷} можно использовать как прототип для других объектов
    let g1 = inherit(g);
    console.log(`x=${g1.x}\ny=${g1.x}\nr=${g1.r}`);
    g1.r = 4;
    console.log(`x=${g1.x}\ny=${g1.x}\nr=${g1.r}`);
console.clear();

//📣 Чтобы изменить значение атрибута свойства или создать новое свойство с заданными значениями атрибутов, следует вызвать метод Object.defineProperty(),
//📣 передав ему: 1️⃣объект, в котором требуется выполнить изменения, 2️⃣имя создаваемого или извеняемого свойства и 3️⃣объект дескриптора свойства
    let v = {};
    Object.defineProperty(v, "x", { value: 5,                                //👈 добавляем в объект 👆ОДНО👆 свойство 'x' со значением 5
                                    writable: false,                         //👈 устанавливаем возможность перезаписать🔥 свойство
                                    enumerable: false,                       //👈 устанавливаем возможность перечислить🔥 свойство (можно обойти Object.getOwnPropertyNames🔥)
                                    configurable: true});                            //👈 устанавливаем возможность удалять🔥 свойство
    Object.defineProperty(v, "y", { get: function() { return this.x * this.x; } });  //👈 превратим свойство в свойство с методом доступа🔥🔥🔥

// 📣 Добавление новых методов чтения и записи в объект
    Object.defineProperty(v, "a", {                                          //👈 "a" - название метода, для обращения к нему v.a
        get: function() {return this.y},                                     //👈 Метод чтения свойства, либо набора свойств (this.x * this.x)
        set: function(y) {this.y = y},                                       //👈 Метод записи свойства v.a = 15 -> v.y = 15🔥
        enumerable: true,
        configurable: true});

//📣 Если возникнет необходимость создать или изменить сразу несколько свойств, можно воспользоваться методом Object.defineProperties() и 🔥Object.create() стр 162🔥
    const v1 = Object.defineProperties({}, {
        x: {value: 1, writable: true, enumerable: true, configurable: true},
        y: {value: 2, writable: true, enumerable: true, configurable: true},
        r: {
            get: function() {return this.x + this.y},
            enumerable: true,
            configurable: true
        }
    })

//📣 Пример реализации объекта с методами чтения для реализации свойства с "таинственным поведением"
    const random = {
        get octet()  {return Math.floor(Math.random() * 256);},
        get uint16() {return Math.floor(Math.random() * 65536);},
        get int16()  {return Math.floor(Math.random() * 65536)-32768;}
    }
// ******************************************* ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ ************************************************ //

//📣 7.Атрибуты свойств🐙🐙🐙

// Четыре атрибута свойств с данными -> 
// 1️⃣ значение (value); 2️⃣ признак доступности для записи (writable); 3️⃣ признак доступности для перечисления (enumerable); 4️⃣ признак доступности для настройки (configurable)

// Четыре атрибута свойств с методами доступа ->
// 1️⃣ метод чтения (get); 2️⃣ метод записи (set); 3️⃣ признак доступности для перечисления (enumerable); 4️⃣ признак доступности для настройки (configurable)

//📣 Если возникнет необходимость получить дескриптор свойств объектам  (Object.getOwnPropertyDescriptor(obj, property);)
    console.log(Object.getOwnPropertyDescriptor(r, 'x'));               //👈 получаем дескриптор свойства 'x' объекта 'r'{🐷}
    Object.getOwnPropertyDescriptor(random, "int16");                   //👈 {get: ƒ, set: undefined, enumerable: true, configurable: true}
    Object.getOwnPropertyDescriptor(v1, "x");                           //👈 {value: 1, writable: true, enumerable: true, configurable: true}
    
//📣 Работает только с собственными свойствами   
    const v2 = Object.create(v1);
    Object.getOwnPropertyDescriptor(v2, "x");                           //👈 undefined

//📣 Копирование атрибутов свойств передаваемого объекта в Object.prototype🔥🔥🔥
    Object.defineProperty(Object.prototype,
        'extend',
        {
            writable: true,                          //👈 устанавливаем возможность перезаписать🔥 свойство
            enumerable: false,                       //👈 устанавливаем возможность перечислить🔥 свойство (можно обойти Object.getOwnPropertyNames🔥)
            configurable: true,                      //👈 устанавливаем возможность удалять🔥 свойство
            value: function(o) {
                let names = Object.getOwnPropertyNames(o);
                for (var i = 0; i < names.length; i++) {
                    if (names[i] in this) continue;
                    let desc = Object.getOwnPropertyDescriptor(o, names[i]);
                    Object.defineProperty(this, names[i], desc);
                }
            }
        }
    );
// ******************************************* ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ ************************************************ //

//📣 8.Атрибуты Объекта🐙🐙🐙
// 1️⃣ prototype -> определяет объект от которого наследуются свойства
// Для объектов созданных с помощью литерала {} прототипом является -> Object.prototype, 
// Для объектов созданных с помощью оператора new прототипом является значение свойства prototype конструктора
// Для объектов созданных с помощью Object.create() прототипом является первый аргумент этой функции(может иметь значение null)
    const proto = {x:1};
    const objProto = Object.create(proto);
    proto.isPrototypeOf(objProto);                  //👈 -> true
    Object.prototype.isPrototypeOf(proto);          //👈 -> true
    Object.prototype.isPrototypeOf(objProto);       //👈 -> true

// 2️⃣ class -> строка, содержащая информацию о типе объекта 
// Вызов метода toString через косвенный вызов с помощью метода Function.call()
    function classof(o) {
        if (o === null) return null;
        if (o === undefined) return undefined;
        return Object.prototype.toString.call(o).slice(8, -1);
    }
    classof(proto);                                 //👈 -> "Object"
    
// 3️⃣ extensible -> допускается ли добавлять в объект новые свойства
    Object.isExtensible(proto);                     //👈 -> true
// 3️⃣.1️⃣ Object.preventExtensions() -> метод, который делает объект нерасширяемым (не затрагивает прототип этого объекта🔥) 
// Существующие свойства, доступные для записи можно будет изменить
    Object.preventExtensions(proto);                //👈 -> возвращает переданный объект -> {x:1}
    Object.isExtensible(proto);                     //👈 -> false

// 3️⃣.2️⃣ Object.seal() -> метод, не только делает объект нерасширяемым, но и делает все свойства этого объекта недоступными для настройки
// после вызова метода, объект нельзя будет вернуть в прежнее состояние (не затрагивает прототип этого объекта🔥) 
    Object.seal(proto);                             //👈 -> возвращает переданный объект -> {x:1}
    Object.getOwnPropertyDescriptor(proto, "x");    //👈 -> {value: 1, writable: true, enumerable: true, configurable: false🔥}
// Определить вызывался ли метод можно с помощью  Object.isSealed()
    Object.isSealed(proto)                          //👈 -> true

// 3️⃣.3️⃣ Object.freeze() -> метод, не только делает объект нерасширяемым и все свойства этого объекта недоступными для настройки, но и 
// делает все собственные свойства с данными доступными только для чтения (не затрагивает прототип этого объекта🔥) 
    Object.freeze(proto);                           //👈 -> возвращает переданный объект -> {x:1}
    Object.getOwnPropertyDescriptor(proto, "x");    //👈 -> {value: 1, writable: false🔥, enumerable: true, configurable: false🔥}
// Определить вызывался ли метод можно с помощью  Object.isFrozen()
    Object.isFrozen(proto)                          //👈 -> true

// ******************************************* ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ ************************************************ //
 
//📣 9.Сериализация объектов
// Сериализация -> преобразование объектов в строковую форму представления, которая позднее может использоваться для их восстановления
// JSON.stringify(obj) -> сериализация объекта в строку
// Функция сериализует только перечислимые собственные свойства объекта, если значение не может быть сериализовано, это свойство просто 
// исключается из строкового представления 🔥🔥🔥
    const v1Json = JSON.stringify(v1);              //👈 -> "{"x":1,"y":2,"r":3}" -> теряются методы доступа
    classof(v1Json);                                //👈 -> "String"

// JSON.parse(obj_copy) -> восстановление объекта
    const v1JsonParse = JSON.parse(v1Json);         //👈 -> {x: 1, y: 2, r: 3}
    classof(v1JsonParse2);                          //👈 -> "Object"


//  Обращение к свойствам объекта (Ссылка или значение)

    var person = {
        name: "Sam",
        age: 25,
        hobbies: ['Sports', 'Programming']
    }
    console.log(person);
    
    var secondPerson = Object.assign({}, person);
    console.log(secondPerson);

//   var myHobbies = person.hobbies;                             //👈 В этом случае при вызове myHobbies мы все равно будем видеть ['Sports', 'Programming', 'Reading']
    var myHobbies = person.hobbies.slice();                      //👈 В данно млучае метод slice() без аргументов возвращает исходный массив, без привязки к нему 🔥🔥🔥

    person.name = "Jack";
    person.hobbies.push('Reading');
    console.log(secondPerson);
    
    
    console.log(myHobbies);
  