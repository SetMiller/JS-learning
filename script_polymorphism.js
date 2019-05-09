'use strict'

// Полиморфизм - в контексте ООП «полиморфизм» почти всегда означает только одно: переопределение унаследованных 
// методов для облегчения вызова одного и того же метода для разных объектов.

// Пример -> 🔥🔥🔥🔥
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
  
  // Создадим дочерние классы
    // Создадим под-класс Кота
      class Cat extends Animal {
        constructor(obj){
          super(obj)
          this.breed = obj.breed
        }
        talk(){
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
        talk(){
          return `Bark Bark 🍖! '${this.name}' want this bone!!!
Me is a ${this.constructor.name} class. My name is '${this.name}' - '${this.breed}', ${this.age} ears old`
        }
      }

      let animals = []

      for(let i = 0; i < 10; i++) {
        if (Math.random() < 0.5) {
          animals.push(new Cat({
            name: 'Meowee',
            age: 2,
            breed: 'Maine coon'
          }))
        } else {
          animals.push(new Dog({
            name: 'Wolfee',
            age: 4,
            breed: 'King Charles'
          }))
        }
      }

      console.log(animals)
      for(let animal of animals){
        console.log(animal.talk())
      }
      
    // Таким образом, вызывая один и тот же метод для всех животных, мы получаем свойственные
    // только им ответы, что является примером "полиморфизма"

// *********************** ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ *********************** //