const arr = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14];

function removeZeros(array) {
    // let arrOfZeros = array.filter(v => v == 0);
    // let arrNotZeros = array.filter(v => v != 0);
    return array.filter(v => v != 0).concat(array.filter(v => v == 0))
}

console.log(removeZeros(arr));