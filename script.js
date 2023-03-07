const display=document.querySelector(".display");
 for(let i=1;i<=256;i++){
    let element =document.createElement("div");
    element.setAttribute("style","width:32px;height:32px;border:2px red solid;")
    display.appendChild(element);
 }
