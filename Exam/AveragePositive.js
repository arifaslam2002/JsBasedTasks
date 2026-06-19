function averagepostive(array){
    let postive =[];
    for(i=0;i<array.length;i++){
     (array[i]>0)?postive.push(array[i]):null
    }
    let average = 0;
    let sum = 0;
    for (i=0;i<postive.length;i++){
        sum += postive[i]
    }
    average = (sum /(postive.length))
    return console.log(average)
}
const numbers = [-5, 10, 15, -2, 20];
averagepostive(numbers)