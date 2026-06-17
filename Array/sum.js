function sum(Array){
    let total = 0;
    for(i=0;i<=Array.length-1;i++){
        total += Array[i]
    }
    return total;
}

console.log(sum([12,18,89,52,74]))