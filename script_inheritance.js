'use strict'

// Наследование - это свойство системы, позволяющее описать новый класс на основе уже существующего с частично или 
// полностью заимствующейся функциональностью. Класс, от которого производится наследование, называется базовым или родительским. 
// Новый класс – потомком, наследником или производным классом.

  // Пример №1 -> 🔥🔥🔥🔥
    // Создадим родительский класс
      class Animal {
        constructor(obj){
          this.name = obj.name
          this.age = obj.age
          this.thirst = 100
          this.belly = []
        }
        drink(points){
          this.thirst -= points
          return this.thirst
        }
        eat(food){
          this.belly.push(food)
          return this.belly
        }
      }
    
    // Расширим родительский класс более конкретными свойствами, для этого создадим дочерний класс
      // Создадим под-класс Кота
        class Cat extends Animal {
          constructor(obj){
            super(obj)
            this.breed = obj.breed
          }
          meow(){
            return `Me is a ${this.constructor.name} class. My name is '${this.name}' - '${this.breed}', ${this.age} ears old`
          }
          eat(food){
            if (food == 'fish'){
              super.eat(food)
              return this.belly
            } else {
              return `I am not going to eat ${food} !!!!!`
            }
          }
        }

        const cat = new Cat({
          name: 'Meowee',
          age: 2,
          breed: 'Maine coon'
        })

          console.log(cat)
          console.log(cat.drink(5))
          console.log(cat.meow())

      // Создадим под-класс Собаки  
        class Dog extends Animal {
          constructor(obj){
            super(obj)
            this.breed = obj.breed
          }
          eat(food){
            if (food == 'bone'){
              super.eat(food)
              return this.belly
            } else {
              return `I am not going to eat ${food} !!!!!`
            }
          }
          bark(){
            return `Bark Bark 🍖! '${this.name}' want this bone!!!
Me is a ${this.constructor.name} class. My name is '${this.name}' - '${this.breed}', ${this.age} ears old`
          }
        }

        const dog = new Dog({
          name: 'Wolfee',
          age: 4,
          breed: 'King Charles'
        })

          console.log(dog)
          console.log(dog.drink(10))
          console.log(dog.bark())

    // Пример №2 -> 🔥🔥🔥🔥
      // Расширение возможностей встроенных классов
        class bookCollection extends Array {
          constructor(name, ...books){
            super(...books)
            this.name = name
          }
          add(book){
            this.push(book)
          }
        }

        const myBooks = new bookCollection('myCollection',
          {name: 'book#1', author: 'author#1', myStar: 3},
          {name: 'book#2', author: 'author#2', myStar: 8},
          {name: 'book#3', author: 'author#3', myStar: 4},
        )

          console.log(myBooks)
        myBooks.add({name: 'book#4', author: 'author#4', myStar: 1})
          console.log(myBooks)

// *********************** ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ *********************** //