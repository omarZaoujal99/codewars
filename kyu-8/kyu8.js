// here you'll find all kyu-8 katas --- above any code, you'll see the name of the kata
// notice: maybe you'll notice that the code getting better and more readable while you go down, the reason of the 
// experience that I got with the passage of time  

// --------------------------------

// 1- Sort and Star
function twoSort(s) {
    var alphabets = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz";
    var a = alphabets.split("");
    for(var i = 0; i < alphabets.length; i++){
        for(var j = 0; j < s.length; j++){
            var splitS = s[j].split("");
            while(splitS[0] === a[i]){
                var res = splitS.join("***");
                if(res > 1){
                    var resLen = res.length();
                    var res2 = Math.min(resLen);
                    return res2;
                }
                else return res;
            }
        }
    }
}

// --------------------------------

// 2- Get the mean of an array
function getAverage(marks){
    const arrLen = marks.length;
    let arrAvg = 0;
    for(let i = 0; i < arrLen; i++){
      arrAvg += marks[i];
    }
    const res = arrAvg/arrLen;
    return Math.floor(res);
}

// --------------------------------

// 3- Lario and Muigi Pipe Problem
function pipeFix(numbers){
    var lastI = (numbers.length)-1;
    var newArr = [];
    for(var i = numbers[0]; i <= numbers[lastI]; i++){
        newArr.push(i);
    }
    return newArr;
}

// --------------------------------

// 4- Multiplication table for number
function multiTable(number) {
    let str = "";
    for(let i = 1; i <= 10; i++){
      if(i == 10){
        str += i + " * " + number + " = " + i*number;
      }
      else str += i + " * " + number + " = " + i*number + "\n";
    }
    return str;
}

// --------------------------------

// 5- Find the smallest integer in the array
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min.apply(Math,args);
    }
}

// --------------------------------

// 6- My head is at the wrong end!
function fixTheMeerkat(arr) {
    return arr.reverse();
}

// --------------------------------

// 7- Multiply
function multiply(a, b){
    return a * b;
}

// --------------------------------

// 8- Convert a Number to a String!
function numberToString(num) {
    return num.toString();
}

// --------------------------------

// 9- Remove First and Last Character
function removeChar(str){
    return str.substring(1,str.length -1)
};