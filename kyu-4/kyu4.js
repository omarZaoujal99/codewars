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

// here you'll find all kyu-6 kata --- above any code, you'll see the name of the kata
// notice: maybe you'll notice that the code getting better and more readable while you go down, the reason is the 
// experience that I got with the passage of time  

// --------------------------------

// 1- Remove Zeros
//! you can't use array.prototype of object.prototype in this kata
function removeZeros(array) {
    let arrOfZeros = [], arrNotZeros = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] == 0 && array[i] !== false){
            arrOfZeros = [...arrOfZeros,array[i]]
        }
        else if(array[i] !== 0){
            arrNotZeros = [...arrNotZeros,array[i]];         
        }
    }
    return [...arrNotZeros,...arrOfZeros]
    // if I can use prototype
    // return array.filter(v => v != 0).concat(array.filter(v => v == 0))
}