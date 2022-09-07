let countEl1 = document.getElementById("count-el1")
let saveEl1 = document.getElementById("save-el1")

// document.getElementById its used for getting id by html for function and var.
//("count-el") is id 

let count1 = 0
 
function increment1(){
    count1 = count1 +1
    countEl1.innerText = count1
}

let count2 = 0
let countEl2 = document.getElementById("count-el2")
 
function increment2(){
    count2 = count2 +1
    countEl2.innerText = count2
}