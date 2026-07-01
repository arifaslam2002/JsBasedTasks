const students = [];
const form = document.querySelector("form")
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const student = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phno: document.getElementById("phno").value,
    course: document.getElementById("course").value,
  };
  if (student.phno.length !== 10) {
    alert("Phone Number must be 10 digits");
    return;
  }
  students.push(student);
 const row = document.createElement("tr")
 row.innerHTML = `
 <td>${student.name}</td>
 <td>${student.email}</td>
 <td>${student.phno}</td>
 <td>${student.course}</td>
 `
 document.getElementById("table").appendChild(row)
form.reset();
});
