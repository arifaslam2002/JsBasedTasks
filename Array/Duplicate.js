function duplicate(array){
    let newArray =[];
    for(i=0;i<array.length;i++){
        (newArray.includes(array[i]))?null:newArray.push(array[i]) 
    }return newArray
    
}
console.log(duplicate([12,56,24,12,98,74,45,84,56,98,24,45,78,45,63]))