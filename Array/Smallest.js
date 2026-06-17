function smallest(array){
    let small=array[0];
    for(i=0;i<array.length;i++){
        (array[i]<small)?small=array[i]:small
        console.log(small)
    }
}
console.log(smallest([12,54,74,98,25,8,36,54,78]))