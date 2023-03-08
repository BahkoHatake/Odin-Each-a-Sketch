const display=document.querySelector(".display"); 
let grid=document.createElement("div")

function createGrid(pixelsNum){
   grid.classList.add("grid")
   display.appendChild(grid)
   for(let i=1;i<=pixelsNum;i++){
   let div =document.createElement("div");
   div.classList.add("element")
   grid.appendChild(div);
}}
function changeColor(){
   const elements=document.querySelectorAll(".element")
   elements.forEach(element=>element.addEventListener("mouseover",()=>{
   element.classList.add("red")
}))}

createGrid(256)

changeColor()

const pixels=document.querySelector("#pixels")
pixels.addEventListener("change",()=>{
   grid.innerHTML = ''
   let x=pixels.value
   set(x)
   createGrid(x*x)
   changeColor()
})

const r =document.querySelector(":root")
function setCssVariable(c){
   r.style.setProperty("--pixels",`repeat(${c},auto)`)
}
