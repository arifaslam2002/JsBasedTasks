function Counter(array){
    let Count ={};
    for(i=0;i<array.length;i++){
        let item = array[i];
    if(Count[item]){
        Count[item]++
    }else{
        Count[item]=1
    }
    }   return console.log(Count)
}
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
Counter(fruits)