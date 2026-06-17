const students = [
 { name: "Arun", score: 45 },
 { name: "Rahul", score: 80 },
 { name: "Anu", score: 55 },
 { name: "Meera", score: 30 }
];

let students50mark = students.filter(std=>std.score>50)
console.log(students50mark)