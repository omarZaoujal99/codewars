var wishlist = [
    {"name":"bobble hat" , "size":"small" , "clatters":"no" , "weight":"light"},
    {"name":"card game" , "size":"small" , "clatters":"no" , "weight":"light"},
    {"name":"socks" , "size":"small" , "clatters":"no" , "weight":"light"}
] 
var presents = [
    {"size":"small" , "clatters":"no" , "weight":"light"},
    {"size":"small" , "clatters":"no" , "weight":"light"}
];
// output should be: ["Mini Puzzle","Toy Car"];


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

console.log(guessGifts(wishlist,presents));