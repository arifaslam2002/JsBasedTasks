let text = "JavaScript is awesome";

let count= text.toLowerCase().split("").filter(char=>"aeiou".includes(char)).length
console.log(count)