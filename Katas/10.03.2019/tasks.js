////////////////////////////////////////
// Интересные задачи для разбора
////////////////////////////////////////
// ******************************************* ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ ************************************************ //
// // 1️⃣
// Task
// Given a Divisor and a Bound , Find the largest integer N , Such That ,
// Conditions :
// N is divisible by divisor
// N is less than or equal to bound
// N is greater than 0.

// Notes
// The parameters (divisor, bound) passed to the function are only positve values .
// It's guaranteed that a divisor is Found .
// Input >> Output Examples
// 1- maxMultiple (2,7) ==> return (6)

// Мой вариант 💩💩💩💩
function maxMultiple(divisor, bound){
  let result = divisor;
  while (result <= bound) {
    result += divisor;}
  return result - divisor;
}

// Лучший варианты 💎💎💎💎
function maxMultiple2(divisor, bound){
 return bound-bound % divisor;
}


// ******************************************* ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ ************************************************ //
// // 2️⃣
// Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) 
// numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native 
// Italian speakers trying to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci 
// sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the 
// case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, 
// returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array 
// (except in C return NULL) and be ready for anything else which is not clearly specified ;)

// Test.assertSimilar(tribonacci([1,1,1],10),[1,1,1,3,5,9,17,31,57,105])
// Test.assertSimilar(tribonacci([0,0,1],10),[0,0,1,1,2,4,7,13,24,44])
// Test.assertSimilar(tribonacci([0,1,1],10),[0,1,1,2,4,7,13,24,44,81])
// Test.assertSimilar(tribonacci([1,0,0],10),[1,0,0,1,1,2,4,7,13,24])
// Test.assertSimilar(tribonacci([0,0,0],10),[0,0,0,0,0,0,0,0,0,0])
// Test.assertSimilar(tribonacci([1,2,3],10),[1,2,3,6,11,20,37,68,125,230])
// Test.assertSimilar(tribonacci([3,2,1],10),[3,2,1,6,9,16,31,56,103,190])
// Test.assertSimilar(tribonacci([1,1,1],1),[1])
// Test.assertSimilar(tribonacci([300,200,100],0),[])
// Test.assertSimilar(tribonacci([0.5,0.5,0.5],30),[0.5,0.5,0.5,1.5,2.5,4.5,8.5,15.5,28.5,52.5,96.5,177.5,326.5,600.5,1104.5,2031.5,3736.5,6872.5,12640.5,23249.5,42762.5,78652.5,144664.5,266079.5,489396.5,900140.5,1655616.5,3045153.5,5600910.5,10301680.5])

// Мой вариант 😄
function tribonacci(signature,n){
  let arr = signature;
  let total = [];
  total.push(...arr);
  if (!(isFinite(n) && n > 0 && n == Math.round(n))) return [];
  if (n <= 1) return [signature[0]];
  for (i = 3; i < n; i++){
    total.push(arr.reduce((x, y) => {return x + y}, 0));
    arr = total.slice(-3);
  };
  return total;
}


// Лучший варианты 💎💎💎💎
function tribonacci2(signature,n){
  
  for (var i = 3; i < n; i++) {
    signature[i] = signature[i-1] + signature[i-2] + signature[i-3]
  }
  console.log(signature);
  return signature.slice(0, n);
}

// ******************************************* ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ ************************************************ //
// // 3️⃣
// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the 
// successive powers of p is equal to k * n.
// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.

// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Мой вариант 😄 (без принудительного приведения типа к числу!!!!)
function digPow(n, p){
  let digits = n.toString()
                .split('')
                .map((c, i) => {return Math.pow(c, p + i)})
                .reduce((x, y) => {return x + y}, 0)
  if (digits%n != 0) return -1;
  else return digits / n;
};
