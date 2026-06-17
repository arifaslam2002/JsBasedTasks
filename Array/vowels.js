function Vowels(str){
    let count=0;
    let vowels= ["a","e","i","o","u"]
    str=str.toLowerCase();
    for(i=0;i<str.length;i++){
        vowels.includes(str[i]) ? count++ :count
    }
    return count
}
console.log(Vowels("ElephAnt"))