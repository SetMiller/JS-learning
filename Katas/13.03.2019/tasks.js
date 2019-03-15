////////////////////////////////////////
// Интересные задачи для разбора
////////////////////////////////////////
// ******************************************* ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ ************************************************ //

// // 1️⃣
// Task
// Your apple has a virus, and the infection is spreading.
// The apple is a two-dimensional array, containing strings "V" (virus) and 
// "A" (uninfected parts). For each hour, the infection spreads one space up, 
// down, left and right.
// Input: 2D array apple and number n (n >= 0).
// Output: 2D array showing the apple after n hours.
var apple = [
  ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A', 'V', 'A', 'A', 'A', 'A', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'V', 'A', 'A', 'A', 'A', 'A', 'A', 'V', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A']
];
var n = 1;

///////////////////////// Мой вариант ответа
// let answer = [];
// let x = [];
// let y = [];
// for (let i = 0; i < apple.length; i++) {
//   answer[i] = [];
// }
// let xMax = apple.length;
// let yMax = apple[xMax - 1].length;

// for (let i = 0; i < apple.length; i++) {
//   for (let j = 0; j < apple[i].length; j++) {
//     if (apple[i][j] == "V") {
//       answer[i][j] = apple[i][j];
//       x.push(i);
//       y.push(j);
//     } else {
//       answer[i][j] = "A";
//     }
//   }
// }
// for (let k = 0; k < x.length; k++) {
//   for (let i = 0; i <= n; i++) {
//     for (let j = 0; j <= n - i; j++) {
//       if (x[k] + i >= 0 && x[k] + i < xMax && y[k] + j >= 0 && y[k] + j < yMax) answer[x[k] + i][y[k] + j] = "V";
//       if (x[k] - i >= 0 && x[k] - i < xMax && y[k] + j >= 0 && y[k] + j < yMax) answer[x[k] - i][y[k] + j] = "V";
//       if (x[k] + i >= 0 && x[k] + i < xMax && y[k] - j >= 0 && y[k] - j < yMax) answer[x[k] + i][y[k] - j] = "V";
//       if (x[k] - i >= 0 && x[k] - i < xMax && y[k] - j >= 0 && y[k] - j < yMax) answer[x[k] - i][y[k] - j] = "V";
//     }
//   }
// }

///////////////////////////////// Мой доработанный

function assign(arr){
  return arr.map(item=>[...item]);
}
let answer = assign(apple);

let x = [];
let y = [];
let xMax = apple.length;
let yMax = apple[xMax - 1].length;

for (let i = 0; i < apple.length; i++) {
  for (let j = 0; j < apple[i].length; j++) {
    if (apple[i][j] == "V") {
      x.push(i);
      y.push(j);
    }
  }
}
for (let k = 0; k < x.length; k++) {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n - i; j++) {
      if (x[k] + i < xMax && y[k] + j < yMax) answer[x[k] + i][y[k] + j] = "V";
      if (x[k] - i >= 0 && y[k] + j < yMax)   answer[x[k] - i][y[k] + j] = "V";
      if (x[k] + i < xMax && y[k] - j >= 0)   answer[x[k] + i][y[k] - j] = "V";
      if (x[k] - i >= 0 && y[k] - j >= 0 )    answer[x[k] - i][y[k] - j] = "V";
    }
  }
}


console.table(answer);


// Интересный вариант 👻👻👻
function assign(arr){
  return arr.map(item=>[...item]);
}

  let buf = assign(apple);
  for(let i = 0; i < n; i++) {
    apple = assign(buf);
    apple.forEach((colum, i) => {
      colum.forEach((item, j) => {
        if(item === "V") {
          if(i-1 >= 0) {
            buf[i-1][j] = "V";
          }
          if(j-1 >= 0) {
             buf[i][j-1] = "V";
          }
          if(i+1 < apple.length) {
             buf[i+1][j] = "V";
          }
          if(j+1 < colum.length) {
             buf[i][j+1] = "V";
          }
          
        }
      })
    })
  }
// console.table(buf);

