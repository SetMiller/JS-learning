'use strict'

// Инкапсуляция - это свойство системы, позволяющее объединить данные и методы, 
// работающие с ними, в классе и скрыть детали реализации от пользователя.

  // Пример №1 -> 🔥🔥🔥🔥
    // процедурное представление
      let baseSalary = 30000;
      let overtime = 10;
      let rate = 20

      function getWage (a, b, c){
        return a + (b * c)
      }

    // ООП представление
      let employee = {
        baseSalary: 30000,
        overtime: 10,
        rate: 20,
        getWage(){
          return this.baseSalary + (this.overtime * this.rate)
        }
      }
    
      console.log(getWage(baseSalary, overtime, rate))      // -> когда вызываем функцию, ей приходится явно передавать аргументы
      console.log(employee)
      console.log(employee.getWage())                       // -> когда вызываем метод объекта, он уже ссылается на свойства данного объекта

  // Пример №2 -> 🔥🔥🔥🔥
      function Employee(obj){
        this.baseSalary = obj.baseSalary
        this.overtime = obj.overtime
        this.rate = obj.rate
      }

      Employee.prototype.getWage = function(){
        return this.baseSalary + (this.overtime * this.rate)
      }

      const John = new Employee({baseSalary:20000, overtime:5, rate:20})
      console.log(John)
      console.log(John.getWage())

  // Пример №3 ES6 -> 🔥🔥🔥🔥
      class Employee2 {
        constructor(obj){
          console.log(this.constructor.name)
          // if (this.constructor.name === 'Employee2'){
          //   throw new Error(`${this.constructor.name}: can not create instance of abstract class `)
          // }
          this.baseSalary = obj.baseSalary
          this.overtime = obj.overtime
          this.rate = obj.rate
        }
        getWage(){
          return this.baseSalary + (this.overtime * this.rate)
        }
      }
        
      const Sam = new Employee2({baseSalary:30000, overtime:10, rate:20})
      console.log(Sam)
      console.log(Sam.getWage())

// Основной признак процедурного кода -> отдельные данные и функции с параметрами

// *********************** ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ *********************** //