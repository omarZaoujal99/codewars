// here you'll find all kyu-5 katas --- above any code, you'll see the name of the kata
// notice: maybe you'll notice that the code getting better and more readable while you go down, the reason of the 
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