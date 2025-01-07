var button=document.getElementById("count");
let count=0;
button.addEventListener("click",()=>{
    count++;
    let countElement=document.getElementById("count");
    countElement.innerText="Count =", count


})