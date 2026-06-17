function Duplicate(array){
    let newarray = [array[0]];
    for(i=0;i<array.length;i++){
      (newarray.includes(array[i])) ? null :newarray.push(array[i])
    }return console.log(newarray)
}
Duplicate([1, 2, 3, 2, 4, 5, 1, 6])