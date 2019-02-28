//     let test1 = [[1,2],[3,4],[5,6]];
//     let test2 = [[1,3,5],[2,4,6]];
//     let test3 = [[1,1],[1],[1,1]];

//     function bigToSmall(arr){
//       var result=[].concat(...arr).sort().reverse().join(">");
//       console.log(result);
//       }


/////////////////////////////////////////////////////////////////////////////////
let array1 = ["b", "c", "b", "a"]; 
let array2 = ["",  "a", "a", "c"];

// function checkExam(array1, array2) {
//   let score = 0;
//   for (i = array1.length; i--;) {
//     if (array1[i] == array2[i]) score += 4;
//     else if  (array1[i] !== array2[i] && array2[i]) score -= 1;
//     else if (score < 0) score = 0;
//     console.log(`i = ${i} - score = ${score}`)
//   }
//   return score;
//  }

checkExam=(arr1,arr2)=>
   Math.max( 
    arr2.reduce( (a,b,i) => b==arr1[i] ? a+4: b ? a-1: a ,0) 
    ,0)

console.log(checkExam(array1, array2));