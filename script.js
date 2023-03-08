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
   element.classList.add("color")
}))}
function restartGrid(){
   grid.innerHTML = ''
}

createGrid(256)

changeColor()

const pixels=document.querySelector("#pixels")
pixels.addEventListener("change",()=>{
   restartGrid()
   let x=pixels.value
   setCssVariable(x)
   createGrid(x*x)
   changeColor()
})

const r =document.querySelector(":root")
function setCssVariable(c){
   r.style.setProperty("--pixels",`repeat(${c},auto)`)
}

const color=document.querySelector("#color")
color.addEventListener("change",()=>{
   const elements1=document.querySelectorAll(".element");
   elements1.forEach(element=>element.addEventListener("mouseover",()=>{
      element.style.backgroundColor=`${color.value}`
   }))})


const clear=document.querySelector(".clear")
clear.addEventListener("click",()=>{
   restartGrid()
   y=getValueOfPix().slice(7,9)
   setCssVariable(y)
   createGrid(y*y)
   changeColor()
})

function getValueOfPix(){
   let rs = getComputedStyle(r)
   return rs.getPropertyValue("--pixels")
}
