let choice = 0;
creategrid(16)
function creategrid(n){
    if(n>100) n=100;
    let width = 480/n + "px"
    let cont =document.querySelector(".container")
    for(let i=0;i<n;i++){
        let row =document.createElement("div")
        for(let j=0;j<n;j++){
            let pixel = document.createElement("div")
            pixel.classList.add("pixel")
            pixel.style.width=width;
            pixel.style.height=width;
            row.appendChild(pixel)
        }
        row.classList.add("row")
        cont.appendChild(row)
    }
    let boxes = document.querySelectorAll(".pixel")
    boxes.forEach(box=>box.addEventListener("mouseenter",color))
}

function reset(){
    const box = document.querySelector(".container");
    box.innerHTML=""
    let n = prompt("enter grid size");
    console.log(n)
    creategrid(n);
}


function color(e){
    if(choice==1)
    this.style["background-color"]="#" + ((1<<24)*Math.random() | 0).toString(16)
    else
    this.style["background-color"]="black"
}


document.querySelector("#reset").addEventListener("click",reset)
document.querySelector("#black").addEventListener("click",()=>choice=0);
document.querySelector("#rgb").addEventListener("click",()=>choice=1);
document.querySelector("#clear").addEventListener("click",()=>{
    let boxes = document.querySelectorAll(".pixel")
    boxes.forEach(box=>box.style["background-color"]="white");
});
