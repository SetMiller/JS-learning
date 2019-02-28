////////////////////////////////////////
// Интересные задачи для разбора
////////////////////////////////////////

// 1️⃣
// The two arrays are not empty and are the same length. 
// Return the score for this array of answers, giving +4 for each correct answer, 
// -1 for each incorrect answer, 
// and +0 for each blank answer(empty string).
// If the score < 0, return 0.
// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
let array1 = ["b", "c", "b", "a"]; 
let array2 = ["",  "a", "a", "c"];
// вариант ECMAScript 3
// function checkExam(array1, array2) {
//   let score = 0;
//    for (i = array1.length; i--;) {
//      if (array1[i] == array2[i]) score += 4;
//      else if (array2[i]) score -= 1;
//    }
//    return score < 0 ? 0 : score;
//  }

// вариант ECMAScript 5
checkExam=(arr1,arr2)=>
  Math.max(                                                         //👈 Если результат меньше 0, то возвращаем 0
    arr2.reduce(                                                    //👈 Метод reduce(), как замена циклу for с аккумулятором значений
      (a,b,i) => b==arr1[i] ? a+4 :                                 //👈 Если текущие элементы массива равны, то добавляем 4 балл
                 b ? a-1 :                                          //👈 Если текущий элемент массива не empty (null, undefined), то отнимает 1 балл
                 a                                                  //👈 Если текущий элемент массива empty, то не делаем ничего (0 баллов)
    ,0)                                                             //👈 Начальное значение счетчика
  ,0)

