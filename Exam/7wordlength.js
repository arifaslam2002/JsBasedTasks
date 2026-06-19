function word(sentence){
    sentence = sentence.trim()
    let wordArray =[]
    let wordCount=[];
    wordArray = sentence.split(" ")
    for(i=0;i<wordArray.length;i++){
       wordCount.push(wordArray[i].length) 
    }return console.log(wordCount)
}
word("fjfvjd sdvkjvdkjjk dvjkdskjdsk djnkjdsjndsj")