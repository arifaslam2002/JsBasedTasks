function odd(array){
    let newArray = [];
    for(i=0;i<array.length;i++){
        (array[i]%2 != 0)?newArray.push(array[i]*array[i]*array[i]):null
    }
    return console.log(newArray)
}
odd([1, 2, 3, 4, 5])