// here you'll find all kyu-8 katas --- above any code, you'll see the name of the kata
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