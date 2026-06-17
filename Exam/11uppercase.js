function UpperCase(array){
    let newarray =[];
    for(i=0;i<array.length;i++){
        newarray.push(array[i].toUpperCase())
    }
    return console.log(newarray)
}
UpperCase(["arun", "anu", "rahul"])