'use strict'

// Абстрация - это способ представления объекта в программе. При этом объект может иметь 100 свойств и 100 методов, 
// но в программе используется только скажем 5 свойств и 2 метода, которые представляют его в программе с достаточной точностью. 

  // Пример, есть машина. Состоит из 3 крупных узлов салон, двигатель, колеса, и нескольких десятков подузлов, и так далее до тысяч винтиков.
  // На дороге машина представляется как 1 объект, у которого есть габариты, масса и скорость.
  // Абстрактные классы это способ применить единый интерфейс к группе объектов. 
  // Это просто частный случай применения понятия абстракции.

    // Как мне думается, в нашем варианте это любое представление интерфейса JavaScript
    // Нас не особенно интересует что происходит, когда мы взаимодействуем с ним
    // Мы просто используем предложенный нам интерфейс
    // Хороший пример взаимодействие посредствам API

    const cityParam = {
      city: 'Saint Petersburg',
      key: '&APPID=a880d70bcdb81f233c4fcd3d594434de',
      units: '&units=metric',
      lang: '&lang=ru',
      // id: 'id=498817'
    }

    async function getWhether(obj){
      let path = '//api.openweathermap.org/data/2.5/weather?q='
      for (let value in obj){
        path += obj[value]
      }
      // await fetch(`//api.openweathermap.org/data/2.5/weather?q=${obj.city}${obj.key}${obj.units}`,{
      // await fetch(`//api.openweathermap.org/data/2.5/forecast?${obj.id}${obj.key}${obj.units}`,{
      await fetch(`${path}`,{})
        .then(response => response.json())
        .then(data => {
          console.log(data)
          const time = timeConverter(data.dt)
          console.log(`На ${time} в городе ${data.name} температура: '${data.main.temp}' градусов цельсия`)
        })
        .catch(err => console.log(err))
      // const json = response.json()
      // console.log(json)
    }
    getWhether(cityParam)

    function timeConverter(UNIX_timestamp){
      let a = new Date(UNIX_timestamp * 1000);
      let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      let year = a.getFullYear();
      let month = months[a.getMonth()];
      let date = a.getDate();
      let hour = a.getHours();
      let min = a.getMinutes();
      let sec = a.getSeconds();
      let time = hour + ':' + min + ':' + sec + ' ' + date + ' ' + month + ' ' + year;
      return time;
    }