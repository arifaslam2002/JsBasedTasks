function fetchTime(){
 setInterval(() => {
    let now =  new Date()
    let hour = now.getHours()
    let min = now.getMinutes()
    let sec = now.getSeconds()
    document.getElementById("hour").innerText=hour
    document.getElementById("min").textContent=min
    document.getElementById("sec").textContent=sec
 }, 1000);
}
fetchTime()