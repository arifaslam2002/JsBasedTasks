let TaskCmplt = 0;
let TaskPend = 0;

const taskDiv = document.getElementById("task-div");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const task = document.getElementById("task").value;

  if (task.trim() === "") {
    alert("Enter a task");
    return;
  }

  const taskItem = document.createElement("div");

  const para = document.createElement("span");
  para.textContent = task;
  TaskPend++;
  const cltbtn = document.createElement("button");
  cltbtn.textContent = "Complete";
  cltbtn.addEventListener("click", () => {
    para.style.textDecoration = "line-through";

    TaskCmplt++;
    TaskPend--;

    document.getElementById("Pending").textContent = TaskPend;
    document.getElementById("Complted").textContent = TaskCmplt;

    cltbtn.disabled = true;
  });
  const dltbtn = document.createElement("button");
  dltbtn.textContent = "Delete";
  dltbtn.addEventListener("click", () => {
    if (cltbtn.disabled) {
      TaskCmplt--;
    } else {
      TaskPend--;
    }
    document.getElementById("Pending").textContent = TaskPend;
    document.getElementById("Complted").textContent = TaskCmplt;
    taskItem.remove();
  });
  taskItem.appendChild(para);
  taskItem.appendChild(cltbtn);
  taskItem.appendChild(dltbtn);

  taskDiv.appendChild(taskItem);

  document.getElementById("task").value = "";
  document.getElementById("Pending").textContent = TaskPend;
  document.getElementById("Complted").textContent = TaskCmplt;
});
