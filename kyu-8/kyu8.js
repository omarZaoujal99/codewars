// here you'll find all kyu-8 katas --- above any code, you'll see the name of the kata

// --------------------------------

// 1- Multiply
function multiply(a, b){
    let result= a * b;
    return  result
}

// --------------------------------

// 2- My head is at the wrong end!
function fixTheMeerkat(arr) {
    return arr.reverse();
}

// --------------------------------

// 3- Convert a Number to a String!
function numberToString(num) {
    return num.toString();
}

// --------------------------------

// 4- Remove First and Last Character
function removeChar(str){
    return str.substring(1,str.length -1)
};

// --------------------------------

// 5- Lario and Muigi Pipe Problem
function pipeFix(numbers){
    var lastI = (numbers.length)-1;
    var newArr = [];
    for(var i = numbers[0]; i <= numbers[lastI]; i++){
        newArr.push(i);
    }
    return newArr;
}

// --------------------------------

// 6- Find the smallest integer in the array
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min.apply(Math,args);
    }
}

// --------------------------------

// 7- Sort and Star
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

// 8- Get the mean of an array