// here you'll find all kyu-7 katas --- above any code, you'll see the name of the kata
// notice: maybe you'll notice that the code getting better and more readable while you go down, the reason of the 
// experience that I got with the passage of time  

// --------------------------------

// 1- Over The Road
function findNextSquare(sq) {
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

// --------------------------------
// 14- Count the divisors of a number
function getDivisorsCnt(n){
    const arr = [...Array(n)];
    return arr.map((_,i)=>{return Number.isInteger((arr.length/(i+1))) ? arr.push() : false}).filter((n)=>{return n > 0}).length;
}

// --------------------------------

// 15- Complementary DNA
function DNAStrand(dna){
    let myObj = {T:"A", A:"T", C:"G", G:"C"};
    return dna.replace(/(?:T|A|C|G)/gi,v=>myObj[v]);
}

// --------------------------------

// 16- Count the Digit
function nbDig(n, d) {
    let arr = [];
    for(let i = 0; i < n+1; i++){
        arr.push((i)*(i));
    }
    return arr.join("").toString().match(new RegExp(d,"g") || []).length;
}

// --------------------------------

// 17- Mumbling
function accum(s) {
  let res = s.split("");
    for(let i = 0; i < res.length; i++){
        for(let j = 0; j < i; j++){
            res[i] += res[i];
        }
        res[i] = res[i].slice(0,res.indexOf(res[i])+1);
    }
    return res.map(v=>{return v.charAt(0).toUpperCase()+v.slice(1).toLowerCase()}).join("-");
}

// --------------------------------

// 18- Sum of integers in string
function sumOfIntegersInString(s){
  let sum = 0;
  let res = s.split(/\D/g).filter(v=>v!=NaN ? v:0)
     .map(elmnt=>sum += parseInt(elmnt)).pop();
  return isNaN(res) ? 0 : res;
}

// --------------------------------

// 19- Scaling Squared Strings
function scale(str, k, n) {
  let res = str.split("\n").map(v=>v.split("").map(v=>v.repeat(k)).join(""))
    .map(v=>v=v+"\n").map(v=>v.repeat(n)).join("").slice(0,-1);
  return str == "" ? "" : res;
}

// --------------------------------

// 20- Last Survivor
function lastSurvivor(letters, coords) {
  for(let i = 0; i < coords.length; i++){
      letters = letters.slice(0,coords[i])+letters.slice(coords[i]+1);     
  }
  return letters;
}