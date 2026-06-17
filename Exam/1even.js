function even(array){
    let newArray = [];
    for(i=0;i<array.length;i++){
        (array[i]%2 == 0)?newArray.push(array[i]*array[i]):null
    }
    return console.log(newArray)
}
even([2, 5, 8, 11, 14, 17, 20])