// here you'll find all kyu-8 katas --- above any code, you'll see the name of the kata
// notice: maybe you'll notice that the code getting better and more readable while you go down, the reason of the 
// experience that I got with the passage of time  

// --------------------------------

// 1- Over The Road
function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    var numsq = sq;
    var checksq = Math.sqrt(numsq);
    if(checksq % 1 === 0){
      var checksq = checksq + 1;
      var newsq = checksq**2;
      return newsq;
    }
    else return -1;
}

// --------------------------------

// 2- Beginner Series #3 Sum of Numbers
function getSum( a,b )
{
  let x = 0;
  if(a>b){
    do{
      x += a;
      a--;
    }while(a >= b);
  }
  else if(a<b){
    do{
      x += a;
      a++;
    }while(a <= b);
  }
  else x = a;
  return x;
}

// --------------------------------

// 3- Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?
function isRubyComing(list) {
    var result = false;
    for(var i in list){
      if(list[i].language === "Ruby"){
        result = true;
        return result;
      }
    }
    return result;
}

// --------------------------------

// 4- Stones on the Table
function solve(stones) {
    var splitIt = stones.split(""), count = 0;
    for(var i = 0; i < splitIt.length; i++){
      if(splitIt[i] == splitIt[i+1]){
        if(splitIt[i] == splitIt[i+2]){
          count = count+1;
        }
        else{
          count = count+1
        }
      }
    }
    return count;
}

// --------------------------------

// 5- Valid Spacing
function validSpacing(s) {
    let sentence = s.split("");
    let myRegex = /\s{2,}/gm;
    for(let i = 0; i < sentence.length; i++){
        if(sentence[0] === " " || sentence[(sentence.length) - 1] === " " || myRegex.test(s)){
          return false;
        }
      else return true;
    }
    if(s === ""){
      return true;
    }
}

// --------------------------------

// 6- Move 10
function moveTen(s){
    // a = 97 --- z = 122
    let splitIt = s.split("");
    let myArr = [];
    for(let i = 0; i < splitIt.length; i++){

        // get just a lower characters
        if(splitIt[i].charCodeAt(0) >= 97 && splitIt[i].charCodeAt(0) <= 122){
            let addTen = splitIt[i].charCodeAt(0) + 10;

            // check if we add 10 the code will be bigger than 122 (code of z) or not
            if(addTen > 122){
                let fixIt = addTen - 122;
                let backToA = 97 + (fixIt-1);
                let toPushIt2 = String.fromCharCode(backToA);
                myArr.push(toPushIt2);
            }
            // if the code is between 97 (a) and 122 (z) then push it in our array
            else{
                let toPushIt = String.fromCharCode(addTen);
                myArr.push(toPushIt);
            }
        }
        // push no word characters in the array
        else myArr.push(splitIt[i]);
    }
    let res = myArr.join("");
    return res;
}

// --------------------------------

// 7- String ends with?
function solution(str, ending){
    let getInd = str.lastIndexOf(ending);
    if(getInd > 0){
      let lngStr = str.length;
      let lngEnd = ending.length;
      if((lngStr-1) != getInd+(lngEnd-1)){
        return false;
      }
      else return true;
    }
    else if(str == ending){
      return true;
    }
    else return false;
}

// --------------------------------

// 8- Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins
function findAdmin(list, lang) {
    let myArr = [];
    for(let i = 0; i < list.length; i++){
      if(list[i].githubAdmin == "yes" && list[i].language == lang){
        myArr.push(list[i]);
      }
    }
    return myArr;
}

// --------------------------------

// 9- Jaden Casing Strings
String.prototype.toJadenCase = function () {
    let myArr = this.split(" ");
    let res = [];
    // the first letter for each item should change toUpperCase
    myArr.forEach(elmnt=>{res.push(elmnt[0].toUpperCase()+elmnt.slice(1))});
    return res.join(" ");
};

// --------------------------------

// 10- Over The Road
function overTheRoad(address, n){
    return ((n*2)+1)-address;
}

// --------------------------------

// 11- Highest and Lowest
function highAndLow(numbers){
    return numbers.split(" ").sort((a,b)=>{return a-b})[numbers.split(" ").length-1]+" "+numbers.split(" ").sort((a,b)=>{return a-b})[0];
}

// --------------------------------

// 12- Binary Addition
function addBinary(a,b) {
    return (a+b).toString(2);
}

// --------------------------------

// 13- Vowel Count
function getCount(str) {  
    return (str.match(/[aeiou]/gi)||[]).length;
}
