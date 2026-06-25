let tasks =[];
let completedTasks=[];
document.getElementById("taskForm").addEventListener("submit",addTask)
function addTask(e)
{
     e.preventDefault();
  const inpValue = document.getElementById("inp1").value
  if(inpValue === ""){
    alert("Task box is empty please fill it")
  }else{
    const list = document.getElementById("list")
    const task = document.createElement("li")
    task.innerHTML= inpValue
    list.appendChild(task)
    tasks.push(task)
    document.getElementById("totalTasks").innerHTML = tasks.length
    const completedBtn = document.createElement("button")
    completedBtn.innerHTML="Task Completed"
    const deleteBtn = document.createElement("button")
    deleteBtn.innerHTML="Delete Task "
    task.appendChild(completedBtn)
    document.getElementById("inp1").value = "";
    completedBtn.addEventListener("click",function (){
        task.style.textDecoration = "line-through"
        if(!completedTasks.includes(task)){
          completedTasks.push(task)
         document.getElementById("CompletedTasks").innerHTML = completedTasks.length
        }
        
    })
    deleteBtn.addEventListener("click", function(){
        task.remove()
        tasks = tasks.filter(item => item !== task);
        document.getElementById("totalTasks").textContent = tasks.length;
        if (completedTasks.includes(task)) {
            completedTasks = completedTasks.filter(item => item !== task);
            document.getElementById("CompletedTasks").textContent = completedTasks.length;
        }
    })
    task.appendChild(deleteBtn)
  }
}
