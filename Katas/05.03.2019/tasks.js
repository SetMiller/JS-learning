////////////////////////////////////////
// Интересные задачи для разбора
////////////////////////////////////////

// // 1️⃣
// In some ranking people collects points. The challenge is sort by points and calulate position for every person. 
// But remember if two or more persons have same number of points, they should have same position number and sorted 
// by name (name is unique).

// For example: Input structure:
let people = [
    {
      name: "John",
      points: 100,
    },
    {
      name: "Bob",
      points: 130,
    },
    {
      name: "Mary",
      points: 120,
    },
    {
      name: "Kate",
      points: 120,
    },
  ];

// Input structure:
//   [
//       {
//         name: "Bob",
//         points: 130,
//         position: 1,
//       },
//       {
//         name: "Kate",
//         points: 120,
//         position: 2,
//       },
//       {
//         name: "Mary",
//         points: 120,
//         position: 2,
//       },
//       {
//         name: "John",
//         points: 100,
//         position: 4,
//       },
//   ];

// Мой вариант решения 😸
  function ranking(people) {
    if (people.length == 0) return people;
    else {
    // ВАЖНО 🔥🔥🔥 сортировка выполняется по счету, а потом по имени 🔥🔥🔥
      people.sort(function(x1,x2) {
        if (x2.points < x1.points) return -1;
        if (x2.points > x1.points) return 1;
        if (x1.name < x2.name) return -1;
        if (x1.name > x2.name) return 1;
        return 0;
      });
      let count = people[0].points;
      people[0].position = 1;
      let position = 1;
      let index = 0;
      for(i of people) {
      index +=1;
        if (i.points < count){
            i.position = index;
            position += 1;
            count = i.points;
        }
        else {
            i.position = position;
        };
      };
    return console.table(people);
    };
  };

  ranking(people);

//  ------------------------------------------------------------------------------

// Другие варианты 😭
function ranking2(people) {

    people.sort(compare)
    
    for (let i=0 ;i<people.length;i++ ){
      people[i].position = i+1
    }
    for (let i=0;i<people.length-1;i++){
      if (people[i].points === people[i+1].points){
        people[i+1].position = people[i].position;
      }
    }
    
    function compare(a,b) {
      if (a.points < b.points)
        return 1;
      if (a.points > b.points)
        return -1;
      if (a.points === b.points){
        if(a.name > b.name)
        return 1;
        if(a.name < b.name)
        return -1;
      }
      return 0;
    }
    return people.sort((a,b) =>a.name+b.name);
}

const ranking3 = people => people.sort((a,b) => b.points !== a.points ? b.points - a.points : a.name > b.name ? 1 : -1)
  .map(x => {x.position = people.findIndex(y => y.points === x.points) + 1; return x;});

function ranking4(people) {
  let arr = people.sort((a,b)=>a.points !== b.points ? b.points - a.points : a.name < b.name ? -1 : 1)
  arr.forEach((el,i,arr)=>el.position = arr[i-1] && el.points === arr[i-1].points ? arr[i-1].position : i+1)
  return arr
}


// Big O
function ranking5(arr) {
    for (var i=0; i<arr.length-1; ++i)
      for (var j=i+1; j<arr.length; ++j)
        if (arr[i].points<arr[j].points || (arr[i].points==arr[j].points && arr[i].name>arr[j].name))
        {
          var c=arr[i];
          arr[i]=arr[j];
          arr[j]=c;
        }
    var p=1; 
    for (var i=0; i<arr.length; ++i)
    {
      if (i==0)
        arr[i].position=1;
      else
      {
        if (arr[i].points==arr[i-1].points)
          arr[i].position=arr[i-1].position;
        else
          arr[i].position=i+1;
      }
    }
    return arr;
  }
