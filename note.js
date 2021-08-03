let hexString = "#FF9933";

function hexStringToRGB(hexString) {
    let parseIt = hexString.slice(1).split(/(?=(?:..)*$)/).map(v => parseInt(v,16));
    return {r:parseIt[0], g:parseIt[1], b:parseIt[2]};
}

console.log(hexStringToRGB(hexString));