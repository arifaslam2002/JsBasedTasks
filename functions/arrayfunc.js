// function fun1(array){
//     console.log(array.map(n=>n*2))
// }
// fun1([1, 2, 3, 4, 5])
function fun2(array){
    let newArray=[]
    for(i=0;i<array.length;i++){
     (array[i]%2 == 0)?(newArray.push(array[i])):null
    }
    return console.log(newArray)
}
fun2