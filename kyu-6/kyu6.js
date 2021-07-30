// here you'll find all kyu-8 katas --- above any code, you'll see the name of the kata
// notice: maybe you'll notice that the code getting better and more readable while you go down, the reason of the 
// experience that I got with the passage of time  

// --------------------------------

// 1- Who likes it?
function likes(names) {
    if(names.length === 0){
      return "no one likes this";
    }
    else if(names.length === 1){
      return names[0] + " likes this";
    }
    else if(names.length === 2){
      return names[0] + " and " + names[1] + " like this";
    }
    else if(names.length === 3){
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    }
    else if(names.length > 3){
      let arrLen = names.length - 2;
      return names[0] + ", " + names[1] + " and " + arrLen + " others like this";
    }
    return 0;
}

// --------------------------------

// 2- Convert string to camel case
function toCamelCase(str){
    let empty = "";
    let splitIt = str.split("-");
    let splitItBy_ = str.split("_");
  
    if(str === ""){
      return empty;
    }
    else if(str.indexOf('-') > 0){
      let myArr1 = [splitIt[0]];
      for(let i = 1; i < splitIt.length; i++){
        var res1 = splitIt[i].replace(splitIt[i][0],splitIt[i][0].toUpperCase());
        myArr1.push(res1);
        var myRes1 = myArr1.join('');
      }
      return myRes1;
    }
    else if(str.indexOf('_') > 0){
      let myArr2 = [splitItBy_[0]];
      for(let i = 1; i < splitItBy_.length; i++){
        var res2 = splitItBy_[i].replace(splitItBy_[i][0],splitItBy_[i][0].toUpperCase());
        myArr2.push(res2);
        var myRes2 = myArr2.join('');
      }
      return myRes2;
    }
}

// --------------------------------

// 3- Count characters in your string
function count (string) {  
   
    let myObj = {};
    for(let i = 0; i < string.length; i++){
      myObj[string[i]] = 0;
      for(let j = 0; j < string.length; j++){
        if(string[i] == string[j]){
          myObj[string[i]]++;
        }
      }
    }
     return myObj;
}

// --------------------------------

// 4- Arabian String
function camelize(str){
    let checkAlphabets = /\W|[_]/gim;
    let splitIt = str.split(checkAlphabets);
    let myArr = [];
    for(let i = 0; i < splitIt.length; i++){
      if(splitIt[i] != ""){
          let allToLower = splitIt[i].toLowerCase();
          let firstToUpper = splitIt[i][0].toUpperCase();
          myArr.push(firstToUpper + allToLower.substring(1));
      }
    }
    return myArr.join("");
}

// --------------------------------

// 5- Which are in?
function inArray(array1,array2){
    let myArr = [];
    for(let i = 0; i < array1.length; i++){
      for(let j = 0; j < array2.length; j++){
        if(array2[j].search(array1[i]) > -1){
          if(myArr.indexOf(array1[i]) == -1){
            myArr.push(array1[i]);
          }
        }
      }
    }
    myArr = myArr.filter(elmnt=>{
      return elmnt != undefined;
    })
    return myArr.sort();
}

// --------------------------------

// 6- Sort the odd
function sortArray(array) {
    const myArr =  array.filter(v=>v%2).sort((a,b)=>a-b);
    return array.map(v=>v%2 ? myArr.shift() : v);
}

// --------------------------------

// 7- HTML dynamic color string generation
var generateColor = function() {
    let randomHexe = (Math.random() * 0xfffff * 10).toString(16).slice(0,6);
    return "#" + randomHexe;
}

// --------------------------------

// 8- Grouped by commas
function groupByCommas(n) {
    return n.toString().split(/(?=(?:...)*$)/).join(",");
}