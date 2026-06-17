function Vowels(str){
    let count= 0;
    let vowels=["a","e","i","o","u"]
    for(i=0;i<=str.length;i++){
        (vowels.includes(str[i])) ? count++ : count
}return console.log(count)
}
Vowels("javascript")