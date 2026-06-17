function largest(array){
    let largenum = array[0];
    for(i=0;i<array.length;i++){
        (largenum < array[i])?largenum = array[i]: largenum
    }return console.log(largenum)
}
largest([15, 90, 32, 7, 120, 55])