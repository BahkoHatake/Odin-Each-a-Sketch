const display=document.querySelector(".display");
 for(let i=1;i<=256;i++){
    let div =document.createElement("div");
    div.setAttribute("style","width:32px;height:32px;border:1px grey solid;")
    div.classList.add("element")
    display.appendChild(div);
 }
 const elements=document.querySelectorAll(".element")
 elements.forEach(element=>element.addEventListener("mouseover",()=>{
    element.classList.add("red")
    console.log(element)
 }))
