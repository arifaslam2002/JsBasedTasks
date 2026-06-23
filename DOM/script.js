//1.using dom change title
// const title = document.getElementById("title")
// title.innerHTML="Welcome"
//2.using dom style changing
// const para = document.querySelector(".para1")
// para.style.backgroundColor = "yellow";
// para.style.fontSize = "20px";
// 3.adding a eventlistener
// document.getElementById("btn").addEventListener("click",function(){
//     console.log("Button Clicked")
// })
// 4.appending the child
// const itemList = document.getElementById("item-list")
// const row = document.createElement("li")
// row.innerHTML ="New Item"
// itemList.appendChild(row)
//5.Remove element
// document.getElementById("remove-me").remove()
// 6 class list toggle
// document.getElementById("toggle-btn").addEventListener("click",toggle)
// function toggle(){
//     document.getElementById("my-div").classList.toggle("highlight")
// }
//7
// document.getElementById("btn2").addEventListener("click", function () {
//     document.getElementById("para2").innerHTML = document.getElementById("inp").value;
// });
//8
// document.getElementById("img1").src = "male1.jpeg"
//9
// let paras = document.querySelectorAll("p")
// alert(`count of Paragraph is ${paras.length}`)
//10
// let colors =["red","green","blue"];
// let index =0;
// document.getElementById("btn3").addEventListener("click" ,changeColor)
// function changeColor(){
//     document.body.style.backgroundColor = colors[index];
//     index ++
//     if(index ===  colors.length){
//         index = 0
//     }
// }