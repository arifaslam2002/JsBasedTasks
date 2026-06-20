// function fun1(array){
//     console.log(array.map(n=>n*2))
// }
// fun1([1, 2, 3, 4, 5])
// function fun2(array){
//     let newArray=[]
//     for(i=0;i<array.length;i++){
//      (array[i]%2 == 0)?(newArray.push(array[i])):null
//     }
//     return console.log(newArray)
// }
// fun2([1, 2, 3, 4, 5, 6, 7, 8])
// function fun3(array){
//     let sum = array.reduce((sum,n)=>sum + n,0)
//     return sum
// }
// console.log(fun3([10, 20, 30, 40, 50]))
const people = [
  { name: "Tom", age: 14 },
  { name: "Sara", age: 22 },
  { name: "Mike", age: 17 },
];
// let newPerson = people.find(person => person.age > 18)
// console.log(newPerson)

//  let names =people.map(person => person.name)
//  console.log(names)
//  function fuc6(array){
//     let newArray = [];
//     for(i=0;i<array.length;i++){
//         (array[i].length > 4 )?newArray.push(array[i]):null
//     }return newArray
//  }
//  console.log(fuc6(["cat", "elephant", "dog", "rhinoceros", "ox"]))

//  function bonus(object){
//     return object
//     .filter(person => person.age >= 18)
//     .map(person => person.name)
    
//  }
//  console.log(bonus(people))