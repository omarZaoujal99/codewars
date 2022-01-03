//                                                  *********
//                                                  *********
//                                                  *********
//                                                  *********
//                                                  *********
//                                                  *********
//                                                  *********
//                                                  *********
//                                                  *********
//                                              ******************
//                                                **************
//                                                  **********
//                                                    ******
//                                                      **

//                                 ************ VERY IMPORTANT TO READ ↓↓↓ ************

// here you'll find all kyu-5 kata --- above any code, you'll see the name of the kata
// notice: maybe you'll notice that the code getting better and more readable while you go down, the reason is the 
// experience that I got with the passage of time  

// --------------------------------

// 1- Guess The Gifts!
function guessGifts(wishlist, presents) {
    let res = [];
    for(let i = 0; i < wishlist.length; i++){
        for (let j = 0; j < presents.length; j++) {
            if(wishlist[i].size == presents[j].size && wishlist[i].clatters == presents[j].clatters && wishlist[i].weight == presents[j].weight){
                res.indexOf(wishlist[i].name) == -1 ? res.push(wishlist[i].name) : false;
            }
        }
    }
    return res;
}

// --------------------------------

// 2- The Hashtag Generator
function generateHashtag (str) {
    let res = "#"+str.split(" ").map(v => v.charAt(0).toUpperCase()+v.slice(1)).join("");
    return res.length > 140 || str.match(/\w/g) == null ? false : res; 
}

// --------------------------------

// 3- Convert A Hex String To RGB
function hexStringToRGB(hexString) {
    let parseIt = hexString.slice(1).split(/(?=(?:..)*$)/).map(v => parseInt(v,16));
    return {r:parseIt[0], g:parseIt[1], b:parseIt[2]};
}

// --------------------------------

// 4- Where my anagrams at?
function anagrams(word, words) {
    return words.filter(v => JSON.stringify(v.split("").sort()) == JSON.stringify(word.split("").sort()) ? v : false)
}

// --------------------------------

// 5- Weight for weight
function orderWeight(strng) {
    let obj = {}, arr = strng.split(/\s/);
    for(let i = 0; i < arr.length; i++){
        let length = arr[i].split("").map(v=> parseInt(v)).reduce((total,cur)=>total+=cur,0);
        obj[length] == undefined ? obj[length] = [arr[i]] : obj[length].push(arr[i]);
        obj[length].sort((a,b)=>a.charAt(0)-b.charAt(0));
    } 
    return Object.values(obj).map(v => v.sort()).join(" ").replace(/\W/g," ");
}

// --------------------------------

// 6- Human Readable Time
function humanReadable(seconds) {
    // I'll create an array in this format [HH, MM, SS] then I'll join it by ":" 
    let arr = [Math.floor((seconds/(60*60))%100), Math.floor((seconds/60)%60), seconds%60]
    return arr.map(v=>v.toString().length == 1 ? "0"+v : v).join(":");
}