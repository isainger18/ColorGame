var num = 6;
let color= changeColor(num)
let newPickedColor= pickColor()
let sqaureColorBox=document.querySelectorAll(".colorBox")
let headingArea= document.querySelector(".headingArea")
let headingSection= document.getElementById("headingSection")
let row=document.querySelector(".row")
let resetBtn=document.getElementById("resetBtn")
let strip= document.querySelector(".bg-gray")
let message= document.querySelector(".message")
// let Easy=document.getElementById("Easy")
// let Hard=document.getElementById("Hard")
// let easyGame= document.querySelector(".easyGame")
let level=document.querySelectorAll(".level")

    level.forEach(e =>{
    e.addEventListener("click", function(){
        e.textContent=== "EASY" ? num=3 : num = 6
        reset()
})
})


resetBtn.addEventListener("click", function(){
reset()
})
function reset(){
    color=  changeColor(num)
    newPickedColor= pickColor()
     for (let i = 0; i < sqaureColorBox.length; i++) {
         if(color[i]){
            sqaureColorBox[i].style.display="block"
             sqaureColorBox[i].style.backgroundColor=color[i]
         }
         else{
            sqaureColorBox[i].style.display="none"
         }
     }
     headingSection.textContent= newPickedColor
     headingArea.style.backgroundColor="#e9ecef"
     message.innerText=""
     resetBtn.innerText="New Colors"

}
for (let i = 0; i < color.length; i++) {
    sqaureColorBox[i].style.backgroundColor=color[i]
    headingSection.innerHTML= newPickedColor
sqaureColorBox[i].addEventListener("click", clickedColor)
}
function clickedColor(){
    let boxColor= this.style.backgroundColor
    if(newPickedColor === boxColor){
         findColor(boxColor)
         message.innerText="Correct"
         resetBtn.innerText="?Play Again"
    }else{
        this.style.backgroundColor= "white"
        message.innerText="Try again"
    }
}

    function findColor(colors){
        for (let i = 0; i < sqaureColorBox.length; i++) {
            sqaureColorBox[i].style.backgroundColor=colors
            headingArea.style.backgroundColor=colors
        }
    }
    function pickColor(){
        let random= Math.floor(Math.random()* color.length)
        return color[random]
    }

    function changeColor(num){
       let arr=[]
        for (let i = 0; i < num; i++) {
            
            arr.push(random_bg_color())
           
        }
        return arr
    }
    
    function random_bg_color() {
    var r= Math.floor(Math.random()*256)
    var g= Math.floor(Math.random()*256)
    var b= Math.floor(Math.random()*256)
    
    return "rgb(" + r + ", " + g + ", " + b + ")"
}